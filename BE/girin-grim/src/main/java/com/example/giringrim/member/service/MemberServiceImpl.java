package com.example.giringrim.member.service;

import com.example.giringrim.favUniversity.entity.FavUniversity;
import com.example.giringrim.member.dto.MemberReqDtos;
import com.example.giringrim.member.dto.MemberRespDtos;
import com.example.giringrim.member.entity.Member;
import com.example.giringrim.member.exception.*;
import com.example.giringrim.favUniversity.repository.FavUniversityRepository;
import com.example.giringrim.member.repository.MemberRepository;
import com.example.giringrim.university.entity.University;
import com.example.giringrim.university.repository.UnivRepository;
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
    private final UnivRepository univRepository;

    @Override
    @Transactional
    public void join(MemberReqDtos.JoinReqDto joinReqDto) {
        String encodedPassword = passwordEncoder.encode(joinReqDto.getPassword());
        Member member = joinReqDto.toEntity(encodedPassword);
        memberRepository.save(member);

        //선택한 대학교가 1개 이상 10개 이하인지 확인
        if(joinReqDto.getUniversity().isEmpty() || joinReqDto.getUniversity().size() >=10){
            throw new UniversityCountException(ErrorMessage.WRONG_UNIVERSITY_COUNT);
        }
        joinReqDto.getUniversity().forEach(university -> {
            //전국 대학교 목록에 존재하는 대학교인지 확인
            University univ = univRepository.findByName(university.getName()).orElseThrow(
                    () -> new UniversitySelectionException(ErrorMessage.SELECTED_WRONG_UNIVERSITY)
            );
            //한명의 멤버가 중복된 대학교를 보냈는지 확인
            if(favUniversityRepository.findByNameAndMemberId(university.getName(), member.getId()).isPresent()){
                throw new UniversityDuplicationException(ErrorMessage.SELECTED_DUPLICATED_UNIVERSITY);
            }
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
    @Transactional
    public MemberRespDtos.LoginRespDto login(MemberReqDtos.LoginReqDto loginReqDto) {

        Member member = memberRepository.findByEmail(loginReqDto.getEmail()).orElseThrow(
                () -> new MemberNotExistException(ErrorMessage.MEMBER_NOT_EXIST)
        );

        //비밀번호 일치 여부 확인
        if(!passwordEncoder.matches(loginReqDto.getPassword(), member.getPassword())){
            throw new PasswordMatchException(ErrorMessage.PASSWORD_NOT_MATCH);
        }

        //accessToken, refreshToken 생성
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
