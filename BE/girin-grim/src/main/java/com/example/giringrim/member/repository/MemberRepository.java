package com.example.giringrim.member;

import com.example.giringrim.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository <Member, Long> {
    Member findByEmail(String email);

    Member findByNickname(String nickname);
}
