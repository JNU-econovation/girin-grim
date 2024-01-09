package com.starshop.giringrim.payment.exception;

import com.starshop.giringrim.utils.exception.ErrorMessage;
import lombok.Getter;

@Getter
public class PaymentAlreadyDoneException extends RuntimeException{
    private final ErrorMessage errorMessage;

    public PaymentAlreadyDoneException(ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
