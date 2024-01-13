package com.starshop.giringrim.member.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.starshop.giringrim.TestConfig;
import com.starshop.giringrim.favUniversity.entity.FavUniversity;
import com.starshop.giringrim.favUniversity.repository.FavUniversityRepository;
import com.starshop.giringrim.member.dto.MemberReqDtos;
import com.starshop.giringrim.member.entity.Member;
import com.starshop.giringrim.member.repository.MemberRepository;
import com.starshop.giringrim.member.service.MemberService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.jdbc.SqlConfig;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.transaction.annotation.Transactional;

import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@Sql(
        scripts = {"classpath:init.sql"},
        config = @SqlConfig(dataSource = "dataSource"),
        executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD

)
@AutoConfigureMockMvc
class MemberControllerTest extends TestConfig{

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    MemberService memberService;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    MemberRepository memberRepository;

    @Autowired
    FavUniversityRepository favUniversityRepository;


    @Autowired
    MockMvc mockMvc;


    @DisplayName("회원가입 성공 테스트")
    @Test
    void joinTestSuccess() throws Exception {

        //given
        List<MemberReqDtos.JoinReqDto.FavUniversityDto> favUniversityDtoList = new ArrayList<>();

        MemberReqDtos.JoinReqDto.FavUniversityDto dto1 = new MemberReqDtos.JoinReqDto.FavUniversityDto(1L);
        MemberReqDtos.JoinReqDto.FavUniversityDto dto2 = new MemberReqDtos.JoinReqDto.FavUniversityDto(2L);

        favUniversityDtoList.add(dto1);
        favUniversityDtoList.add(dto2);

        MemberReqDtos.JoinReqDto joinReqDto = new MemberReqDtos.JoinReqDto(
                "밍주",
                "asdf@gmail.com",
                "asdf!1234",
                favUniversityDtoList
        );

        String requestBody = objectMapper.writeValueAsString(joinReqDto);

        //when

        ResultActions resultActions = mockMvc.perform(
                post("/api/member/join")
                        .content(requestBody)
                        .contentType(MediaType.APPLICATION_JSON));



      //  ResponseEntity<String> responseEntity = testRestTemplate.postForEntity("/api/member/join",joinReqDto,String.class);

        //then
        String responseBody = new String(resultActions.andReturn().getResponse().getContentAsByteArray(), StandardCharsets.UTF_8);
        System.out.println("테스트 " + responseBody);

        resultActions.andExpect(jsonPath("$.success").value("true"));

      //  Assertions.assertEquals(responseEntity.getBody(),"{\"success\":true,\"response\":null,\"error\":null}");
    }


    @DisplayName("관심대학 설정 테스트_존재하지 않는 대학")
    @Test
    void 관심대학_설정_테스트_존재하지_않는_대학() throws Exception {

        //given
        List<MemberReqDtos.JoinReqDto.FavUniversityDto> favUniversityDtoList = new ArrayList<>();

        MemberReqDtos.JoinReqDto.FavUniversityDto dto1 = new MemberReqDtos.JoinReqDto.FavUniversityDto(1L);
        MemberReqDtos.JoinReqDto.FavUniversityDto dto2 = new MemberReqDtos.JoinReqDto.FavUniversityDto(4000L);

        favUniversityDtoList.add(dto1);
        favUniversityDtoList.add(dto2);

        MemberReqDtos.JoinReqDto joinReqDto = new MemberReqDtos.JoinReqDto(
                "밍주",
                "asdf@gmail.com",
                "asdf!1234",
                favUniversityDtoList
        );

        String requestBody = objectMapper.writeValueAsString(joinReqDto);

        //when
        ResultActions resultActions = mockMvc.perform(
                post("/api/member/join")
                        .content(requestBody)
                        .contentType(MediaType.APPLICATION_JSON));

        //then
        String responseBody = new String(resultActions.andReturn().getResponse().getContentAsByteArray(), StandardCharsets.UTF_8);
        System.out.println("테스트 " + responseBody);

        resultActions.andExpect(jsonPath("$.success").value("false"));
        resultActions.andExpect(jsonPath("$.error.message").value("잘못된 대학교를 선택하셨습니다."));

    }

