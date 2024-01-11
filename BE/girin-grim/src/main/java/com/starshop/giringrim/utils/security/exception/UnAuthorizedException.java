package com.starshop.giringrim.utils.security.exception;

import com.starshop.giringrim.utils.exception.ErrorMessage;
import lombok.Getter;

@Getter
public class UnAuthorizedException extends RuntimeException{
    private final ErrorMessage errorMessage;

    public UnAuthorizedException(ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
