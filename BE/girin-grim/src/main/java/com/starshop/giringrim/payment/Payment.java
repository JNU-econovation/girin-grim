package com.starshop.giringrim.payment;

import com.starshop.giringrim.funding.entity.Funding;
import com.starshop.giringrim.member.entity.Member;
import com.starshop.giringrim.utils.BaseEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name="payment_tb")
public class Payment extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id", nullable = false)
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "funding_id", nullable = false)
    private Funding funding;
    @Builder
    public Payment(Member member, Funding funding){
        this.member = member;
        this.funding = funding;
    }
}
