package com.starshop.giringrim.utils.common;

import com.starshop.giringrim.utils.exception.Error;
import lombok.experimental.UtilityClass;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;

@UtilityClass
public class ApiResponseGenerator {

    public static ApiResponse<ApiResponse.CustomBody<Void>> success(final HttpStatus status) {
        return new ApiResponse<>(new ApiResponse.CustomBody<Void>(true,null,null),status);
    }

    public static <D> ApiResponse<ApiResponse.CustomBody<D>> success(final D response, final HttpStatus status) {
        return new ApiResponse<>(new ApiResponse.CustomBody(true, response,null), status);
    }

    public static <D> ApiResponse<ApiResponse.CustomBody<D>> success(final D response, final MediaType mediaType, final HttpStatus status) {
        return new ApiResponse<>(new ApiResponse.CustomBody(true, response,null), mediaType,status);
    }

    public static ApiResponse<ApiResponse.CustomBody> fail(String message, final HttpStatus status) {
        return new ApiResponse<>(new ApiResponse.CustomBody(false,null, new Error(message, status.value())), status);
    }
}
