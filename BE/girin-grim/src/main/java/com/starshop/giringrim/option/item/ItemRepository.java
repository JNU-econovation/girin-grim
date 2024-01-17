package com.starshop.giringrim.option.item;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ItemRepository extends JpaRepository<Item, Long> {
    @Query("select i from Item i where i.option.id = :id")
    List<Item> findAllByOptionId(Long id);

    @Query("select i from Item i join fetch i.option join fetch i.option.funding f where f.id = :fundingId")
    List<Item> findAllByFundingId(Long fundingId);
    


}
