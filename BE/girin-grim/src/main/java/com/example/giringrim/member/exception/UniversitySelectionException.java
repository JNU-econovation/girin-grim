package com.example.giringrim.member.exception;

import com.example.giringrim.utils.exception.ErrorMessage;
import lombok.Getter;

@Getter
public class UniversitySelectionException extends RuntimeException{

    private final ErrorMessage errorMessage;

    public UniversitySelectionException(ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
