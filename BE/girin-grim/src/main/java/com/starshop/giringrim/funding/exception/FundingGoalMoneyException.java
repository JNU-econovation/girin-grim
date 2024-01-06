package com.starshop.giringrim.funding.exception;

import com.starshop.giringrim.utils.exception.ErrorMessage;
import lombok.Getter;

@Getter
public class FundingGoalMoneyException extends RuntimeException{
    private final ErrorMessage errorMessage;

    public FundingGoalMoneyException(ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
