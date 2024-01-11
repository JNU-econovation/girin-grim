package com.starshop.giringrim.payment.exception;

import com.starshop.giringrim.utils.exception.ErrorMessage;
import lombok.Getter;

@Getter
public class HistoryForbiddenException extends RuntimeException{
    private final ErrorMessage errorMessage;

    public HistoryForbiddenException(ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