    @DisplayName("관심대학 설정 테스트_중복된 대학 선택")
    @Test
    void 관심대학_설정_테스트_중복된_대학_선택() throws Exception {

        //given
        List<MemberReqDtos.JoinReqDto.FavUniversityDto> favUniversityDtoList = new ArrayList<>();

        MemberReqDtos.JoinReqDto.FavUniversityDto dto1 = new MemberReqDtos.JoinReqDto.FavUniversityDto(1L);
        MemberReqDtos.JoinReqDto.FavUniversityDto dto2 = new MemberReqDtos.JoinReqDto.FavUniversityDto(1L);

        favUniversityDtoList.add(dto1);
        favUniversityDtoList.add(dto2);

        MemberReqDtos.JoinReqDto joinReqDto = new MemberReqDtos.JoinReqDto(
                "밍주",
                "asdf@gmail.com",
                "asdf!1234",
                favUniversityDtoList
        );

        String requestBody = objectMapper.writeValueAsString(joinReqDto);

        //when
        ResultActions resultActions = mockMvc.perform(
                post("/api/member/join")
                        .content(requestBody)
                        .contentType(MediaType.APPLICATION_JSON));

        //then
        String responseBody = new String(resultActions.andReturn().getResponse().getContentAsByteArray(), StandardCharsets.UTF_8);
        System.out.println("테스트 " + responseBody);

        resultActions.andExpect(jsonPath("$.success").value("false"));
        resultActions.andExpect(jsonPath("$.error.message").value("중복된 대학교를 선택하셨습니다."));

    }

    @DisplayName("관심대학 설정 테스트_개수 초과")
    @Test
    void 관심대학_설정_테스트_개수_초과() throws Exception {

        //given
        List<MemberReqDtos.JoinReqDto.FavUniversityDto> favUniversityDtoList = new ArrayList<>();

        MemberReqDtos.JoinReqDto.FavUniversityDto dto1 = new MemberReqDtos.JoinReqDto.FavUniversityDto(1L);
        MemberReqDtos.JoinReqDto.FavUniversityDto dto2 = new MemberReqDtos.JoinReqDto.FavUniversityDto(2L);
        MemberReqDtos.JoinReqDto.FavUniversityDto dto3 = new MemberReqDtos.JoinReqDto.FavUniversityDto(3L);
        MemberReqDtos.JoinReqDto.FavUniversityDto dto4 = new MemberReqDtos.JoinReqDto.FavUniversityDto(4L);
        MemberReqDtos.JoinReqDto.FavUniversityDto dto5 = new MemberReqDtos.JoinReqDto.FavUniversityDto(5L);
        MemberReqDtos.JoinReqDto.FavUniversityDto dto6 = new MemberReqDtos.JoinReqDto.FavUniversityDto(6L);
        MemberReqDtos.JoinReqDto.FavUniversityDto dto7 = new MemberReqDtos.JoinReqDto.FavUniversityDto(7L);
        MemberReqDtos.JoinReqDto.FavUniversityDto dto8 = new MemberReqDtos.JoinReqDto.FavUniversityDto(8L);
        MemberReqDtos.JoinReqDto.FavUniversityDto dto9 = new MemberReqDtos.JoinReqDto.FavUniversityDto(9L);
        MemberReqDtos.JoinReqDto.FavUniversityDto dto10 = new MemberReqDtos.JoinReqDto.FavUniversityDto(10L);
        MemberReqDtos.JoinReqDto.FavUniversityDto dto11 = new MemberReqDtos.JoinReqDto.FavUniversityDto(11L);


        favUniversityDtoList.add(dto1);
        favUniversityDtoList.add(dto2);
        favUniversityDtoList.add(dto3);
        favUniversityDtoList.add(dto4);
        favUniversityDtoList.add(dto5);
        favUniversityDtoList.add(dto6);
        favUniversityDtoList.add(dto7);
        favUniversityDtoList.add(dto8);
        favUniversityDtoList.add(dto9);
        favUniversityDtoList.add(dto10);
        favUniversityDtoList.add(dto11);

        MemberReqDtos.JoinReqDto joinReqDto = new MemberReqDtos.JoinReqDto(
                "밍주",
                "asdf@gmail.com",
                "asdf!1234",
                favUniversityDtoList
        );

        String requestBody = objectMapper.writeValueAsString(joinReqDto);

        //when
        ResultActions resultActions = mockMvc.perform(
                post("/api/member/join")
                        .content(requestBody)
                        .contentType(MediaType.APPLICATION_JSON));

        //then
        String responseBody = new String(resultActions.andReturn().getResponse().getContentAsByteArray(), StandardCharsets.UTF_8);
        System.out.println("테스트 " + responseBody);

        resultActions.andExpect(jsonPath("$.success").value("false"));
        resultActions.andExpect(jsonPath("$.error.message").value("1개 이상 또는 10개 이하의 대학교를 선택해주세요."));

    }

