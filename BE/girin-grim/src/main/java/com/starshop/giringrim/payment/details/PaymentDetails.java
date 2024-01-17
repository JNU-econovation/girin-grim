package com.starshop.giringrim.payment.details;


import com.starshop.giringrim.option.Option;
import com.starshop.giringrim.payment.Payment;
import com.starshop.giringrim.utils.BaseEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name="paymentdetails_tb")
public class PaymentDetails extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private Long quantity;

    @Column
    private BigDecimal totalPrice;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "option_id", nullable = true) //기부형의 경우, 옵션이 없으므로
    private Option option;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "payment_id", nullable = false)
    private Payment payment;

    @Builder
    public PaymentDetails(Long quantity, BigDecimal totalPrice, Option option, Payment payment){
        this.quantity = quantity;
        this.totalPrice = totalPrice;
        this.option = option;
        this.payment = payment;
    }
}
