package com.starshop.giringrim.payment;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Size;
import lombok.Getter;

import java.math.BigDecimal;
import java.util.List;

@Getter
public class PaymentReqDtos {
    @Getter
    public static class FundingPaymentDto{
        private Long optionId;
        private Long quantity;

    }

    @Getter
    public static class ChargeDto{
        @DecimalMin(value = "0.0", inclusive = false)
        private BigDecimal coin;
    }
}
