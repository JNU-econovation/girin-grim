package com.starshop.giringrim.university.repository;

import com.starshop.giringrim.university.entity.University;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UnivRepository extends JpaRepository<University, Long> {

    @Query("select u from University u where u.region = :region")
    List<University> findByRegion(String region);

    @Query("select u from University u where u.name like %:keyword%")
    List<University> findByKeyword(String keyword);

    @Query("select u from University u where u.name = :name")
    Optional<University> findByName(String name);
}
