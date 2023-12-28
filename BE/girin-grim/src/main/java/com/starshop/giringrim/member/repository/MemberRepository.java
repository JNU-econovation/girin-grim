package com.starshop.giringrim.member.repository;

import com.starshop.giringrim.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository <Member, Long> {
    Optional<Member> findByEmail(String email);

    Member findByNickname(String nickname);
}
