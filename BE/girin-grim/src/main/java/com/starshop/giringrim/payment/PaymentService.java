package com.starshop.giringrim.payment;

import com.starshop.giringrim.funding.entity.Funding;
import com.starshop.giringrim.funding.entity.FundingType;
import com.starshop.giringrim.funding.exception.FundingNotExistException;
import com.starshop.giringrim.funding.repository.FundingRepository;
import com.starshop.giringrim.member.entity.Member;
import com.starshop.giringrim.member.exception.MemberNotExistException;
import com.starshop.giringrim.member.repository.MemberRepository;
import com.starshop.giringrim.option.Option;
import com.starshop.giringrim.option.OptionRepository;
import com.starshop.giringrim.option.item.Item;
import com.starshop.giringrim.option.item.ItemRepository;
import com.starshop.giringrim.payment.details.PaymentDetails;
import com.starshop.giringrim.payment.details.PaymentDetailsRepository;
import com.starshop.giringrim.payment.exception.*;
import com.starshop.giringrim.utils.exception.ErrorMessage;
import com.starshop.giringrim.utils.security.UserDetailsImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class PaymentService {

    private final OptionRepository optionRepository;
    private final MemberRepository memberRepository;
    private final FundingRepository fundingRepository;
    private final PaymentRepository paymentRepository;
    private final PaymentDetailsRepository paymentDetailsRepository;
    private final ItemRepository itemRepository;

    @Transactional(readOnly = true)
    public PaymentRespDtos.PaymentDetailsDto getPaymentDetails(Long fundingId, UserDetailsImpl userDetails) {
        //서포터 정보
        Member supporter = memberRepository.findByEmail(userDetails.getEmail()).orElseThrow(
                () -> new MemberNotExistException(ErrorMessage.MEMBER_NOT_EXIST)
        );

        Funding funding = fundingRepository.findById(fundingId).orElseThrow(
                () -> new FundingNotExistException(ErrorMessage.FUNDING_NOT_EXIST)
        );

        //펀딩이 진행중이 아니라면 예외
        if(!funding.isProgress()){
            throw new PaymentDurationException(ErrorMessage.PAYMENT_DURATION_UNAVAILABLE);
        }
        //크리에이터의 닉네임
        Member creator = funding.getMember();

        //크리에이터는 본인의 펀딩에 후원할 수 없으므로 userDetails의 멤버와 펀딩 작성자의 멤버 정보가 같으면 예외
        if(supporter.getId().equals(creator.getId())){
            throw new PaymentUnavailableException(ErrorMessage.PAYMENT_UNAVAILABLE);
        }
        return new PaymentRespDtos.PaymentDetailsDto(creator, supporter, funding);
    }

    @Transactional
    public void chargeCoins(PaymentReqDtos.ChargeDto reqDto, UserDetailsImpl userDetails) {
        Member member = memberRepository.findByEmail(userDetails.getEmail()).orElseThrow(
                () -> new MemberNotExistException(ErrorMessage.MEMBER_NOT_EXIST)
        );
        BigDecimal myCoin = member.getCoin().add(reqDto.getCoin());

        member.chargeCoins(myCoin);
    }

    @Transactional(readOnly = true)
    public PaymentRespDtos.ChargeDetailsDto getChargeDetails(UserDetailsImpl userDetails) {
        Member member = memberRepository.findByEmail(userDetails.getEmail()).orElseThrow(
                () -> new MemberNotExistException(ErrorMessage.MEMBER_NOT_EXIST)
        );
        return new PaymentRespDtos.ChargeDetailsDto(member);
    }


    @Transactional
    public void fundingPayment(PaymentReqDtos.FundingPaymentDto reqDto, Long fundingId, UserDetailsImpl userDetails) {

        //로그인 사용자 정보 얻어오기
        Member member = memberRepository.findByEmail(userDetails.getEmail()).orElseThrow(
                () -> new MemberNotExistException(ErrorMessage.MEMBER_NOT_EXIST)
        );

        //후원자 아이디와 로그인 사용자 아이디가 다를 경우
        if(!Objects.equals(reqDto.getMemberId(), member.getId())){
            throw new MemberNotExistException(ErrorMessage.MEMBER_NOT_EXIST);
        }

        Funding funding = fundingRepository.findById(fundingId).orElseThrow(
                () -> new FundingNotExistException(ErrorMessage.FUNDING_NOT_EXIST)
        );

        //크리에이터의 닉네임
        Member creator = funding.getMember();

        //크리에이터는 본인의 펀딩에 후원할 수 없으므로 userDetails의 멤버와 펀딩 작성자의 멤버 정보가 같으면 예외
        if(member.getId().equals(creator.getId())){
            throw new PaymentUnavailableException(ErrorMessage.PAYMENT_UNAVAILABLE);
        }

        if(paymentRepository.findByMemberIdFundingId(member.getId(), funding.getId()).isPresent()){
            throw new PaymentAlreadyDoneException(ErrorMessage.PAYMENT_ALREADY_DONE);
        }

        //결제 객체 만들기
        Payment payment = Payment.builder()
                .member(member)
                .funding(funding)
                .build();
        paymentRepository.save(payment);

        if(reqDto.getType() == FundingType.GIFT){
            BigDecimal totalCoin = BigDecimal.ZERO;

            for(PaymentReqDtos.FundingPaymentDto.OptionDto paymentDto : reqDto.getOptions()) {
                //요청dto에 담긴 옵션 아이디와 수량 가져오기
                Long optionId = paymentDto.getOptionId();
                Long quantity = paymentDto.getQuantity();

                //옵션 아이디로 객체 가져오기
                Option option = optionRepository.findById(optionId).orElseThrow(
                        () -> new PaymentOptionNotExistException(ErrorMessage.PAYMENT_OPTION_NOT_EXIST)
                );

                //수량 부족 예외
                if (quantity > option.getQuantity() && option.getQuantity() != -1) {
                    throw new QuantityNotEnoughException(ErrorMessage.QUANTITY_NOT_ENOUGH);
                }
                //수량이 -1이면 무한대이므로 수량 감소 x , 아닐 경우 수량 감소
                if (option.getQuantity() != -1) {
                    option.updateQuantity(quantity);
                }

                //옵션금액 * 수량 ⇒ 총 금액 계산
                BigDecimal totalPrice = option.getPrice().multiply(BigDecimal.valueOf(quantity));

                //결제 상세 객체 만들기
                PaymentDetails paymentDetails = PaymentDetails.builder()
                        .quantity(quantity)
                        .totalPrice(totalPrice)
                        .option(option)
                        .payment(payment)
                        .build();
                paymentDetailsRepository.save(paymentDetails);

                //옵션들 총 금액 업데이트
                totalCoin = totalCoin.add(totalPrice);
            }

            //펀딩글 금액 업데이트
            funding.updateCurrentMoney(totalCoin);

            //보유 금액 < 결제 금액 이면 예외
            if(member.getCoin().compareTo(totalCoin) < 0){
                throw new CoinNotEnoughException(ErrorMessage.COIN_NOT_ENOUGH);
            }
            //멤버의 코인 차감, 주소 업데이트
            member.fundingPayment(totalCoin);
            member.updateAddress(reqDto.getAddress());

        }else if(reqDto.getType() == FundingType.DONATE){
            //기부형
            PaymentDetails paymentDetails = PaymentDetails.builder()
                    .quantity(null)
                    .totalPrice(reqDto.getPrice())
                    .option(null)
                    .payment(payment)
                    .build();
            paymentDetailsRepository.save(paymentDetails);


            //펀딩글 금액 업데이트
            funding.updateCurrentMoney(reqDto.getPrice());

            //보유 금액 < 결제 금액 이면 예외
            if(member.getCoin().compareTo(reqDto.getPrice()) < 0){
                throw new CoinNotEnoughException(ErrorMessage.COIN_NOT_ENOUGH);
            }
            //멤버의 코인 차감, 주소 업데이트
            member.fundingPayment(reqDto.getPrice());
            member.updateAddress(reqDto.getAddress());

        }else{
            throw new PaymentTypeNotExistException(ErrorMessage.PAYMENT_TYPE_NOT_EXIST);
        }

    }

    @Transactional(readOnly = true)
    public PaymentRespDtos.PaymentHistoryDto fundingHistory(Long memberId, Long fundingId, UserDetailsImpl userDetails){

        //로그인 사용자 정보 얻어오기
        Member member = memberRepository.findByEmail(userDetails.getEmail()).orElseThrow(
                () -> new MemberNotExistException(ErrorMessage.MEMBER_NOT_EXIST)
        );

        Funding funding = fundingRepository.findById(fundingId).orElseThrow(
                () -> new FundingNotExistException(ErrorMessage.FUNDING_NOT_EXIST)
        );

        Member creator = funding.getMember();

        //본인의 후원 내역만 조회 가능
        if(!memberId.equals(member.getId())){
            throw new HistoryForbiddenException(ErrorMessage.HISTORY_FORBIDDEN);
        }

        Payment payment = paymentRepository.findByMemberIdFundingId(memberId, fundingId).orElseThrow(
                () -> new HistoryNotExistException(ErrorMessage.HISTORY_NOT_EXIST)
        );

        List<PaymentDetails> paymentDetails = paymentDetailsRepository.findByPamentId(payment.getId());

        //구매한 옵션의 총 금액
        BigDecimal totalPrice = BigDecimal.ZERO;

        //구매한 옵션 정보 담을 리스트
        List<Option> optionList = new ArrayList<>();
        for(PaymentDetails details : paymentDetails) {
            totalPrice = totalPrice.add(details.getTotalPrice());
            optionList.add(details.getOption());
        }

        List<PaymentRespDtos.PaymentHistoryDto.OptionsDto> optionDtos = new ArrayList<>();

        //옵션, 아이템을 담을 DTO
        if(funding.getFundingType() == FundingType.GIFT){
            int i=0;
            for (Option option : optionList) {
                List<Item> items = itemRepository.findAllByOptionId(option.getId());
                optionDtos.add(new PaymentRespDtos.PaymentHistoryDto.OptionsDto(option, paymentDetails.get(i), items));
                i++;
            }
        }
        return new PaymentRespDtos.PaymentHistoryDto(totalPrice, creator, member.getAddress(),funding, optionDtos);
    }

    @Transactional(readOnly = true)
    public PaymentRespDtos.PaymentListDto fundingHistoryList(Long memberId, UserDetailsImpl userDetails){
        //로그인 사용자 정보 얻어오기
        Member loginedMember = memberRepository.findByEmail(userDetails.getEmail()).orElseThrow(
                () -> new MemberNotExistException(ErrorMessage.MEMBER_NOT_EXIST)
        );

        //존재하지 않는 멤버 예외
        Member member = memberRepository.findById(memberId).orElseThrow(
                () -> new MemberNotExistException(ErrorMessage.MEMBER_NOT_EXIST)
        );

        //본인의 후원 내역만 조회 가능
        if(!memberId.equals(member.getId())) {
            throw new HistoryForbiddenException(ErrorMessage.HISTORY_FORBIDDEN);
        }

        List<Payment> paymentList = paymentRepository.findByMemberId(memberId);

        List<Long> fundingIds = new ArrayList<>();
        for(Payment payment : paymentList){
            fundingIds.add(payment.getFunding().getId());
        }

        //후원한 펀딩의 리스트
        List<Funding> fundingList = fundingRepository.findFundingsByIds(fundingIds);

        List<PaymentRespDtos.PaymentListDto.FundingDto> respDtoList = new ArrayList<>();
        Instant instant = Instant.now();
        ZonedDateTime zdt = instant.atZone(ZoneId.systemDefault());
        LocalDateTime ldt = zdt.toLocalDateTime();

        //펀딩 종료 & 달성
        for (Funding funding : fundingList) {
            boolean isFinished = false;
            boolean isSuccess = false;

            if(funding.getEndTime().isAfter(ldt)){
                isFinished = true;
            }
            if(funding.increseRate().compareTo(BigDecimal.valueOf(100)) >= 0){
                isSuccess = true;
            }
            Member creator = funding.getMember();
            respDtoList.add(new PaymentRespDtos.PaymentListDto.FundingDto
                    (funding, creator, new PaymentRespDtos.PaymentListDto.FundingDto.StateDto(isFinished, isSuccess)));
        }

        return new PaymentRespDtos.PaymentListDto(respDtoList);
    }

    @Transactional(readOnly = true)
    public PaymentRespDtos.CreationListDto fundingCreationList(Long memberId){
        //조회하고자하는 사람의 아이디로 멤버 조회
        Member member = memberRepository.findById(memberId).orElseThrow(
                () -> new MemberNotExistException(ErrorMessage.MEMBER_NOT_EXIST)
        );

        List<Funding> fundingList = fundingRepository.findFundingsByMemberId(member.getId());

        List<PaymentRespDtos.CreationListDto.FundingDto> respDtoList = new ArrayList<>();
        Instant instant = Instant.now();
        ZonedDateTime zdt = instant.atZone(ZoneId.systemDefault());
        LocalDateTime ldt = zdt.toLocalDateTime();

        //펀딩 종료 & 달성
        for (Funding funding : fundingList) {
            boolean isFinished = false;
            boolean isSuccess = false;

            if(funding.getEndTime().isAfter(ldt)){
                isFinished = true;
            }
            if(funding.increseRate().compareTo(BigDecimal.valueOf(100)) >= 0){
                isSuccess = true;
            }
            Member creator = funding.getMember();
            respDtoList.add(new PaymentRespDtos.CreationListDto.FundingDto
                    (funding, creator, new PaymentRespDtos.CreationListDto.FundingDto.StateDto(isFinished, isSuccess)));
        }

        return new PaymentRespDtos.CreationListDto(respDtoList);

    }



}
