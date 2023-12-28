package com.starshop.giringrim.utils.exception;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Error {

    private String message;

    private int statusCode;

}
