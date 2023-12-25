package com.example.giringrim.utils.exception;

import lombok.Getter;

@Getter
public enum ErrorMessage {

        EMAIL_ALREADY_EXIST("이미 존재하는 이메일입니다."),
        NICKNAME_ALREADY_EXIST("이미 존재하는 닉네임입니다."),
        SELECTED_WRONG_UNIVERSITY("1개 이상 또는 10개 이하의 대학교를 선택해주세요.");

        private final String message;

        ErrorMessage(String message) {
            this.message = message;
        }
}
