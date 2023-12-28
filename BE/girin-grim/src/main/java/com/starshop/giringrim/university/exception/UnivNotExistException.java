package com.starshop.giringrim.university.exception;

import com.starshop.giringrim.utils.exception.ErrorMessage;
import lombok.Getter;

@Getter
public class UnivNotExistException extends RuntimeException {

    private final ErrorMessage errorMessage;

    public UnivNotExistException(ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}

