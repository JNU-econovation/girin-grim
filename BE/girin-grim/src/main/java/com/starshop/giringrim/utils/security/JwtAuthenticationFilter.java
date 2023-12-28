package com.starshop.giringrim.utils.security;

import com.starshop.giringrim.member.entity.Member;
import io.jsonwebtoken.Claims;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import java.io.IOException;

@Slf4j
public class JwtAuthenticationFilter extends BasicAuthenticationFilter {

    private static final String HEADER = "Authorization";
    private final TokenGenerator tokenGenerator;
    
    public JwtAuthenticationFilter(AuthenticationManager authenticationManager, TokenGenerator tokenGenerator) {
        super(authenticationManager);
        this.tokenGenerator = tokenGenerator;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        String jwt = request.getHeader(HEADER);
        //헤더에서 JWT를 받아오고 토큰이 없으면 다음 필터로 넘어감.
        if (jwt == null) {
            filterChain.doFilter(request, response);
            return;
        }
        //헤더에 JWT가 존재한다면 Claims 추출하여 사용자 정보를 이용해 UserDetails 객체를 만들고 이를 이용해 Authentication 객체를 만들어 SecurityContext에 저장
        try {
            Claims claims = tokenGenerator.extractToken(jwt);
            String email = claims.getSubject();

            //멤버 객체 만듬
            Member member = Member.builder()
                    .email(email)
                    .build();

            //멤버 객체를 이용해 UserDetailsImpl 객체 생성
            UserDetailsImpl userDetails = new UserDetailsImpl(member);

            //인증된 사용자의 정보
            Authentication authentication = new UsernamePasswordAuthenticationToken(userDetails, userDetails.getPassword(), userDetails.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(authentication);

            //다음 필터로 넘어감
            filterChain.doFilter(request, response);
        } catch (Exception e) {
            //TODO : 세밀한 예외처리 필요
            log.info("Invalid JWT signature.");
        }
    }


}
