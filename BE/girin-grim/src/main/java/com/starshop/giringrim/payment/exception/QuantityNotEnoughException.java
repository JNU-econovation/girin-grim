package com.starshop.giringrim.payment.exception;

import com.starshop.giringrim.utils.exception.ErrorMessage;
import lombok.Getter;

@Getter
public class QuantityNotEnoughException extends RuntimeException{
    private final ErrorMessage errorMessage;

    public QuantityNotEnoughException(ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
