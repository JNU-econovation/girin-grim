package com.starshop.giringrim.payment.exception;

import com.starshop.giringrim.utils.exception.ErrorMessage;
import lombok.Getter;

@Getter
public class PaymentOptionNotExistException extends RuntimeException{
    private final ErrorMessage errorMessage;

    public PaymentOptionNotExistException(ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
