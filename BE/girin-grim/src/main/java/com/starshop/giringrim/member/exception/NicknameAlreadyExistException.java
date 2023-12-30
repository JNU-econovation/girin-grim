package com.starshop.giringrim.member.exception;

import com.starshop.giringrim.utils.exception.ErrorMessage;
import lombok.Getter;

@Getter
public class NicknameAlreadyExistException extends RuntimeException {

    private final ErrorMessage errorMessage;

    public NicknameAlreadyExistException(ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
