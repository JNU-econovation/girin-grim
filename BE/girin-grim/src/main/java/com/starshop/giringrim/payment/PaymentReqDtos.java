package com.starshop.giringrim.payment;

import com.starshop.giringrim.funding.entity.FundingType;
import com.starshop.giringrim.option.Option;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Size;
import lombok.Getter;

import java.math.BigDecimal;
import java.util.List;

@Getter
public class PaymentReqDtos {
    @Getter
    public static class FundingPaymentDto{
        private FundingType type;
        private List<OptionDto> options;
        private BigDecimal price;

        @Getter
        public static class OptionDto{
            private Long optionId;
            private Long quantity;
        }
    }

    @Getter
    public static class ChargeDto{
        @DecimalMin(value = "0.0", inclusive = false)
        private BigDecimal coin;
    }
}
