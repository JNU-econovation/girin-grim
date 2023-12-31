package com.starshop.giringrim.option;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OptionRepository extends JpaRepository<Option, Long> {

    @Query("select o from Option o where o.funding.id = :id")
    List<Option> findAllByFundingId(Long id);

}
