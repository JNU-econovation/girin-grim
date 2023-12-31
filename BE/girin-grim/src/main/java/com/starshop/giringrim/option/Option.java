package com.starshop.giringrim.option;

import com.starshop.giringrim.funding.entity.Funding;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name="option_tb")
public class Option {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 255, nullable = false)
    private String name;

    @Column(nullable = false)
    private BigDecimal price;

    @Column
    private Long quantity;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "funding_id", nullable = false)
    private Funding funding;

    @Builder
    public Option(String name, BigDecimal price, Long quantity, Funding funding){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.funding = funding;
    }

    public void updateQuantity(Long quantity){
        this.quantity -= quantity;
    }

}
