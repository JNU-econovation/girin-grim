package com.starshop.giringrim.payment;

import com.starshop.giringrim.utils.exception.ErrorMessage;
import lombok.Getter;

@Getter
public class PaymentDurationException extends RuntimeException{
    private final ErrorMessage errorMessage;

    public PaymentDurationException(ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
