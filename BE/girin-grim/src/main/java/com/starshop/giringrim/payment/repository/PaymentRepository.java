package com.starshop.giringrim.payment.repository;

import com.starshop.giringrim.payment.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
    @Query("select p from Payment p where p.funding.id = :fundingId and p.member.id = :memberId")
    Optional<Payment> findByMemberIdFundingId(@Param("memberId") Long memberId, @Param("fundingId") Long fundingId);

    @Query("select p from Payment p where p.member.id = :memberId")
    List<Payment> findByMemberId(@Param("memberId") Long memberId);
}
