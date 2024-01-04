package com.starshop.giringrim.funding.repository;


import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.data.domain.Pageable;

import java.util.List;

@AllArgsConstructor
@Getter
public class FundingSearchCondition {
    /*
    *   DB에서 펀딩 글 리스트 찾는 조건
     */
    private Pageable pageable;
    //대학교 필터로 설정한 전국대학교(University도메인의 id값)
    private Long universityId;
    //검색 창에 입력한 키워드 (제목)
    private String keyword;
    //카테고리 필터에 설정한 카테고리 (FundingType enum의 name값)
    private String category;
    //펀딩 글 리스트 정렬 기준 (latest(최신순), highest(rate가 높은 순) -> 달성률)
    private String sort;
    //회원가입 시 설정한 전국 대학교 아이디 값 리스트
    private List<Long> universityIds;
}
