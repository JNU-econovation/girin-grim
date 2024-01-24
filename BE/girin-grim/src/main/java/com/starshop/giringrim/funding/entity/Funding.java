package com.starshop.giringrim.funding.entity;

import com.starshop.giringrim.member.entity.Member;
import com.starshop.giringrim.university.entity.University;
import com.starshop.giringrim.utils.BaseEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name = "funding_tb")
public class Funding extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String image;

    @Column(nullable = false)
    private String shortDescription;

    @Column(nullable = false)
    private String longDescription;

    @Column(nullable = false)
    private BigDecimal currentMoney;

    @Column(nullable = false)
    private BigDecimal goalMoney;

    @Column(nullable = false)
    private LocalDateTime startTime;

    @Column(nullable = false)
    private LocalDateTime endTime;

    @Column(nullable = false)
    private LocalDateTime estimatedStartTime;

    @Enumerated(EnumType.STRING)
    private FundingType fundingType;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id", nullable = false)
    private Member member;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "university_id", nullable = false)
    private University university;


    @Builder
    public Funding(String title, String image, String shortDescription, String longDescription, BigDecimal currentMoney, BigDecimal goalMoney, LocalDateTime startTime, LocalDateTime endTime,LocalDateTime estimatedStartTime, FundingType fundingType, University university, Member member) {
        this.title = title;
        this.image = image;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.currentMoney = currentMoney;
        this.goalMoney = goalMoney;
        this.startTime = startTime;
        this.endTime = endTime;
        this.estimatedStartTime = estimatedStartTime;
        this.fundingType = fundingType;
        this.university = university;
        this.member = member;
    }


    public boolean isProgress() {
        //현재시간이 펀딩 시작시간보다 늦고 펀딩 종료시간보다 이르면 진행중
        return LocalDateTime.now().isAfter(startTime) && LocalDateTime.now().isBefore(endTime);
    }

    public int getDueDate() {
        ZoneId zid = ZoneId.of("Asia/Seoul");
        long minutes = ChronoUnit.MINUTES.between(LocalDateTime.now(zid), endTime);
        return (int) (minutes / (60 * 24));
    }

    public void updateCurrentMoney(BigDecimal coin) {
        this.currentMoney = this.currentMoney.add(coin);
    }

    public BigDecimal increseRate(){
        return currentMoney.divide(goalMoney, 2, RoundingMode.HALF_UP).multiply(BigDecimal.valueOf(100));
    }

    public void updateFunding(String title, String image, String shortDescription, BigDecimal goalMoney, LocalDateTime startTime, LocalDateTime endTime, LocalDateTime estimatedStartTime, University university){
        this.title = title;
        this.image = image;
        this.shortDescription = shortDescription;
        this.goalMoney = goalMoney;
        this.startTime = startTime;
        this.endTime = endTime;
        this.estimatedStartTime = estimatedStartTime;
        this.university = university;
    }
}


