package com.starshop.giringrim.payment.exception;

import com.starshop.giringrim.utils.exception.ErrorMessage;
import lombok.Getter;

@Getter
public class HistoryNotExistException extends RuntimeException{
    private final ErrorMessage errorMessage;

    public HistoryNotExistException(ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
