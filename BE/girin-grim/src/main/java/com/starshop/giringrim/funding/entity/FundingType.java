package com.starshop.giringrim.funding.entity;

import com.fasterxml.jackson.annotation.JsonCreator;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.stream.Stream;

@AllArgsConstructor
@Getter
public enum FundingType {
    DONATE,
    GIFT;


    @JsonCreator
    public static FundingType parsing(String inputValue) {
        return Stream.of(FundingType.values())
                .findFirst()
                .orElse(null);
    }
}
