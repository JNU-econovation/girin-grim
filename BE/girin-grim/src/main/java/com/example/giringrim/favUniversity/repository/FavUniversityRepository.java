package com.example.giringrim.favUniversity.repository;

import com.example.giringrim.favUniversity.entity.FavUniversity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface FavUniversityRepository extends JpaRepository<FavUniversity, Long> {

    @Query("select f from FavUniversity f where f.member.id = :memberId")
    List<FavUniversity> findByMemberId(Long memberId);

    @Query("select f from FavUniversity f where f.name = :name and f.member.id = :memberId")
    Optional<Object> findByNameAndMemberId(String name, Long memberId);
}
