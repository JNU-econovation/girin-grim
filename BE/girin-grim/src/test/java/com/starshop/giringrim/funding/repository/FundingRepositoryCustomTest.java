package com.starshop.giringrim.funding.repository;

import com.starshop.giringrim.config.DatabaseCleanup;
import com.starshop.giringrim.config.TestQueryDslConfig;
import com.starshop.giringrim.funding.dto.FundingRespDtos;
import com.starshop.giringrim.funding.entity.Funding;
import com.starshop.giringrim.funding.entity.FundingType;
import com.starshop.giringrim.member.entity.Member;
import com.starshop.giringrim.member.repository.MemberRepository;
import com.starshop.giringrim.university.entity.University;
import com.starshop.giringrim.university.repository.UnivRepository;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.test.context.ActiveProfiles;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;


@Import(TestQueryDslConfig.class)
@ActiveProfiles("test")
@DataJpaTest
class FundingRepositoryCustomTest {

    @Autowired
    FundingRepositoryCustom fundingRepositoryCustom;

    @Autowired
    FundingRepository fundingRepository;

    @Autowired
    UnivRepository univRepository;

    @Autowired
    MemberRepository memberRepository;

    @Autowired
    DatabaseCleanup databaseCleanup;

    @BeforeEach
    void setUp() {
        databaseCleanup.execute();

        Member member = Member.builder()
                .email("asdf@gmail,com")
                .password("asdf!1234")
                .nickname("민주")
                .build();

        memberRepository.saveAndFlush(member);


        University university1 = University.builder().name("기린대학교").region("광주").build();
        University university2 = University.builder().name("전남대학교").region("광주").build();
        University university3 = University.builder().name("서울대학교").region("서울").build();
        University university4 = University.builder().name("충남대학교").region("대전").build();
        univRepository.saveAndFlush(university1);
        univRepository.saveAndFlush(university2);
        univRepository.saveAndFlush(university3);
        univRepository.saveAndFlush(university4);


        Funding funding1 = Funding.builder()
                .member(member)
                .title("펀딩 제목1")
                .university(university1)
                .fundingType(FundingType.DONATE)
                .currentMoney(BigDecimal.valueOf(35000))
                .goalMoney(BigDecimal.valueOf(3000))
                .startTime(LocalDateTime.of(2024, 1, 13, 9, 11))
                .endTime(LocalDateTime.of(2024, 1, 15, 9, 11))
                .estimatedStartTime(LocalDateTime.of(2024, 1, 17, 9, 11))
                .build();

        Funding funding2 = Funding.builder()
                .member(member)
                .title("펀딩 제목2")
                .university(university2)
                .fundingType(FundingType.GIFT)
                .currentMoney(BigDecimal.valueOf(35000))
                .goalMoney(BigDecimal.valueOf(3000))
                .startTime(LocalDateTime.of(2024, 1, 13, 9, 11))
                .endTime(LocalDateTime.of(2024, 1, 15, 9, 11))
                .estimatedStartTime(LocalDateTime.of(2024, 1, 17, 9, 11))
                .build();

        Funding funding3 = Funding.builder()
                .member(member)
                .title("펀딩 제목3 검색")
                .university(university3)
                .fundingType(FundingType.DONATE)
                .currentMoney(BigDecimal.valueOf(100))
                .goalMoney(BigDecimal.valueOf(10000))
                .startTime(LocalDateTime.of(2024, 1, 13, 9, 11))
                .endTime(LocalDateTime.of(2024, 1, 15, 9, 11))
                .estimatedStartTime(LocalDateTime.of(2024, 1, 17, 9, 11))
                .build();

        Funding funding4 = Funding.builder()
                .member(member)
                .title("펀딩 제목4 검색")
                .university(university1)
                .fundingType(FundingType.GIFT)
                .currentMoney(BigDecimal.valueOf(35000))
                .goalMoney(BigDecimal.valueOf(1000))
                .startTime(LocalDateTime.of(2024, 1, 13, 9, 11))
                .endTime(LocalDateTime.of(2024, 1, 15, 9, 11))
                .estimatedStartTime(LocalDateTime.of(2024, 1, 17, 9, 11))
                .build();

        Funding funding5 = Funding.builder()
                .member(member)
                .title("펀딩 제목5 검색")
                .university(university4)
                .fundingType(FundingType.DONATE)
                .currentMoney(BigDecimal.valueOf(35000))
                .goalMoney(BigDecimal.valueOf(10000000))
                .startTime(LocalDateTime.of(2024, 1, 13, 9, 11))
                .endTime(LocalDateTime.of(2024, 1, 15, 9, 11))
                .estimatedStartTime(LocalDateTime.of(2024, 1, 17, 9, 11))
                .build();

        Funding funding6 = Funding.builder()
                .member(member)
                .title("펀딩 제목6")
                .university(university4)
                .fundingType(FundingType.GIFT)
                .currentMoney(BigDecimal.valueOf(100))
                .goalMoney(BigDecimal.valueOf(10000000))
                .startTime(LocalDateTime.of(2024, 1, 13, 9, 11))
                .endTime(LocalDateTime.of(2024, 1, 15, 9, 11))
                .estimatedStartTime(LocalDateTime.of(2024, 1, 17, 9, 11))
                .build();

        Funding funding7 = Funding.builder()
                .member(member)
                .title("펀딩 제목7")
                .university(university4)
                .fundingType(FundingType.GIFT)
                .currentMoney(BigDecimal.valueOf(10000000))
                .goalMoney(BigDecimal.valueOf(10000000))
                .startTime(LocalDateTime.of(2024, 1, 13, 9, 11))
                .endTime(LocalDateTime.of(2024, 1, 15, 9, 11))
                .estimatedStartTime(LocalDateTime.of(2024, 1, 17, 9, 11))
                .build();

        fundingRepository.saveAndFlush(funding1);
        fundingRepository.saveAndFlush(funding2);
        fundingRepository.saveAndFlush(funding3);
        fundingRepository.saveAndFlush(funding4);
        fundingRepository.saveAndFlush(funding5);
        fundingRepository.saveAndFlush(funding6);
        fundingRepository.saveAndFlush(funding7);

    }



