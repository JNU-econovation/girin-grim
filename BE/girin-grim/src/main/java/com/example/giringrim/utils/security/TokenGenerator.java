package com.example.giringrim.utils.security;

import com.example.giringrim.member.entity.Member;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.Value;
import org.springframework.stereotype.Component;

import javax.crypto.spec.SecretKeySpec;
import java.security.Key;
import java.time.LocalDateTime;
import java.util.Base64;
import java.util.Date;
import java.util.Objects;

@Component
public class TokenGenerator {

    //TODO : secretKey 환경변수화
    private final String ACCESS_TOKEN = "access";
    private final String REFRESH_TOKEN = "refresh";


    private static String SECRET_KEY = "secretsecretsecretsecretsecretsecretsecretsecretsecretsecretsecretsecret";

    public static Key createKey() {
        byte[] apiKeySecretBytes = Base64.getDecoder().decode(SECRET_KEY);
        return new SecretKeySpec(apiKeySecretBytes, SignatureAlgorithm.HS512.getJcaName());
    }

    //Access 토큰 생성하는 함수
    public String createAccessToken(Member member) {
        return Jwts.builder().setSubject(member.getEmail()) // 정보 저장
                .setHeaderParam("typ", "JWT")
                .setIssuedAt(new Date()) // 토큰 발행 시간
                .setExpiration(calcExpirationDateTime(ACCESS_TOKEN)) // 토큰 만료 시간
                .signWith(createKey(), SignatureAlgorithm.HS256)  // 암호화 알고리즘 및 secretKey
                .compact();
    }

    //두 종류의 토큰 만료 시간 설정
    private Date calcExpirationDateTime(final String type) {
        LocalDateTime currentTime = LocalDateTime.now();
        LocalDateTime expirationDateTime;

        if(Objects.equals(type, "access")){
            expirationDateTime = currentTime
                    .plusHours(1);
        }
        else{
            expirationDateTime = currentTime
                    .plusDays(7);
        }
        return Date.from(expirationDateTime.atZone(java.time.ZoneId.systemDefault()).toInstant());

    }
}
