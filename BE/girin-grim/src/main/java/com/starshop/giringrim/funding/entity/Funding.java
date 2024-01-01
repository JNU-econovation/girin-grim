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
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name = "FUNDING")
public class Funding extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(length = 255, nullable = false)
    private String title;

    @Column(length = 255)
    private String image;

    @Column(length = 255)
    private String shortDescription;

    @Column(length = 255)
    private String longDescription;

    @Column
    private BigDecimal currentMoney;

    @Column(nullable = false)
    private BigDecimal goalMoney;

    @Column(nullable = false)
    private LocalDateTime startTime;

    @Column(nullable = false)
    private LocalDateTime endTime;

    @Column(nullable = false)
    private LocalDateTime estimatedStartTime;

    @Column(columnDefinition = "TEXT")
    private String notice;

    @Enumerated(EnumType.STRING)
    private FundingType fundingType;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id", nullable = false)
    private Member member;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "university_id", nullable = false)
    private University university;


    @Builder
    public Funding(Long id, String title, String image, String shortDescription, String longDescription, BigDecimal currentMoney, BigDecimal goalMoney, LocalDateTime startTime, LocalDateTime endTime,LocalDateTime estimatedStartTime, String notice, FundingType fundingType, University university, Member member) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.currentMoney = currentMoney;
        this.goalMoney = goalMoney;
        this.startTime = startTime;
        this.endTime = endTime;
        this.estimatedStartTime = estimatedStartTime;
        this.notice = notice;
        this.fundingType = fundingType;
        this.university = university;
        this.member = member;
    }


    public boolean isProgress() {
        //현재시간이 펀딩 시작시간보다 늦고 펀딩 종료시간보다 이르면 진행중
        return LocalDateTime.now().isAfter(startTime) && LocalDateTime.now().isBefore(endTime);
    }

    public int getDueDate() {
        long minutes = ChronoUnit.MINUTES.between(startTime, endTime);
        return (int) (minutes / (60 * 24));
    }
}


