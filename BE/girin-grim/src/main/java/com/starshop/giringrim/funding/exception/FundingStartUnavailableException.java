package com.starshop.giringrim.funding.exception;

import com.starshop.giringrim.utils.exception.ErrorMessage;
import lombok.Getter;

@Getter
public class FundingStartUnavailableException extends RuntimeException{
    private final ErrorMessage errorMessage;

    public FundingStartUnavailableException(ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
