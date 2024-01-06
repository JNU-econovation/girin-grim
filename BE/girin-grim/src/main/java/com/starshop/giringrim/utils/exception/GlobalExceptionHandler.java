package com.starshop.giringrim.utils.exception;

import com.starshop.giringrim.funding.exception.*;
import com.starshop.giringrim.member.exception.*;
import com.starshop.giringrim.payment.exception.*;
import com.starshop.giringrim.university.exception.RegionNotExistException;
import com.starshop.giringrim.university.exception.UnivNotExistException;
import com.starshop.giringrim.utils.common.ApiResponse;
import com.starshop.giringrim.utils.common.ApiResponseGenerator;
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


    //로그인 (/member/login)
    @ExceptionHandler(MemberNotExistException.class)
    public ApiResponse<ApiResponse.CustomBody> handleIllegalStateException(MemberNotExistException e){
        return ApiResponseGenerator.fail(ErrorMessage.MEMBER_NOT_EXIST.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(PasswordMatchException.class)
    public ApiResponse<ApiResponse.CustomBody> handleIllegalStateException(PasswordMatchException e){
        return ApiResponseGenerator.fail(ErrorMessage.PASSWORD_NOT_MATCH.getMessage(), HttpStatus.BAD_REQUEST);
    }


    //대학교 검색 (/uni?name={name}&region={region})
    @ExceptionHandler(UnivNotExistException.class)
    public ApiResponse<ApiResponse.CustomBody> handleIllegalStateException(UnivNotExistException e){
        return ApiResponseGenerator.fail(ErrorMessage.UNIV_NOT_EXIST.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(RegionNotExistException.class)
    public ApiResponse<ApiResponse.CustomBody> handleIllegalStateException(RegionNotExistException e){
        return ApiResponseGenerator.fail(ErrorMessage.REGION_NOT_EXIST.getMessage(), HttpStatus.NOT_FOUND);
    }


    //펀딩 생성 (/funding)

    @ExceptionHandler(FundingStartUnavailableException.class)
    public ApiResponse<ApiResponse.CustomBody> handleIllegalStateException(FundingStartUnavailableException e){
        return ApiResponseGenerator.fail(ErrorMessage.FUNDING_START_DATE_UNAVAILABLE.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(FundingDurationUnavailableException.class)
    public ApiResponse<ApiResponse.CustomBody> handleIllegalStateException(FundingDurationUnavailableException e){
        return ApiResponseGenerator.fail(ErrorMessage.FUNDING_DURATION_UNAVAILABLE.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(FundingEstimateUnavailableException.class)
    public ApiResponse<ApiResponse.CustomBody> handleIllegalStateException(FundingEstimateUnavailableException e){
        return ApiResponseGenerator.fail(ErrorMessage.FUNDING_ESTIMATE_DATE_UNAVAILABLE.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(FundingGoalMoneyException.class)
    public ApiResponse<ApiResponse.CustomBody> handleIllegalStateException(FundingGoalMoneyException e){
        return ApiResponseGenerator.fail(ErrorMessage.FUNDING_GOAL_MONEY_UNAVAILABLE.getMessage(), HttpStatus.BAD_REQUEST);
    }

    //펀딩 조회 (/funding/{fundingId})
    @ExceptionHandler(FundingNotExistException.class)
    public ApiResponse<ApiResponse.CustomBody> handleIllegalStateException(FundingNotExistException e){
        return ApiResponseGenerator.fail(ErrorMessage.FUNDING_NOT_EXIST.getMessage(), HttpStatus.NOT_FOUND);
    }

    //펀딩 결제 상세조회 (/funding/{fundingId}/payment)
    @ExceptionHandler(PaymentUnavailableException.class)
    public ApiResponse<ApiResponse.CustomBody> handleIllegalStateException(PaymentUnavailableException e){
        return ApiResponseGenerator.fail(ErrorMessage.PAYMENT_UNAVAILABLE.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(PaymentDurationException.class)
    public ApiResponse<ApiResponse.CustomBody> handleIllegalStateException(PaymentDurationException e){
        return ApiResponseGenerator.fail(ErrorMessage.PAYMENT_DURATION_UNAVAILABLE.getMessage(), HttpStatus.BAD_REQUEST);
    }

    

}
