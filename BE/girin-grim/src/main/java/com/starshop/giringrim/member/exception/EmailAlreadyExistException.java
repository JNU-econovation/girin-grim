package com.starshop.giringrim.member.exception;

import com.starshop.giringrim.utils.exception.ErrorMessage;
import lombok.Getter;

@Getter
public class EmailAlreadyExistException extends RuntimeException{

    private final ErrorMessage errorMessage;

    public EmailAlreadyExistException(ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
