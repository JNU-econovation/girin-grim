package com.starshop.giringrim.member.controller;

import com.starshop.giringrim.funding.entity.Funding;
import com.starshop.giringrim.funding.entity.FundingType;
import com.starshop.giringrim.member.dto.MemberReqDtos;
import com.starshop.giringrim.member.dto.MemberRespDtos;
import com.starshop.giringrim.member.entity.Member;
import com.starshop.giringrim.member.repository.MemberRepository;
import com.starshop.giringrim.member.service.MemberServiceImpl;
import com.starshop.giringrim.utils.common.ApiResponseGenerator;
import com.starshop.giringrim.utils.security.UserDetailsImpl;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class MemberController {

    private final MemberServiceImpl memberService;

    /*
    * 회원가입
     */
    @PostMapping("/member/join")
    public ResponseEntity<?> join(@Valid @RequestBody MemberReqDtos.JoinReqDto joinReqDto){
        memberService.join(joinReqDto);
        return ApiResponseGenerator.success(HttpStatus.OK);
    }

    /*
     * 회원가입할때 이메일, 닉네임 중복체크
     */
    @GetMapping("/member/join")
    public ResponseEntity<?> joinValidation(@RequestParam(value = "email", required = false) String email, @RequestParam(value = "nickname", required = false) String nickname){
        memberService.joinValidation(email, nickname);
        return ApiResponseGenerator.success(HttpStatus.OK);
    }

    /*
     * 로그인
     */
    @PostMapping("/member/login")
    public ResponseEntity<?> login(@Valid @RequestBody MemberReqDtos.LoginReqDto loginReqDto){
        MemberRespDtos.LoginRespDto loginRespDto = memberService.login(loginReqDto);
        return ApiResponseGenerator.success(loginRespDto, HttpStatus.OK);
    }

    /*
     * refreshToken으로 accessToken 재발급
     */
   // @PostMapping("/member/refresh")

    /*
     * 프로필 조회
     */
    @GetMapping("/member/{memberId}")
    public ResponseEntity<?> getProfile(@PathVariable("memberId") Long memberId, @AuthenticationPrincipal UserDetailsImpl userDetails){
        System.out.println("진입");
        MemberRespDtos.ProfileRespDto profileResDto = memberService.getProfile(memberId, userDetails);
        return ApiResponseGenerator.success(profileResDto, HttpStatus.OK);
    }

    /*
     * 헤더 로그인 정보
     */
    @GetMapping("/member")
    public ResponseEntity<?> getHeaderInfo(@AuthenticationPrincipal UserDetailsImpl userDetails){
        MemberRespDtos.HeaderInfoRespDto headerInfoRespDto = memberService.getHeaderInfo(userDetails);
        return ApiResponseGenerator.success(headerInfoRespDto, HttpStatus.OK);
    }


}
