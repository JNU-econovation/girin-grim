package com.starshop.giringrim.funding.repository;


import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.core.types.dsl.NumberExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.starshop.giringrim.funding.dto.FundingRespDtos;
import com.starshop.giringrim.funding.dto.QFundingRespDtos_HomeDto_FundingDto;
import com.starshop.giringrim.funding.entity.FundingType;
import com.starshop.giringrim.funding.entity.QFunding;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import static com.querydsl.core.types.dsl.MathExpressions.*;
import static com.starshop.giringrim.funding.entity.QFunding.funding;

/*
 * 대학교 아이디, 키워드, 카테고리, 정렬 기준으로 펀딩 글 리스트 조회
 */
@Repository
@RequiredArgsConstructor
public class FundingRepositoryCustom {

    private final JPAQueryFactory queryFactory;


    public List<FundingRespDtos.HomeDto.FundingDto> searchWithLogin(FundingSearchCondition condition) {
        return queryFactory
                .select(new QFundingRespDtos_HomeDto_FundingDto(
                        funding.id.as("fundingId"),
                        funding.title,
                        funding.image,
                        funding.university.name.as("university"),
                        funding.currentMoney.divide(funding.goalMoney).multiply(BigDecimal.valueOf(100)).as("rate"),
                        Expressions.dateTimeTemplate(Integer.class,"TIMESTAMPDIFF(DAY, {0}, {1})", Expressions.currentDate(), funding.endTime).as("dueDate"),
                        funding.shortDescription,
                        funding.member.id,
                        funding.member.nickname))
                .from(funding)
                .where(
                        funding.university.id.in(universityIds(condition.getUniversityId(), condition.getUniversityIds())),
                        keywordEq(condition.getKeyword()),
                        categoryEq(condition.getCategory())
                )
                .offset(condition.getPageable().getOffset())
                .limit(condition.getPageable().getPageSize())
                .orderBy(
                        sortEq(condition.getSort())
                )
                .fetch();

    }


    public List<FundingRespDtos.HomeDto.FundingDto> searchWithNonLogin(FundingSearchCondition condition) {
        return queryFactory
                .select(new QFundingRespDtos_HomeDto_FundingDto(
                        funding.id.as("fundingId"),
                        funding.title,
                        funding.image,
                        funding.university.name.as("university"),
                        round(funding.currentMoney.divide(funding.goalMoney), 2).multiply(BigDecimal.valueOf(100)).as("rate"),
                        Expressions.dateTimeTemplate(Integer.class,"TIMESTAMPDIFF(DAY, {0}, {1})", Expressions.currentDate(), funding.endTime).as("dueDate"),
                        funding.shortDescription,
                        funding.member.id.as("memberId"),
                        funding.member.nickname))
                .from(funding)
                .where(
                        universityIdEq(condition.getUniversityId()),
                        keywordEq(condition.getKeyword()),
                        categoryEq(condition.getCategory())
                )
                .offset(condition.getPageable().getOffset())
                .limit(condition.getPageable().getPageSize())
                .orderBy(
                        sortEq(condition.getSort())
                )
                .fetch();

    }




    /*
     *   uni 파라미터가 null이면 회원가입 시 설정했던 전국 대학교 아이디값들을 리스트에 담아서 반환
     *   필터로 대학교 선택했을 경우엔 그 대학교 아이디값만 리스트에 담아서 반환
     */
    private List<Long> universityIds(Long universityId, List<Long> universityIds) {
        List<Long> ids = new ArrayList<>();
        if(universityId != null) {
            ids.add(universityId);
            return ids;
        }else{
            ids.addAll(universityIds);
            return ids;
        }
    }

    /*
     *   키워드가 포함된 펀딩 글 리스트
     */
    private BooleanExpression keywordEq(String keyword) {
        return keyword != null ? funding.title.contains(keyword) : null;
    }

    /*
     *   비로그인일때 uni 파라미터 값으로 대학교 필터링
     */
    private BooleanExpression universityIdEq(Long universityId) {
        return universityId != null ? funding.university.id.eq(universityId) : null;
    }

    /*
     *   카테고리가 일치하는 펀딩 글 리스트
     */
    private BooleanExpression categoryEq(String category) {
        if(category!=null){
            if((!category.equals("DONATE")) && (!category.equals("GIFT"))){
                return null;
            }else{
                return funding.fundingType.eq(FundingType.valueOf(category));
            }
        }
        else
            return null;

      //  return category != null ? funding.fundingType.eq(FundingType.valueOf(category)) : null;
    }

    /*
     *   펀딩 글 리스트 정렬 기준 (default: 최신순(latest))
     */
    private OrderSpecifier<?> sortEq(String sort) {
        QFunding funding = QFunding.funding;

        NumberExpression<BigDecimal> rate = funding.currentMoney.divide(funding.goalMoney).multiply(BigDecimal.valueOf(100));

        //기본값
        if (sort == null) {
            return rate.desc();
        }
        if (sort.equals("latest")) {
            return funding.createdAt.desc();
        } else if (sort.equals("highest")) {
            return rate.desc();
        } else {
            return rate.desc();
        }
    }



}
