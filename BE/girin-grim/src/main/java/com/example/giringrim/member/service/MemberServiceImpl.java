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
import com.example.giringrim.utils.security.TokenGenerator;
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
    private final TokenGenerator tokenGenerator;

    @Override
    @Transactional
    public void join(MemberReqDtos.JoinReqDto joinReqDto) {
        String encodedPassword = passwordEncoder.encode(joinReqDto.getPassword());
        Member member = joinReqDto.toEntity(encodedPassword);
        memberRepository.save(member);

        if(joinReqDto.getUniversity().isEmpty() || joinReqDto.getUniversity().size() >=10){
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
            Member member = memberRepository.findByEmail(email).orElseThrow(
                    () -> new EmailAlreadyExistException(ErrorMessage.EMAIL_ALREADY_EXIST)
            );
        }
        else{
            Member member = memberRepository.findByNickname(nickname);
            if(member != null){
                throw new NicknameAlreadyExistException(ErrorMessage.NICKNAME_ALREADY_EXIST);
            }
        }

    }

    @Override
    public MemberRespDtos.LoginRespDto login(MemberReqDtos.LoginReqDto loginReqDto) {

        Member member = memberRepository.findByEmail(loginReqDto.getEmail()).orElseThrow(
           //     () -> new EmailAlreadyExistException(ErrorMessage.EMAIL_ALREADY_EXIST)
        );
        if(!passwordEncoder.matches(loginReqDto.getPassword(), member.getPassword())){
            //TODO : 비밀번호가 틀림
         //   throw new IllegalArgumentException(ErrorMessage.WRONG_PASSWORD);
        }
        String accessToken = tokenGenerator.createAccessToken(member);
        String refreshToken = tokenGenerator.createRefreshToken(member);

        return new MemberRespDtos.LoginRespDto(accessToken, refreshToken);
    }

    @Override
    public MemberRespDtos.ProfileRespDto getProfile(Long memberId) {
        //TODO : 본인의 프로필을 조회하는지 타인의 프로필을 조회하는지 로직 구분
        Member member = memberRepository.findById(memberId).orElseThrow(
                //TODO : 존재하지 않는 회원일 경우 예외
           //     () -> new IllegalArgumentException(ErrorMessage.NOT_EXIST_MEMBER)
        );

        List<FavUniversity> favUniversityList = favUniversityRepository.findByMemberId(memberId);
        return new MemberRespDtos.ProfileRespDto(member, favUniversityList, false);
        //TODO : 본인의 프로필을 조회하는 경우에는 true를 넘겨줌
    }
}
