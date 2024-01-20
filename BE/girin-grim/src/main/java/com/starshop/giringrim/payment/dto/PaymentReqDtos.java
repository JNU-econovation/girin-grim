package com.starshop.giringrim.payment.dto;

import com.starshop.giringrim.funding.entity.FundingType;
import jakarta.validation.constraints.DecimalMin;
import lombok.Builder;
import lombok.Getter;

import java.math.BigDecimal;
import java.util.List;

@Getter
public class PaymentReqDtos {
    @Getter
    @Builder
    public static class FundingPaymentDto{
        private Long memberId;
        private FundingType type;
        private List<OptionDto> options;
        private String address;
        private BigDecimal price;

        @Getter
        public static class OptionDto{
            private Long optionId;
            private Long quantity;
        }
    }

    @Getter
    public static class ChargeDto{
        @DecimalMin(message = "충전 금액은 0원 이상이어야 합니다." ,value = "0.0", inclusive = false)
        private BigDecimal coin;
    }
}
