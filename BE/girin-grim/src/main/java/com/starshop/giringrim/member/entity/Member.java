package com.starshop.giringrim.member.entity;

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
@Table(name="member_tb")
public class Member extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 45, nullable = false)
    private String nickname;

    @Column(length = 100, nullable = false, unique = true)
    private String email;

    @Column(length = 256, nullable = false)
    private String password;

    @Column(length = 256)
    private String image;

    @Column(length = 256)
    private String aboutMe;

    @Column(length = 256)
    private String address;

    @Column
    private BigDecimal coin = BigDecimal.valueOf(0);


    @Builder
    public Member(String nickname, String email, String password, String image, String aboutMe){
        this.nickname = nickname;
        this.email = email;
        this.password = password;
        this.image = image;
        this.aboutMe= aboutMe;
    }

    public void chargeCoins(BigDecimal coin){
        this.coin = coin;
    }

    public void fundingPayment(BigDecimal coin){
        this.coin = this.coin.subtract(coin);
    }

    public void updateAddress(String address){
        this.address = address;
    }

}