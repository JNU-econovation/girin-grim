package com.starshop.giringrim.funding.repository;

import com.starshop.giringrim.funding.entity.Funding;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface FundingRepository extends JpaRepository<Funding, Long> {

    @Query("select f from Funding f join fetch f.member join fetch f.university where f.id = :id")
    Optional<Funding> findFundingById(Long id);

    @Query("select f from Funding f join fetch f.member join fetch f.university where f.id in :id")
    List<Funding> findFundingByIds(List<Long> id);



}
