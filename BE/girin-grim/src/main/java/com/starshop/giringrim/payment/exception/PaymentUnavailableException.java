package com.starshop.giringrim.payment.exception;

import com.starshop.giringrim.utils.exception.ErrorMessage;
import lombok.Getter;

@Getter
public class PaymentUnavailableException extends RuntimeException{
    private final ErrorMessage errorMessage;

    public PaymentUnavailableException(ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
