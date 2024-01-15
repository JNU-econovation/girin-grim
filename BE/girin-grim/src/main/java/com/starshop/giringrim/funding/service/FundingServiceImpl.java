package com.starshop.giringrim.funding.service;

import com.starshop.giringrim.favUniversity.entity.FavUniversity;
import com.starshop.giringrim.favUniversity.repository.FavUniversityRepository;
import com.starshop.giringrim.funding.entity.Funding;

import java.math.BigDecimal;
import java.time.*;

import com.starshop.giringrim.funding.entity.FundingType;
import com.starshop.giringrim.funding.exception.*;
import com.starshop.giringrim.funding.repository.FundingRepository;
import com.starshop.giringrim.funding.dto.FundingReqDtos;
import com.starshop.giringrim.funding.dto.FundingRespDtos;
import com.starshop.giringrim.funding.repository.FundingRepositoryCustom;
import com.starshop.giringrim.funding.repository.FundingSearchCondition;
import com.starshop.giringrim.member.entity.Member;
import com.starshop.giringrim.member.exception.MemberNotExistException;
import com.starshop.giringrim.member.exception.UniversitySelectionException;
import com.starshop.giringrim.member.repository.MemberRepository;
import com.starshop.giringrim.option.Option;
import com.starshop.giringrim.option.OptionRepository;
import com.starshop.giringrim.option.item.Item;
import com.starshop.giringrim.option.item.ItemRepository;
import com.starshop.giringrim.university.repository.UnivRepository;
import com.starshop.giringrim.university.entity.University;
import com.starshop.giringrim.utils.exception.ErrorMessage;
import com.starshop.giringrim.utils.security.UserDetailsImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@RequiredArgsConstructor
@Slf4j
public class FundingServiceImpl implements FundingService {

    private final FundingRepository fundingRepository;
    private final OptionRepository optionRepository;
    private final ItemRepository itemRepository;
    private final UnivRepository univRepository;
    private final MemberRepository memberRepository;
    private final FavUniversityRepository favUniversityRepository;
    private final FundingRepositoryCustom fundingRepositoryCustom;

    @Override
    @Transactional
    public void createFunding(FundingReqDtos.UploadDto uploadDto, String email) {
        //유효하지 않은 멤버일 경우
        Member member = memberRepository.findByEmail(email).orElseThrow(
                () -> new MemberNotExistException(ErrorMessage.MEMBER_NOT_EXIST)
        );

        //요청body의 대학교가 존재하지 않을 경우
        University university = univRepository.findById(uploadDto.getFunding().getUniversity()).orElseThrow(
                () -> new UniversitySelectionException(ErrorMessage.SELECTED_WRONG_UNIVERSITY)
        );


        Instant instant = Instant.now();
        ZonedDateTime zdt = instant.atZone(ZoneId.systemDefault());
        LocalDateTime ldt = zdt.toLocalDateTime();
        //펀딩 시작시간이 현재시간보다 빠를 경우
        if(uploadDto.getFunding().getStartTime().isBefore(ldt)){
            throw new FundingStartUnavailableException(ErrorMessage.FUNDING_START_DATE_UNAVAILABLE);
        }
        //펀딩 시작시간보다 종료시간이 느릴 경우
        if(!uploadDto.getFunding().getEndTime().isAfter(uploadDto.getFunding().getStartTime())){
            throw new FundingDurationUnavailableException(ErrorMessage.FUNDING_DURATION_UNAVAILABLE);
        }
        //펀딩 실행예정시간이 펀딩 종료시간 이후가 아닐 경우
        if(uploadDto.getFunding().getEstimatedStartTime().isBefore(uploadDto.getFunding().getEndTime())){
            throw new FundingEstimateUnavailableException(ErrorMessage.FUNDING_ESTIMATE_DATE_UNAVAILABLE);
        }



        //DONATE인데 옵션이 있거나 GIFT인데 옵션이 없으면 예외처리 - 프론트와 상의해서 요청으로 type 받지 않고 백에서 판단해서 처리
        //옵션이 없다면 기부형이므로 펀딩 생성 후 반환
        if(uploadDto.getOptions() == null) {
            Funding funding = uploadDto.getFunding().toEntity(university, FundingType.DONATE, member);
            fundingRepository.save(funding);
            return;
        }

        //로그인 정보에서 Member 객체 얻어와서 Funding 객체에 넣기
        Funding funding = uploadDto.getFunding().toEntity(university,FundingType.GIFT, member);
        fundingRepository.save(funding);

        BigDecimal maxGoalMoney = BigDecimal.ZERO;
        boolean isUnlimited = false;
        //옵션, 아이템
        for(FundingReqDtos.UploadDto.OptionDto optionDto : uploadDto.getOptions()) {
            Option option = optionDto.toEntity(funding);
            optionRepository.save(option);
            if(optionDto.getQuantity() == -1){
                isUnlimited = true;
            }
            maxGoalMoney = maxGoalMoney.add(optionDto.getPrice().multiply(BigDecimal.valueOf(optionDto.getQuantity())));
            for(FundingReqDtos.UploadDto.OptionDto.ItemDto itemDto : optionDto.getItems()){
                Item item = itemDto.toEntity(option);
                itemRepository.save(item);
            }
        }

        //GIFT일 경우 goal money가 총 옵션의 가격까지만 입력 가능, 하지만 옵션 하나라도 quantity가 -1(무제한)일 경우 goal money 제한없음
        if(!isUnlimited && maxGoalMoney.compareTo(uploadDto.getFunding().getGoalMoney()) > 0){
            throw new FundingGoalMoneyException(ErrorMessage.FUNDING_GOAL_MONEY_UNAVAILABLE);
        }
    }

