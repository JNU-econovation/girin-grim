package com.starshop.giringrim.funding.service;

import com.starshop.giringrim.funding.entity.Funding;
import java.time.*;
import com.starshop.giringrim.funding.exception.FundingDurationUnavailableException;
import com.starshop.giringrim.funding.exception.FundingEstimateUnavailableException;
import com.starshop.giringrim.funding.exception.FundingNotExistException;
import com.starshop.giringrim.funding.exception.FundingStartUnavailableException;
import com.starshop.giringrim.funding.repository.FundingRepository;
import com.starshop.giringrim.funding.dto.FundingReqDtos;
import com.starshop.giringrim.funding.dto.FundingRespDtos;
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
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class FundingServiceImpl implements FundingService {

    private final FundingRepository fundingRepository;
    private final OptionRepository optionRepository;
    private final ItemRepository itemRepository;
    private final UnivRepository univRepository;
    private final MemberRepository memberRepository;

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

       // FundingType.parsing(uploadDto.getFunding().getType().toString());

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
        //펀딩 시작예정시간이 시작시간과 종료시간 사이가 아닐 경우
        if(uploadDto.getFunding().getEstimatedStartTime().isBefore(uploadDto.getFunding().getStartTime()) ||
                uploadDto.getFunding().getEstimatedStartTime().isAfter(uploadDto.getFunding().getEndTime())){
            throw new FundingEstimateUnavailableException(ErrorMessage.FUNDING_ESTIMATE_DATE_UNAVAILABLE);
        }

        //로그인 정보에서 Member 객체 얻어와서 Funding 객체에 넣기
        Funding funding = uploadDto.getFunding().toEntity(university, uploadDto.getFunding().getType(), member);
        fundingRepository.save(funding);

        //TODO : DONATE인데 옵션이 있거나 GIFT인데 옵션이 없으면 예외처리 - 프론트와 상의해서 요청으로 type 받지 않고 백에서 판단해서 처리
        //옵션이 없다면 기부형이므로 펀딩 생성 후 반환
        if(uploadDto.getOptions() == null) {
            return;
        }

        //옵션, 아이템
        for(FundingReqDtos.UploadDto.OptionDto optionDto : uploadDto.getOptions()) {
            Option option = optionDto.toEntity(funding);
            optionRepository.save(option);
            for(FundingReqDtos.UploadDto.OptionDto.ItemDto itemDto : optionDto.getItems()){
                //TODO : 아이템이 없다면 예외처리
                Item item = itemDto.toEntity(option);
                itemRepository.save(item);
            }
        }

        //TODO : GIFT일 경우 goal money가 총 옵션의 가격까지만 입력 가능, 하지만 옵션 하나라도
        // quantity가 -1(무제한)일 경우 goal money 제한없음

        //TODO : 기부형일 경우 goal money 제한없음
    }

    @Override
    @Transactional(readOnly = true)
    public FundingRespDtos.UploadFunding getFunding(Long id, UserDetailsImpl userDetails) {

        boolean isMine = true;
        //pathvariable로 받은 id로 펀딩 조회해오기
        Funding funding = fundingRepository.findById(id).orElseThrow(
                () -> new FundingNotExistException(ErrorMessage.FUNDING_NOT_EXIST)
        );
        //펀딩 아이디로 옵션 조회해오기
        List<Option> options = optionRepository.findAllByFundingId(funding.getId());

        //옵션 아이디로 아이템 조회해오기
        List<FundingRespDtos.UploadFunding.OptionsDTO> optionDTOs = new ArrayList<>();
        for (Option option : options) {
            List<Item> items = itemRepository.findAllByOptionId(option.getId());
            optionDTOs.add(new FundingRespDtos.UploadFunding.OptionsDTO(option, items));
        }

        //로그인을 안 한 사용자, 본인의 펀딩 글이 아니라면 isMine은 false
        String role = SecurityContextHolder.getContext().getAuthentication().getName();
        if(role.equals("anonymousUser") || (!Objects.equals(funding.getMember().getEmail(), userDetails.getEmail()))){
            isMine = false;
            return new FundingRespDtos.UploadFunding(isMine, FundingRespDtos.UploadFunding.FundingDto.of(funding), optionDTOs);
        }

        //로그인을 한 사용자이고 본인의 펀딩 글이 아니라면 isMine은 true
        return new FundingRespDtos.UploadFunding(isMine, FundingRespDtos.UploadFunding.FundingDto.of(funding), optionDTOs);

    }

   
}
