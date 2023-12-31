package com.starshop.giringrim.funding.repository;

import com.starshop.giringrim.funding.entity.Funding;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FundingRepository extends JpaRepository<Funding, Long> {
}
