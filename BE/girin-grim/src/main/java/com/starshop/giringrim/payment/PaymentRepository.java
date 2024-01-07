package com.starshop.giringrim.payment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

    @Query("select p from Payment p where p.funding.id = :fundingId")
    List<Payment> findByFundingId(Long fundingId);


    @Query("select p from Payment p where p.funding.id = :fundingId and p.member.id = :memberId")
    Payment findByMemberIdFundingId(@Param("memberId") Long memberId, @Param("fundingId") Long fundingId);
}
