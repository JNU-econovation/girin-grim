package com.starshop.giringrim.funding.controller;

import com.starshop.giringrim.funding.dto.FundingReqDtos;
import com.starshop.giringrim.funding.dto.FundingRespDtos;
import com.starshop.giringrim.funding.service.FundingServiceImpl;
import com.starshop.giringrim.utils.common.ApiResponseGenerator;
import com.starshop.giringrim.utils.security.UserDetailsImpl;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class FundingController {

    private final FundingServiceImpl fundingServiceImpl;

    /*
    *   펀딩 작성
     */
    @PostMapping("/funding")
    public ResponseEntity<?> createFunding(@Valid @RequestBody FundingReqDtos.UploadDto uploadDto, @AuthenticationPrincipal UserDetailsImpl userDetails) {
        fundingServiceImpl.createFunding(uploadDto, userDetails.getEmail());
        return ApiResponseGenerator.success(HttpStatus.OK);

    }

    /*
    *   펀딩 아이디로 펀딩 조회
     */
    @GetMapping("/funding/{fundingId}")
    public ResponseEntity<?> getFunding(@PathVariable Long fundingId, @AuthenticationPrincipal UserDetailsImpl userDetails){
        FundingRespDtos.UploadFunding fundingDto = fundingServiceImpl.getFunding(fundingId, userDetails);
        return ApiResponseGenerator.success(fundingDto, HttpStatus.OK);
    }


    


}
