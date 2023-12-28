package com.example.giringrim.utils.exception;

import lombok.Getter;

@Getter
public enum ErrorMessage {

        /*
        * Member 도메인 에러 메세지
         */
        //회원가입
        EMAIL_ALREADY_EXIST("이미 존재하는 이메일입니다."),
        NICKNAME_ALREADY_EXIST("이미 존재하는 닉네임입니다."),
        WRONG_UNIVERSITY_COUNT("1개 이상 또는 10개 이하의 대학교를 선택해주세요."),
        SELECTED_WRONG_UNIVERSITY("잘못된 대학교를 선택하셨습니다."),
        SELECTED_DUPLICATED_UNIVERSITY("중복된 대학교를 선택하셨습니다."),

        //로그인
        MEMBER_NOT_EXIST("존재하지 않는 회원입니다."),
        PASSWORD_NOT_MATCH("비밀번호가 일치하지 않습니다."),


        /*
        * University 도메인 에러 메세지
         */
        UNIV_NOT_EXIST("존재하지 않는 대학교입니다."),
        REGION_NOT_EXIST("존재하지 않는 지역입니다.");

        private final String message;

        ErrorMessage(String message) {
            this.message = message;
        }
}
