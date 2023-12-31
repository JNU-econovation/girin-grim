package com.starshop.giringrim.funding.exception;

import com.starshop.giringrim.utils.exception.ErrorMessage;
import lombok.Getter;

@Getter
public class FundingEstimateUnavailableException extends RuntimeException{
    private final ErrorMessage errorMessage;

    public FundingEstimateUnavailableException(ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
