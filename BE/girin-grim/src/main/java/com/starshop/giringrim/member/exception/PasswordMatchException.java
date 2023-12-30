package com.starshop.giringrim.member.exception;

import com.starshop.giringrim.utils.exception.ErrorMessage;
import lombok.Getter;

@Getter
public class PasswordMatchException extends RuntimeException{
    private final ErrorMessage errorMessage;

    public PasswordMatchException(ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
