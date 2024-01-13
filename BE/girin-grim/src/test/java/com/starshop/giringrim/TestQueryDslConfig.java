package com.starshop.giringrim;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.starshop.giringrim.funding.repository.FundingRepositoryCustom;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;


@TestConfiguration
public class TestQueryDslConfig {
    @PersistenceContext
    private EntityManager entityManager;

    @Bean
    public JPAQueryFactory jpaQueryFactory() {
        return new JPAQueryFactory(entityManager);
    }

    @Bean
    public FundingRepositoryCustom fundingRepositoryCustom() {
        return new FundingRepositoryCustom(jpaQueryFactory());
    }

}
