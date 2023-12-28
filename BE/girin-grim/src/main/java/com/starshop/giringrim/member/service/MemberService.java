package com.starshop.giringrim.member.service;

import com.starshop.giringrim.member.dto.MemberReqDtos;
import com.starshop.giringrim.member.dto.MemberRespDtos;

public interface MemberService {

    /*
    *   회원가입 메소드
     */
    void join(MemberReqDtos.JoinReqDto joinReqDto);

    /*
    *   이메일, 닉네임 중복 검사 메소드
     */
    void joinValidation(String email, String nickname);

    /*
    *   로그인 메소드
     */
    MemberRespDtos.LoginRespDto login(MemberReqDtos.LoginReqDto loginReqDto);

    /*
    *   프로필 조회 메소드
     */
    MemberRespDtos.ProfileRespDto getProfile(Long memberId);

}
