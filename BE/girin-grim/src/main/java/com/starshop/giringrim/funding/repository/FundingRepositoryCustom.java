package com.starshop.giringrim.funding.repository;


import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.dsl.BooleanExpression;
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

import static com.starshop.giringrim.funding.entity.QFunding.funding;

@Repository
@RequiredArgsConstructor
public class FundingRepositoryCustom {

    private final JPAQueryFactory queryFactory;


    public List<FundingRespDtos.HomeDto.FundingDto> searchWithLogin(FundingSearchCondition condition) {
        return queryFactory
                .select(new QFundingRespDtos_HomeDto_FundingDto(funding, funding.member))
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
                .select(new QFundingRespDtos_HomeDto_FundingDto(funding, funding.member))
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


}
