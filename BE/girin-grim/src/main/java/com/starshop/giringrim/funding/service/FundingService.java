package com.starshop.giringrim.funding.service;


import com.starshop.giringrim.funding.dto.FundingReqDtos;
import com.starshop.giringrim.funding.dto.FundingRespDtos;
import com.starshop.giringrim.utils.security.UserDetailsImpl;

public interface FundingService {

    /*
    *   펀딩 작성하기 메소드
     */
    void createFunding(FundingReqDtos.UploadDto uploadDto, String email);

    
}
