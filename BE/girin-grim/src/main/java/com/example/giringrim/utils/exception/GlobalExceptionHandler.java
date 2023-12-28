package com.example.giringrim.utils.exception;

import com.example.giringrim.member.exception.*;
;
import com.example.giringrim.university.exception.RegionNotExistException;
import com.example.giringrim.university.exception.UnivNotExistException;
import com.example.giringrim.utils.ApiResponse;
import com.example.giringrim.utils.ApiResponseGenerator;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler{

    // @Valid 어노테이션을 사용했을 때, 유효성 검사에 실패하면 발생하는 예외처리
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Object processValidationError(MethodArgumentNotValidException ex) {
        return ApiResponseGenerator.fail(ex.getBindingResult().getAllErrors().get(0).getDefaultMessage(), HttpStatus.BAD_REQUEST);
    }

    //회원가입 (/member/join)
    @ExceptionHandler(EmailAlreadyExistException.class)
    public ApiResponse<ApiResponse.CustomBody> handleIllegalStateException(EmailAlreadyExistException e){
        return ApiResponseGenerator.fail(ErrorMessage.EMAIL_ALREADY_EXIST.getMessage(), HttpStatus.LOCKED);
    }

    @ExceptionHandler(NicknameAlreadyExistException.class)
    public ApiResponse<ApiResponse.CustomBody> handleIllegalStateException(NicknameAlreadyExistException e){
        return ApiResponseGenerator.fail(ErrorMessage.NICKNAME_ALREADY_EXIST.getMessage(), HttpStatus.LOCKED);
    }

    @ExceptionHandler(UniversityCountException.class)
    public ApiResponse<ApiResponse.CustomBody> handleIllegalStateException (UniversityCountException e){
        return ApiResponseGenerator.fail(ErrorMessage.WRONG_UNIVERSITY_COUNT.getMessage(), HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler(UniversitySelectionException.class)
    public ApiResponse<ApiResponse.CustomBody> handleIllegalStateException(UniversitySelectionException e){
        return ApiResponseGenerator.fail(ErrorMessage.SELECTED_WRONG_UNIVERSITY.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(UniversityDuplicationException.class)
    public ApiResponse<ApiResponse.CustomBody> handleIllegalStateException(UniversityDuplicationException e){
        return ApiResponseGenerator.fail(ErrorMessage.SELECTED_DUPLICATED_UNIVERSITY.getMessage(), HttpStatus.BAD_REQUEST);
    }


    //로그인
    @ExceptionHandler(MemberNotExistException.class)
    public ApiResponse<ApiResponse.CustomBody> handleIllegalStateException(MemberNotExistException e){
        return ApiResponseGenerator.fail(ErrorMessage.MEMBER_NOT_EXIST.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(PasswordMatchException.class)
    public ApiResponse<ApiResponse.CustomBody> handleIllegalStateException(PasswordMatchException e){
        return ApiResponseGenerator.fail(ErrorMessage.PASSWORD_NOT_MATCH.getMessage(), HttpStatus.BAD_REQUEST);
    }


    //대학교 검색
    @ExceptionHandler(UnivNotExistException.class)
    public ApiResponse<ApiResponse.CustomBody> handleIllegalStateException(UnivNotExistException e){
        return ApiResponseGenerator.fail(ErrorMessage.UNIV_NOT_EXIST.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(RegionNotExistException.class)
    public ApiResponse<ApiResponse.CustomBody> handleIllegalStateException(RegionNotExistException e){
        return ApiResponseGenerator.fail(ErrorMessage.REGION_NOT_EXIST.getMessage(), HttpStatus.NOT_FOUND);
    }




}
