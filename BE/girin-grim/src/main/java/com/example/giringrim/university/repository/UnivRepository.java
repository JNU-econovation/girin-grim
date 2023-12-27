package com.example.giringrim.university.repository;

import com.example.giringrim.university.entity.University;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UnivRepository extends JpaRepository<University, Long> {

    @Query("select u from University u where u.region = :region")
    List<University> findByRegion(String region);

    @Query("select u from University u where u.name like %:keyword%")
    List<University> findByKeyword(String keyword);
}
