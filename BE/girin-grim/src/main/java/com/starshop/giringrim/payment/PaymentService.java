package com.starshop.giringrim.payment;

import com.starshop.giringrim.funding.entity.Funding;
import com.starshop.giringrim.funding.exception.FundingNotExistException;
import com.starshop.giringrim.funding.repository.FundingRepository;
import com.starshop.giringrim.member.entity.Member;
import com.starshop.giringrim.member.exception.MemberNotExistException;
import com.starshop.giringrim.member.repository.MemberRepository;
import com.starshop.giringrim.option.Option;
import com.starshop.giringrim.option.OptionRepository;
import com.starshop.giringrim.utils.exception.ErrorMessage;
import com.starshop.giringrim.utils.security.UserDetailsImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PaymentService {

    private final OptionRepository optionRepository;
    private final MemberRepository memberRepository;
    private final FundingRepository fundingRepository;

    @Transactional(readOnly = true)
    public PaymentRespDtos.PaymentDetailsDto getPaymentDetails(Long fundingId, UserDetailsImpl userDetails) {
        //서포터 정보
        Member member = memberRepository.findByEmail(userDetails.getEmail()).orElseThrow(
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
        if(member.getId().equals(creator.getId())){
            throw new PaymentUnavailableException(ErrorMessage.PAYMENT_UNAVAILABLE);
        }
        return new PaymentRespDtos.PaymentDetailsDto(creator.getNickname(), member, funding);
    }


   
}
