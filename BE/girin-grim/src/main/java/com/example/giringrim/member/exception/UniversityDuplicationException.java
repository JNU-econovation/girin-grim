package com.example.giringrim.member.exception;

import com.example.giringrim.utils.exception.ErrorMessage;
import lombok.Getter;

@Getter
public class UniversityDuplicationException extends RuntimeException{

    private final ErrorMessage errorMessage;

    public UniversityDuplicationException(ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
