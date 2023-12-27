package com.example.giringrim.member.controller;

import com.example.giringrim.member.dto.MemberReqDtos;
import com.example.giringrim.member.dto.MemberRespDtos;
import com.example.giringrim.member.service.MemberServiceImpl;
import com.example.giringrim.utils.ApiResponseGenerator;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class MemberController {

    private final MemberServiceImpl memberService;

    /*
    * 회원가입 메서드
     */
    @PostMapping("/member/join")
    public ResponseEntity<?> join(@Valid @RequestBody MemberReqDtos.JoinReqDto joinReqDto){
        memberService.join(joinReqDto);
        return ApiResponseGenerator.success(HttpStatus.OK);
    }

    /*
     * 회원가입할때 이메일, 닉네임 중복체크 메서드
     */
    @GetMapping("/member/join")
    public ResponseEntity<?> joinValidation(@RequestParam(value = "email", required = false) String email, @RequestParam(value = "nickname", required = false) String nickname){
        memberService.joinValidation(email, nickname);
        return ApiResponseGenerator.success(HttpStatus.OK);
    }

    /*
     * 로그인 메서드
     */
    @PostMapping("/member/login")
    public ResponseEntity<?> login(@Valid @RequestBody MemberReqDtos.LoginReqDto loginReqDto){
        memberService.login(loginReqDto);
        return ApiResponseGenerator.success(HttpStatus.OK);
    }

    /*
     * 프로필 조회 메서드
     */

    @GetMapping("/member/{memberId}")
    public ResponseEntity<?> getProfile(@PathVariable("memberId") Long memberId){
        MemberRespDtos.ProfileRespDto profileResDto = memberService.getProfile(memberId);
        return ApiResponseGenerator.success(profileResDto, HttpStatus.OK);
    }

}
