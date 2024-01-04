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

    @GetMapping("/home")
    public ResponseEntity<?> home(  @RequestParam(value = "page", defaultValue = "0") Integer page,
                                    @RequestParam(value="uni", required = false) Long universityId,
                                    @RequestParam(value = "category", required = false) String fundingType,
                                    @RequestParam(value = "q", required = false) String keyword,
                                    @RequestParam(value = "sort", required = false) String method,
                                    @AuthenticationPrincipal UserDetailsImpl userDetails){
        FundingRespDtos.HomeDto respDto = fundingServiceImpl.home(page, universityId, fundingType, keyword, method, userDetails);
        return ApiResponseGenerator.success(respDto, HttpStatus.OK);
    }

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
        FundingRespDtos.GetFundingDto fundingDto = fundingServiceImpl.getFunding(fundingId, userDetails);
        return ApiResponseGenerator.success(fundingDto, HttpStatus.OK);
    }


    /*
    *   펀딩 아이디로 펀딩 긴 설명 조회
     */
    @GetMapping("/funding/{id}/description")
    public ResponseEntity<?> getFundingDescription(@PathVariable Long id){
        FundingRespDtos.FundingDescriptionDto fundingDescription = fundingServiceImpl.getFundingDescription(id);
        return ApiResponseGenerator.success(fundingDescription, HttpStatus.OK);
    }

}
