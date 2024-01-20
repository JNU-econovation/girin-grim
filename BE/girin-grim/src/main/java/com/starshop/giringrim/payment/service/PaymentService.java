package com.starshop.giringrim.payment.service;

import com.starshop.giringrim.payment.dto.PaymentReqDtos;
import com.starshop.giringrim.payment.dto.PaymentRespDtos;
import com.starshop.giringrim.utils.security.UserDetailsImpl;

public interface PaymentService {

    /*
    *   펀딩 결제 전 결제페이지 상세 조회 메서드
     */
    PaymentRespDtos.PaymentDetailsDto getPaymentDetails(Long fundingId, UserDetailsImpl userDetails);

    /*
     *   충전하기 메서드
     */
    void chargeCoins(PaymentReqDtos.ChargeDto reqDto, UserDetailsImpl userDetails);

    /*
     *   충전 페이지 조회 메서드
     */
    PaymentRespDtos.ChargeDetailsDto getChargeDetails(UserDetailsImpl userDetails);

    /*
     *   결제하기 메서드
     */
    void fundingPayment(PaymentReqDtos.FundingPaymentDto reqDto, Long fundingId, UserDetailsImpl userDetails);

    /*
     *   후원 내역 상세조회 메서드
     */
    PaymentRespDtos.PaymentHistoryDto fundingHistory(Long memberId, Long fundingId, UserDetailsImpl userDetails);

    /*
     *   후원 내역 리스트 메서드
     */
    PaymentRespDtos.PaymentListDto fundingHistoryList(Long memberId, UserDetailsImpl userDetails);

    /*
     *   올린펀딩 리스트 메서드
     */
    PaymentRespDtos.CreationListDto fundingCreationList(Long memberId);


}
