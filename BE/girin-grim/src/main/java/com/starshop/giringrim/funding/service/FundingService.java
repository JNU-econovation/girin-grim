package com.starshop.giringrim.funding.service;


import com.starshop.giringrim.funding.dto.FundingReqDtos;
import com.starshop.giringrim.funding.dto.FundingRespDtos;
import com.starshop.giringrim.utils.security.UserDetailsImpl;

public interface FundingService {


    /*
    *   펀딩 작성하기 메소드
     */
    void createFunding(FundingReqDtos.UploadDto uploadDto, String email);

    /*
    *   펀딩 아이디값으로 펀딩 조회
     */
    FundingRespDtos.GetFundingDto getFunding(Long id, UserDetailsImpl userDetails);

    /*
    *   펀딩 아이디값으로 펀딩 설명 조회
     */
    FundingRespDtos.FundingDescriptionDto getFundingDescription(Long id);

    /*
     *   홈 조회 메서드
     */
    FundingRespDtos.HomeDto home(Integer page, Long universityId, String fundingType, String keyword, String method, UserDetailsImpl userDetails);

}
