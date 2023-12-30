package com.starshop.giringrim.university.exception;

import com.starshop.giringrim.utils.exception.ErrorMessage;
import lombok.Getter;

@Getter
public class RegionNotExistException extends RuntimeException{
    private final ErrorMessage errorMessage;

    public RegionNotExistException(ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
