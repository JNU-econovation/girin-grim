package com.example.giringrim.member.service;

import com.example.giringrim.favUniversity.entity.FavUniversity;
import com.example.giringrim.member.dto.MemberReqDtos;
import com.example.giringrim.member.dto.MemberRespDtos;
import com.example.giringrim.member.entity.Member;
import com.example.giringrim.member.exception.EmailAlreadyExistException;
import com.example.giringrim.favUniversity.repository.FavUniversityRepository;
import com.example.giringrim.member.exception.NicknameAlreadyExistException;
import com.example.giringrim.member.exception.UniversitySelectionException;
import com.example.giringrim.member.repository.MemberRepository;
import com.example.giringrim.member.service.MemberService;
import com.example.giringrim.utils.exception.ErrorMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@RequiredArgsConstructor
@Slf4j
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;
    private final FavUniversityRepository favUniversityRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public void join(MemberReqDtos.JoinReqDto joinReqDto) {
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
    public void joinValidation(String email, String nickname) {
        if(nickname == null){
            Member member = memberRepository.findByEmail(email);
            if(member != null){
                throw new EmailAlreadyExistException(ErrorMessage.EMAIL_ALREADY_EXIST);
            }
        }
        else{
            Member member = memberRepository.findByNickname(nickname);
            if(member != null){
                throw new NicknameAlreadyExistException(ErrorMessage.NICKNAME_ALREADY_EXIST);
            }
        }

    }

    @Override
    public void login(MemberReqDtos.LoginReqDto loginReqDto) {
        Member member = memberRepository.findByEmail(loginReqDto.getEmail());
        if(member == null){
            //TODO : 이메일이 틀림
         //   throw new IllegalArgumentException(ErrorMessage.NOT_EXIST_EMAIL);
        }
        if(!passwordEncoder.matches(loginReqDto.getPassword(), member.getPassword())){
            //TODO : 비밀번호가 틀림
         //   throw new IllegalArgumentException(ErrorMessage.WRONG_PASSWORD);
        }
    }

    @Override
    public MemberRespDtos.ProfileRespDto getProfile(Long memberId) {
        Member member = memberRepository.findById(memberId).orElseThrow(
           //     () -> new IllegalArgumentException(ErrorMessage.NOT_EXIST_MEMBER)
        );

        List<FavUniversity> favUniversityList = favUniversityRepository.findByMemberId(memberId);
        return new MemberRespDtos.ProfileRespDto(member, favUniversityList, false);
    }
}
