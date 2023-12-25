package com.example.giringrim.member.exception;

import com.example.giringrim.utils.exception.ErrorMessage;
import lombok.Getter;

@Getter
public class NicknameAlreadyExistException extends RuntimeException {

    private final ErrorMessage errorMessage;

    public NicknameAlreadyExistException(ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