    @DisplayName("홈 조회 성공 테스트1")
    @Test
    void 홈_조회_테스트1() {

        //given
        Pageable pageable = PageRequest.of(0, 6);
        String sort = "latest";
        String category = "DONATE";
        Long universityId = null;
        String keyword = null;

        //when
        FundingSearchCondition condition = new FundingSearchCondition(pageable, universityId, keyword, category, sort, null);
        List<FundingRespDtos.HomeDto.FundingDto> respDto = fundingRepositoryCustom.searchWithNonLogin(condition);

        Assertions.assertEquals(respDto.get(0).getFundingId(), 5L);
        Assertions.assertEquals(respDto.get(0).getTitle(), "펀딩 제목5 검색");


    }

    @DisplayName("홈 조회 성공 테스트2")
    @Test
    void 홈_조회_테스트2() {

        //given
        Pageable pageable = PageRequest.of(0, 6);
        String sort = "highest";
        String category = null;
        Long universityId = null;
        String keyword = null;


        //when
        FundingSearchCondition condition = new FundingSearchCondition(pageable, universityId, keyword, category, sort, null);
        List<FundingRespDtos.HomeDto.FundingDto> respDto = fundingRepositoryCustom.searchWithNonLogin(condition);

        Assertions.assertEquals(respDto.get(0).getTitle(), "펀딩 제목4 검색");


    }

    @DisplayName("홈 조회 성공 테스트3")
    @Test
    void 홈_조회_테스트3() {

        //given
        Pageable pageable = PageRequest.of(0, 6);
        String sort = "latest";
        String category = null;
        Long universityId = null;
        String keyword = "검색";


        //when
        FundingSearchCondition condition = new FundingSearchCondition(pageable, universityId, keyword, category, sort, null);
        List<FundingRespDtos.HomeDto.FundingDto> respDto = fundingRepositoryCustom.searchWithNonLogin(condition);

        Assertions.assertEquals(respDto.get(2).getTitle(), "펀딩 제목3 검색");

    }

    @DisplayName("홈 조회 성공 테스트4")
    @Test
    void 홈_조회_테스트4() {

        //given
        Pageable pageable = PageRequest.of(0, 6);
        String sort = "latest";
        String category = null;
        Optional<University> university = univRepository.findByName("전남대학교");
        Long universityId = university.get().getId();
        String keyword = null;


        //when
        FundingSearchCondition condition = new FundingSearchCondition(pageable, universityId, keyword, category, sort, null);
        List<FundingRespDtos.HomeDto.FundingDto> respDto = fundingRepositoryCustom.searchWithNonLogin(condition);

        Assertions.assertEquals(respDto.get(0).getTitle(), "펀딩 제목2");

    }

    @DisplayName("홈 조회 성공 테스트5")
    @Test
    void 홈_조회_테스트5() {

        //given

        Optional<University> university1 = univRepository.findByName("전남대학교");
        Optional<University> university2 = univRepository.findByName("기린대학교");
        List<Long> ids = Arrays.asList(university1.get().getId(),university2.get().getId());

        Pageable pageable = PageRequest.of(0, 6);
        String sort = "latest";
        String category = null;
        Long universityId = null;
        String keyword = null;


        //when
        FundingSearchCondition condition = new FundingSearchCondition(pageable, universityId, keyword, category, sort, ids);
        List<FundingRespDtos.HomeDto.FundingDto> respDto = fundingRepositoryCustom.searchWithLogin(condition);

        Assertions.assertEquals(respDto.get(0).getTitle(), "펀딩 제목4 검색");
        Assertions.assertEquals(respDto.get(1).getTitle(), "펀딩 제목2");

    }

    @DisplayName("홈 조회 성공 테스트6")
    @Test
    void 홈_조회_테스트6() {

        //given
        Pageable pageable = PageRequest.of(1, 6);
        String sort = "latest";
        String category = null;
        Long universityId = null;
        String keyword = null;


        //when
        FundingSearchCondition condition = new FundingSearchCondition(pageable, universityId, keyword, category, sort, null);
        List<FundingRespDtos.HomeDto.FundingDto> respDto = fundingRepositoryCustom.searchWithNonLogin(condition);

        Assertions.assertEquals(respDto.get(0).getTitle(), "펀딩 제목1");

    }

}
