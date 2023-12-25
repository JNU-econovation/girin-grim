package com.example.giringrim.member;

public interface MemberService {

    /*
    *   회원가입 메소드
     */
    void join(MemberReqDto.JoinReqDto joinReqDto);

    /*
    *   이메일 중복 검사 메소드
     */
    void emailValidation(String email);

    /*
    *   닉네임 중복 검사 메소드
     */
    void nicknameValidation(String nickname);
}
