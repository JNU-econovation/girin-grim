package com.starshop.giringrim.funding.exception;

import com.starshop.giringrim.utils.exception.ErrorMessage;
import lombok.Getter;

@Getter
public class FundingDurationUnavailableException extends RuntimeException{
    private final ErrorMessage errorMessage;

    public FundingDurationUnavailableException(ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
