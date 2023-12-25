package com.example.giringrim.member;

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
    public ResponseEntity<?> join(@Valid @RequestBody MemberReqDto.JoinReqDto joinReqDto){
        memberService.join(joinReqDto);
        return ApiResponseGenerator.success(HttpStatus.OK);
    }

    /*
     * 회원가입할때 이메일 중복체크
     */
    @PostMapping("/member/login/email")
    public ResponseEntity<?> emailValidation(@RequestBody MemberReqDto.EmailValidationReqDto reqDto){
        memberService.emailValidation(reqDto.getEmail());
        return ApiResponseGenerator.success(HttpStatus.OK);
    }

    /*
     * 회원가입할때 닉네임 중복체크
     */
    @GetMapping("/member/login/nickname")
    public ResponseEntity<?> nicknameValidation(@RequestBody MemberReqDto.NicknameValidationReqDto reqDto){
        memberService.nicknameValidation(reqDto.getNickname());
        return ApiResponseGenerator.success(HttpStatus.OK);
    }


}