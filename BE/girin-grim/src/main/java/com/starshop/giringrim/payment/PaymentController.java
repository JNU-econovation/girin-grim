package com.starshop.giringrim.payment;

import com.starshop.giringrim.utils.common.ApiResponseGenerator;
import com.starshop.giringrim.utils.security.UserDetailsImpl;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class PaymentController {

    private final PaymentService paymentService;

    /*
    *   펀딩 결제 상세 조회
     */
    @GetMapping("/funding/{fundingId}/payment")
    public ResponseEntity<?> getPaymentDetails(@PathVariable Long fundingId, @AuthenticationPrincipal UserDetailsImpl userDetails){
        PaymentRespDtos.PaymentDetailsDto respDto = paymentService.getPaymentDetails(fundingId, userDetails);
        return ApiResponseGenerator.success(respDto, HttpStatus.OK);
    }

    /*
    *   충전하기
     */
    @PostMapping("/charge")
    public ResponseEntity<?> chargeCoins(@Valid @RequestBody PaymentReqDtos.ChargeDto reqDto, @AuthenticationPrincipal UserDetailsImpl userDetails) {
        paymentService.chargeCoins(reqDto, userDetails);
        return ApiResponseGenerator.success(HttpStatus.OK);
    }

    /*
    *  충전 페이지 조회
     */
    @GetMapping("/charge")
    public ResponseEntity<?> getChargeDetails(@AuthenticationPrincipal UserDetailsImpl userDetails) {
        PaymentRespDtos.ChargeDetailsDto respDto = paymentService.getChargeDetails(userDetails);
        return ApiResponseGenerator.success(respDto, HttpStatus.OK);
    }


    /*
    *   펀딩 결제
     */
    @PostMapping("/funding/{fundingId}/payment")
    public ResponseEntity<?> fundingPayment(@Valid @RequestBody PaymentReqDtos.FundingPaymentDto reqDto,@PathVariable Long fundingId, @AuthenticationPrincipal UserDetailsImpl userDetails) {
        paymentService.fundingPayment(reqDto, fundingId, userDetails);
        return ApiResponseGenerator.success(HttpStatus.OK);
    }

    /*
    *   결제 정보 상세 내역
     */
    @GetMapping("/member/{memberId}/backed/{fundingId}")
    public ResponseEntity<?> fundingPayment(@PathVariable(value = "memberId") Long memberId, @PathVariable(value = "fundingId") Long fundingId, @AuthenticationPrincipal UserDetailsImpl userDetails) {
        PaymentRespDtos.PaymentHistoryDto respDto = paymentService.fundingHistory(memberId, fundingId, userDetails);
        return ApiResponseGenerator.success(respDto, HttpStatus.OK);
    }
}