    @DisplayName("이메일 형식 실패 테스트")
    @Test
    void joinTestFail_1() throws Exception {

        //given
        List<MemberReqDtos.JoinReqDto.FavUniversityDto> favUniversityDtoList = new ArrayList<>();

        MemberReqDtos.JoinReqDto.FavUniversityDto dto1 = new MemberReqDtos.JoinReqDto.FavUniversityDto(1L);
        MemberReqDtos.JoinReqDto.FavUniversityDto dto2 = new MemberReqDtos.JoinReqDto.FavUniversityDto(2L);

        favUniversityDtoList.add(dto1);
        favUniversityDtoList.add(dto2);

        MemberReqDtos.JoinReqDto joinReqDto = new MemberReqDtos.JoinReqDto(
                "밍주",
                "asdfgmail.com",
                "asdf!1234",
                favUniversityDtoList
        );

        String requestBody = objectMapper.writeValueAsString(joinReqDto);

        //when
        ResultActions resultActions = mockMvc.perform(
                post("/api/member/join")
                        .content(requestBody)
                        .contentType(MediaType.APPLICATION_JSON));

        //then
        String responseBody = new String(resultActions.andReturn().getResponse().getContentAsByteArray(), StandardCharsets.UTF_8);
        System.out.println("테스트 " + responseBody);

        resultActions.andExpect(jsonPath("$.success").value("false"));
        resultActions.andExpect(jsonPath("$.error.message").value("이메일 형식이 올바르지 않습니다."));

    }

    @DisplayName("비밀번호 형식 실패 테스트")
    @Test
    void joinTestFail_2() throws Exception {

        //given
        List<MemberReqDtos.JoinReqDto.FavUniversityDto> favUniversityDtoList = new ArrayList<>();

        MemberReqDtos.JoinReqDto.FavUniversityDto dto1 = new MemberReqDtos.JoinReqDto.FavUniversityDto(1L);
        MemberReqDtos.JoinReqDto.FavUniversityDto dto2 = new MemberReqDtos.JoinReqDto.FavUniversityDto(2L);

        favUniversityDtoList.add(dto1);
        favUniversityDtoList.add(dto2);

        MemberReqDtos.JoinReqDto joinReqDto = new MemberReqDtos.JoinReqDto(
                "밍주",
                "asdf@gmail.com",
                "asdf1234",
                favUniversityDtoList
        );

        String requestBody = objectMapper.writeValueAsString(joinReqDto);

        //when
        ResultActions resultActions = mockMvc.perform(
                post("/api/member/join")
                        .content(requestBody)
                        .contentType(MediaType.APPLICATION_JSON));

        //then
        String responseBody = new String(resultActions.andReturn().getResponse().getContentAsByteArray(), StandardCharsets.UTF_8);
        System.out.println("테스트 " + responseBody);

        resultActions.andExpect(jsonPath("$.success").value("false"));
        resultActions.andExpect(jsonPath("$.error.message").value("비밀번호는 6~20자의 영문, 숫자, 특수문자를 포함해야합니다."));

    }

    @DisplayName("이메일 중복테스트")
    @Test
    void joinTestFail_3() throws Exception {

        Member member = memberRepository.saveAndFlush(Member.builder()
                .email("asdf@gmail.com")
                .password(passwordEncoder.encode("asdf!1234"))
                .nickname("밍주")
                .build());

        //given
        favUniversityRepository.saveAndFlush(FavUniversity.builder()
                .member(member)
                .name("기린대학교")
                .build());

        //when
        ResultActions resultActions = mockMvc.perform(
                get("/api/member/join")
                        .param("email", "asdf@gmail.com")
                        .contentType(MediaType.APPLICATION_JSON));

        //then
        String responseBody = new String(resultActions.andReturn().getResponse().getContentAsByteArray(), StandardCharsets.UTF_8);
        System.out.println("테스트 " + responseBody);

        resultActions.andExpect(jsonPath("$.success").value("false"));
    }

    @DisplayName("닉네임 중복테스트")
    @Test
    void joinTestFail_4() throws Exception {

        Member member = memberRepository.saveAndFlush(Member.builder()
                .email("asdf@gmail.com")
                .password(passwordEncoder.encode("asdf!1234"))
                .nickname("닉네임")
                .build());

        //given
        favUniversityRepository.saveAndFlush(FavUniversity.builder()
                .member(member)
                .name("기린대학교")
                .build());

        //when
        ResultActions resultActions = mockMvc.perform(
                get("/api/member/join")
                        .param("nickname", "닉네임")
                        .contentType(MediaType.APPLICATION_JSON));

        //then
        String responseBody = new String(resultActions.andReturn().getResponse().getContentAsByteArray(), StandardCharsets.UTF_8);
        System.out.println("테스트 " + responseBody);

        resultActions.andExpect(jsonPath("$.success").value("false"));
    }

