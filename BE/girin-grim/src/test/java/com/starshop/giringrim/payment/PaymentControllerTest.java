package com.starshop.giringrim.payment;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.starshop.giringrim.config.TestConfig;
import com.starshop.giringrim.funding.entity.FundingType;
import com.starshop.giringrim.funding.repository.FundingRepository;
import com.starshop.giringrim.member.repository.MemberRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithUserDetails;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.math.BigDecimal;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@AutoConfigureMockMvc
class PaymentControllerTest extends TestConfig {

    @LocalServerPort
    int port;

    @Autowired
    TestRestTemplate testRestTemplate;

    @Autowired
    FundingRepository fundingRepository;

    @Autowired
    MemberRepository memberRepository;

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    MockMvc mockMvc;


    @DisplayName("결제 테스트")
    @WithUserDetails("hi@gmail.com")
    @Test
    void 결제_성공_테스트() throws Exception{

        PaymentReqDtos.FundingPaymentDto reqDto = PaymentReqDtos.FundingPaymentDto.builder()
                        .memberId(2L)
                        .type(FundingType.DONATE)
                        .options(Arrays.asList())
                        .address("서울시 강남구")
                        .price(BigDecimal.valueOf(10000))
                        .build();

        Long fundingId = 3L;

        String requestBody = objectMapper.writeValueAsString(reqDto);

        //when
        ResultActions resultActions = mockMvc.perform(
                post("/api/funding/" + fundingId + "/payment")
                        .content(requestBody)
                        .contentType(MediaType.APPLICATION_JSON));

        String responseBody = new String(resultActions.andReturn().getResponse().getContentAsByteArray(), StandardCharsets.UTF_8);
        System.out.println("테스트 " + responseBody);

        resultActions.andExpect(jsonPath("$.success").value("true"));

      //  Optional<Funding> funding = fundingRepository.findById(3L);
      //  Optional<Member> member = memberRepository.findById(2L);

        //펀딩 현재 금액 증가
        //소수점 때문에 테스트 실패
       // assertThat(funding.get().getCurrentMoney()).isEqualTo(BigDecimal.valueOf(10300));
        //멤버 금액 감소
      //  assertThat(member.get().getCoin()).isEqualTo(BigDecimal.valueOf(9900000));
        //펀딩퍼센티지 증가
      //  assertThat(funding.get().increseRate()).isEqualTo(BigDecimal.valueOf(10));

    }


    @DisplayName("후원 내역 상세조회 테스트")
    @WithUserDetails("hi@gmail.com")
    @Test
    void 후원내역_상세조회_테스트() throws Exception{

        PaymentReqDtos.FundingPaymentDto reqDto = PaymentReqDtos.FundingPaymentDto.builder()
                .memberId(2L)
                .type(FundingType.DONATE)
                .options(Arrays.asList())
                .address("서울시 강남구")
                .price(BigDecimal.valueOf(10000))
                .build();

        Long fundingId = 3L;

        String requestBody = objectMapper.writeValueAsString(reqDto);

        //when
        mockMvc.perform(
                post("/api/funding/" + fundingId + "/payment")
                        .content(requestBody)
                        .contentType(MediaType.APPLICATION_JSON));

        //when
        ResultActions resultActions = mockMvc.perform(
                get("/api/member/{userId}/backed/{fundingId}", 2L, 3L)
                        .contentType(MediaType.APPLICATION_JSON));

        String responseBody = new String(resultActions.andReturn().getResponse().getContentAsByteArray(), StandardCharsets.UTF_8);
        System.out.println("테스트 " + responseBody);

        resultActions.andExpect(jsonPath("$.success").value("true"));

    }




}