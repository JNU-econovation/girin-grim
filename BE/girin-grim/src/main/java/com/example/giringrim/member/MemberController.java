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




}
