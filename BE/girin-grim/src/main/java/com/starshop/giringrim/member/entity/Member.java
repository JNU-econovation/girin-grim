package com.starshop.giringrim.member.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name="MEMBER")
public class Member {
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
    private BigDecimal coin = BigDecimal.valueOf(500000);


    @Builder
    public Member(Long id, String nickname, String email, String password){
        this.id = id;
        this.nickname = nickname;
        this.email = email;
        this.password = password;
    }

}