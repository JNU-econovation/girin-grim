package com.starshop.giringrim.utils.security.exception;

import com.starshop.giringrim.utils.exception.ErrorMessage;
import lombok.Getter;

@Getter
public class ForbiddenException extends RuntimeException{
    private final ErrorMessage errorMessage;

    public ForbiddenException(ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
