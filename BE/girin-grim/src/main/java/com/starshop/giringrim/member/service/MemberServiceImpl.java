package com.starshop.giringrim.member.service;

import com.starshop.giringrim.favUniversity.entity.FavUniversity;
import com.starshop.giringrim.member.dto.MemberReqDtos;
import com.starshop.giringrim.member.dto.MemberRespDtos;
import com.starshop.giringrim.member.entity.Member;
import com.starshop.giringrim.member.exception.*;
import com.starshop.giringrim.favUniversity.repository.FavUniversityRepository;
import com.starshop.giringrim.member.exception.*;
import com.starshop.giringrim.member.repository.MemberRepository;
import com.starshop.giringrim.university.entity.University;
import com.starshop.giringrim.university.repository.UnivRepository;
import com.starshop.giringrim.utils.exception.ErrorMessage;
import com.starshop.giringrim.utils.security.TokenGenerator;
import com.starshop.giringrim.utils.security.UserDetailsImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


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

        memberRepository.findByEmail(joinReqDto.getEmail()).ifPresent(
                member -> {
                    throw new EmailAlreadyExistException(ErrorMessage.EMAIL_ALREADY_EXIST);
                }
        );

        String encodedPassword = passwordEncoder.encode(joinReqDto.getPassword());
        Member member = joinReqDto.toEntity(encodedPassword);
        memberRepository.save(member);

        //선택한 대학교가 1개 이상 10개 이하인지 확인
        if(joinReqDto.getFavUniversity().isEmpty() || joinReqDto.getFavUniversity().size() >=10){
            throw new UniversityCountException(ErrorMessage.WRONG_UNIVERSITY_COUNT);
        }
        joinReqDto.getFavUniversity().forEach(university -> {
            //전국 대학교 목록에 존재하는 대학교인지 확인
            University univ = univRepository.findById(university.getFavUniversityId()).orElseThrow(
                    () -> new UniversitySelectionException(ErrorMessage.SELECTED_WRONG_UNIVERSITY)
            );
            //한명의 멤버에 대해서 중복된 대학교를 보냈는지 확인
            if(favUniversityRepository.findByNameAndMemberId(univ.getName(), member.getId()).isPresent()){
                throw new UniversityDuplicationException(ErrorMessage.SELECTED_DUPLICATED_UNIVERSITY);
            }
            favUniversityRepository.save(university.toEntity(member, univ));
        });

    }

    @Override
    @Transactional(readOnly = true)
    public void joinValidation(String email, String nickname) {
        if(nickname != null && email != null){
            throw new ParameterCountException(ErrorMessage.PARAMETER_COUNT_ERROR);
        }

        if(nickname == null){
            Optional<Member> member = memberRepository.findByEmail(email);
            if(member.isPresent()) {
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
        //TODO : refreshToken은 추후에 redis나 db에 저장

        return new MemberRespDtos.LoginRespDto(accessToken, refreshToken);
    }

    @Override
    @Transactional(readOnly = true)
    public MemberRespDtos.ProfileRespDto getProfile(Long memberId, UserDetailsImpl userDetails) {
        //pathvariable로 받은 id가 존재하지 않는 회원이면 예외
        Member member = memberRepository.findById(memberId).orElseThrow(
                () -> new MemberNotExistException(ErrorMessage.MEMBER_NOT_EXIST)
        );
        boolean isMine = true;

        String role = SecurityContextHolder.getContext().getAuthentication().getName();
        //비로그인 유저일 경우
        List<FavUniversity> emptyList = new ArrayList<>();
        if(role.equals("anonymousUser")){
            isMine = false;
            return new MemberRespDtos.ProfileRespDto(member,emptyList ,isMine);
        }

        //pathvariable로 받은 id와 로그인한 사용자의 id가 다른지 확인
        if(!member.getEmail().equals(userDetails.getEmail())){
            isMine = false;
            return new MemberRespDtos.ProfileRespDto(member,emptyList, isMine);
        }

        List<FavUniversity> favUniversityList = favUniversityRepository.findByMemberId(memberId);
        return new MemberRespDtos.ProfileRespDto(member, favUniversityList, isMine);

    }

    @Override
    @Transactional(readOnly = true)
    public MemberRespDtos.HeaderInfoRespDto getHeaderInfo(UserDetailsImpl userDetails) {
        //로그인 안 한 사용자 일 경우

        String role = SecurityContextHolder.getContext().getAuthentication().getName();
        if(role.equals("anonymousUser")){
            throw new MemberNotExistException(ErrorMessage.MEMBER_NOT_EXIST);
        }

        //로그인 한 사용자 정보를 조회
        Member member = memberRepository.findByEmail(userDetails.getEmail()).orElseThrow(
                () -> new MemberNotExistException(ErrorMessage.MEMBER_NOT_EXIST)
        );

        return new MemberRespDtos.HeaderInfoRespDto(member);
    }

}
