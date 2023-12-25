package com.example.giringrim.member;

import com.example.giringrim.member.exception.EmailAlreadyExistException;
import com.example.giringrim.favUniversity.FavUniversityRepository;
import com.example.giringrim.member.exception.NicknameAlreadyExistException;
import com.example.giringrim.member.exception.UniversitySelectionException;
import com.example.giringrim.utils.exception.ErrorMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@RequiredArgsConstructor
@Slf4j
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;
    private final FavUniversityRepository favUniversityRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public void join(MemberReqDto.JoinReqDto joinReqDto) {
        String encodedPassword = passwordEncoder.encode(joinReqDto.getPassword());
        Member member = joinReqDto.toEntity(encodedPassword);
        memberRepository.save(member);

        if(joinReqDto.getUniversity().isEmpty() || joinReqDto.getUniversity().size() >=10){
            //TODO 대학교 선택을 하지 않았을 때, 10개 이상 선택했을때 예외처리
            throw new UniversitySelectionException(ErrorMessage.SELECTED_WRONG_UNIVERSITY);
        }
        joinReqDto.getUniversity().forEach(university -> {
            favUniversityRepository.save(university.toEntity(member));
        });

    }

    @Override
    @Transactional(readOnly = true)
    public void emailValidation(String email) {
        Member member = memberRepository.findByEmail(email);
        if(member != null){
            throw new EmailAlreadyExistException(ErrorMessage.EMAIL_ALREADY_EXIST);
        }
    }

    @Override
    @Transactional(readOnly = true)
    public void nicknameValidation(String nickname) {
        Member member = memberRepository.findByNickname(nickname);
        if(member != null){
            throw new NicknameAlreadyExistException(ErrorMessage.NICKNAME_ALREADY_EXIST);
        }
    }

    @Override
    public void login(MemberReqDto.LoginReqDto loginReqDto) {

    }

}
