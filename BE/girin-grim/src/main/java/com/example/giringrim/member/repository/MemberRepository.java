package com.example.giringrim.member.repository;

import com.example.giringrim.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository <Member, Long> {
    Member findByEmail(String email);

    Member findByNickname(String nickname);
}
