package com.starshop.giringrim.payment.exception;

import com.starshop.giringrim.utils.exception.ErrorMessage;
import lombok.Getter;

@Getter
public class CoinNotEnoughException  extends RuntimeException{
    private final ErrorMessage errorMessage;

    public CoinNotEnoughException(ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
