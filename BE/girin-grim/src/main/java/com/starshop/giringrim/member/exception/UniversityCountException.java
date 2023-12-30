package com.starshop.giringrim.member.exception;

import com.starshop.giringrim.utils.exception.ErrorMessage;
import lombok.Getter;

@Getter
public class UniversityCountException extends RuntimeException{
    private final ErrorMessage errorMessage;

    public UniversityCountException(ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
