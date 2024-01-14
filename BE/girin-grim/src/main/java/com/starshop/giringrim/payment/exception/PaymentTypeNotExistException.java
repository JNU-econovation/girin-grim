package com.starshop.giringrim.payment.exception;

import com.starshop.giringrim.utils.exception.ErrorMessage;
import lombok.Getter;

@Getter
public class PaymentTypeNotExistException extends RuntimeException{
    private final ErrorMessage errorMessage;

    public PaymentTypeNotExistException(ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
