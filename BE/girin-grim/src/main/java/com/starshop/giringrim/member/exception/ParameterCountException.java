package com.starshop.giringrim.member.exception;

import com.starshop.giringrim.utils.exception.ErrorMessage;
import lombok.Getter;

@Getter
public class ParameterCountException extends RuntimeException {
    private final ErrorMessage errorMessage;

    public ParameterCountException(ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
