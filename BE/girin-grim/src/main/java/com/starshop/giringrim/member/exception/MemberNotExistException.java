package com.starshop.giringrim.member.exception;

import com.starshop.giringrim.utils.exception.ErrorMessage;
import lombok.Getter;

@Getter
public class MemberNotExistException extends RuntimeException {
    private final ErrorMessage errorMessage;

    public MemberNotExistException(ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