    @Override
    @Transactional(readOnly = true)
    public FundingRespDtos.GetFundingDto getFunding(Long id, UserDetailsImpl userDetails) {

        boolean isMine = true;
        //pathvariable로 받은 id로 펀딩 조회해오기
        Funding funding = fundingRepository.findById(id).orElseThrow(
                () -> new FundingNotExistException(ErrorMessage.FUNDING_NOT_EXIST)
        );
        //펀딩 아이디로 옵션 조회해오기
        List<Option> options = optionRepository.findAllByFundingId(funding.getId());

        //옵션 아이디로 아이템 조회해오기
        List<FundingRespDtos.GetFundingDto.OptionsDTO> optionDTOs = new ArrayList<>();
        for (Option option : options) {
            List<Item> items = itemRepository.findAllByOptionId(option.getId());
            optionDTOs.add(new FundingRespDtos.GetFundingDto.OptionsDTO(option, items));
        }

        FundingRespDtos.GetFundingDto.MemberDto memberDto = new FundingRespDtos.GetFundingDto.MemberDto(funding.getMember());

        //로그인을 안 한 사용자, 본인의 펀딩 글이 아니라면 isMine은 false,
        //로그인을 안 한 사용자면 coin은 null
        String role = SecurityContextHolder.getContext().getAuthentication().getName();
        if(role.equals("anonymousUser")){
            isMine = false;
            return new FundingRespDtos.GetFundingDto(isMine, null, memberDto, FundingRespDtos.GetFundingDto.FundingDto.of(funding), optionDTOs);
        }

        Optional<Member> member = memberRepository.findByEmail(userDetails.getEmail());
        //본인의 펀딩 글이 아닐 경우
        if(!Objects.equals(funding.getMember().getEmail(), userDetails.getEmail())){
            isMine = false;
            return new FundingRespDtos.GetFundingDto(isMine, member.get().getCoin(), memberDto, FundingRespDtos.GetFundingDto.FundingDto.of(funding), optionDTOs);
        }

        //로그인을 한 사용자이고 본인의 펀딩 글이라면 isMine은 true
        return new FundingRespDtos.GetFundingDto(isMine,member.get().getCoin(), memberDto, FundingRespDtos.GetFundingDto.FundingDto.of(funding), optionDTOs);

    }

    @Override
    @Transactional(readOnly = true)
    public FundingRespDtos.FundingDescriptionDto getFundingDescription(Long id) {
        Funding funding = fundingRepository.findById(id).orElseThrow(
                () -> new FundingNotExistException(ErrorMessage.FUNDING_NOT_EXIST)
        );
        return new FundingRespDtos.FundingDescriptionDto(funding);
    }

    @Override
    @Transactional(readOnly = true)
    public FundingRespDtos.HomeDto home(Integer page, Long universityId, String fundingType, String keyword, String method, UserDetailsImpl userDetails){


        String role = SecurityContextHolder.getContext().getAuthentication().getName();

        //비로그인 유저일 경우
        if(role.equals("anonymousUser")){
            Pageable pageable = PageRequest.of(page,6);

            //회원가입했을때 설정 대학들 없으므로 null
            List<Long> universityIds = null;
            //favUniversity 리스트는 비어있는 리스트로
            List<FavUniversity> favUniversityList = List.of();
            FundingSearchCondition condition = new FundingSearchCondition(pageable, universityId, keyword, fundingType, method, universityIds);
            //펀딩 리스트 얻어오기
            List<FundingRespDtos.HomeDto.FundingDto> list = fundingRepositoryCustom.searchWithNonLogin(condition);
            return new FundingRespDtos.HomeDto(favUniversityList,list);

        }

        //로그인 한 사용자의 정보를 이용해 favUniversity 리스트 얻어오기
        Member member = memberRepository.findByEmail(userDetails.getEmail()).orElseThrow(
                () -> new MemberNotExistException(ErrorMessage.MEMBER_NOT_EXIST)
        );

        List<FavUniversity> favUniversityList = favUniversityRepository.findByMemberId(member.getId());

        List<Long> universityIds = new ArrayList<>();
        //사용자가 설정한 관심대학 이름을 가져와서 전국대학 리스트에서 아이디값 추출
        for(FavUniversity favUniversity : favUniversityList){
            University university = univRepository.findByName(favUniversity.getName()).orElseThrow(
                    () -> new UniversitySelectionException(ErrorMessage.SELECTED_WRONG_UNIVERSITY)
            );
            universityIds.add(university.getId());
        }

        Pageable pageable = PageRequest.of(page,6);


        FundingSearchCondition condition = new FundingSearchCondition(pageable, universityId, keyword, fundingType, method, universityIds);
        //펀딩 리스트 얻어오기
        List<FundingRespDtos.HomeDto.FundingDto> list = fundingRepositoryCustom.searchWithLogin(condition);


        return new FundingRespDtos.HomeDto(favUniversityList, list);
    }
}
