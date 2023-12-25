package com.example.giringrim.utils.exception;

import com.example.giringrim.member.exception.EmailAlreadyExistException;
import com.example.giringrim.member.exception.NicknameAlreadyExistException;
import com.example.giringrim.member.exception.UniversitySelectionException;
import com.example.giringrim.utils.ApiResponse;
import com.example.giringrim.utils.ApiResponseGenerator;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler{

    @ExceptionHandler(EmailAlreadyExistException.class)
    public ApiResponse<ApiResponse.CustomBody> handleIllegalStateException(final Exception e){
        return ApiResponseGenerator.fail(ErrorMessage.EMAIL_ALREADY_EXIST.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(UniversitySelectionException.class)
    public ApiResponse<ApiResponse.CustomBody> handleUniversitySelectionException(final Exception e){
        return ApiResponseGenerator.fail(ErrorMessage.SELECTED_WRONG_UNIVERSITY.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(NicknameAlreadyExistException.class)
    public ApiResponse<ApiResponse.CustomBody> handleNicknameAlreadyExistException(final Exception e){
        return ApiResponseGenerator.fail(ErrorMessage.NICKNAME_ALREADY_EXIST.getMessage(), HttpStatus.BAD_REQUEST);
    }



}
