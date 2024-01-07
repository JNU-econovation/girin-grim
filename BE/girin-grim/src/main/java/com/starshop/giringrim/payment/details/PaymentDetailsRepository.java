package com.starshop.giringrim.payment.details;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PaymentDetailsRepository extends JpaRepository<PaymentDetails, Long> {

    @Query("select p from PaymentDetails p where p.payment.id = :paymentId")
    List<PaymentDetails> findByPamentId(Long paymentId);
}