    @DisplayName("로그인 성공 테스트")
    @Test
    void login_success_test() throws Exception {

        //given
        Member member = memberRepository.saveAndFlush(Member.builder()
                .email("asdf@gmail.com")
                .password(passwordEncoder.encode("asdf!1234"))
                .nickname("닉네임")
                .build());


        favUniversityRepository.saveAndFlush(FavUniversity.builder()
                .member(member)
                .name("기린대학교")
                .build());

        MemberReqDtos.LoginReqDto loginReqDto = new MemberReqDtos.LoginReqDto("asdf@gmail.com","asdf!1234");

        String requestBody = objectMapper.writeValueAsString(loginReqDto);
        //when
        ResultActions resultActions = mockMvc.perform(
                post("/api/member/login")
                        .content(requestBody)
                        .contentType(MediaType.APPLICATION_JSON));

        //then
        String responseBody = new String(resultActions.andReturn().getResponse().getContentAsByteArray(), StandardCharsets.UTF_8);
        System.out.println("테스트 " + responseBody);

        resultActions.andExpect(jsonPath("$.success").value("true"));
    }

    @DisplayName("로그인 실패 테스트_유효한 회원이 아님")
    @Test
    void login_fail_test1() throws Exception {

        //given
        Member member = memberRepository.saveAndFlush(Member.builder()
                .email("asdf@gmail.com")
                .password(passwordEncoder.encode("asdf!1234"))
                .nickname("닉네임")
                .build());


        favUniversityRepository.saveAndFlush(FavUniversity.builder()
                .member(member)
                .name("기린대학교")
                .build());

        MemberReqDtos.LoginReqDto loginReqDto = new MemberReqDtos.LoginReqDto("minju@gmail.com","asdf!1234");

        String requestBody = objectMapper.writeValueAsString(loginReqDto);
        //when
        ResultActions resultActions = mockMvc.perform(
                post("/api/member/login")
                        .content(requestBody)
                        .contentType(MediaType.APPLICATION_JSON));

        //then
        String responseBody = new String(resultActions.andReturn().getResponse().getContentAsByteArray(), StandardCharsets.UTF_8);
        System.out.println("테스트 " + responseBody);

        resultActions.andExpect(jsonPath("$.success").value("false"));
        resultActions.andExpect(jsonPath("$.error.message").value("유효하지 않은 회원입니다."));

    }

    @DisplayName("로그인 실패 테스트_비밀번호 틀림")
    @Test
    void login_fail_test2() throws Exception {

        //given
        Member member = memberRepository.saveAndFlush(Member.builder()
                .email("asdf@gmail.com")
                .password(passwordEncoder.encode("asdf!1234"))
                .nickname("닉네임")
                .build());


        favUniversityRepository.saveAndFlush(FavUniversity.builder()
                .member(member)
                .name("기린대학교")
                .build());

        MemberReqDtos.LoginReqDto loginReqDto = new MemberReqDtos.LoginReqDto("asdf@gmail.com","asdf!0000");

        String requestBody = objectMapper.writeValueAsString(loginReqDto);
        //when
        ResultActions resultActions = mockMvc.perform(
                post("/api/member/login")
                        .content(requestBody)
                        .contentType(MediaType.APPLICATION_JSON));

        //then
        String responseBody = new String(resultActions.andReturn().getResponse().getContentAsByteArray(), StandardCharsets.UTF_8);
        System.out.println("테스트 " + responseBody);

        resultActions.andExpect(jsonPath("$.success").value("false"));
        resultActions.andExpect(jsonPath("$.error.message").value("비밀번호가 일치하지 않습니다."));

    }

    @DisplayName("헤더 로그인 정보_인증되지 않은 사용자")
    @Test
    void get_header_fail_test() throws Exception {

        //given
        Member member = memberRepository.saveAndFlush(Member.builder()
                .email("asdf@gmail.com")
                .password(passwordEncoder.encode("asdf!1234"))
                .nickname("닉네임")
                .build());


        favUniversityRepository.saveAndFlush(FavUniversity.builder()
                .member(member)
                .name("기린대학교")
                .build());

        //when
        ResultActions resultActions = mockMvc.perform(
                get("/api/member")
                        .contentType(MediaType.APPLICATION_JSON));

        //then
        String responseBody = new String(resultActions.andReturn().getResponse().getContentAsByteArray(), StandardCharsets.UTF_8);
        System.out.println("테스트 " + responseBody);

        resultActions.andExpect(jsonPath("$.success").value("false"));
        resultActions.andExpect(jsonPath("$.error.statusCode").value(401));

    }



}