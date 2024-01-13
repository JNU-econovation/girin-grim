package com.starshop.giringrim.funding.controller;

import com.starshop.giringrim.TestConfig;
import com.starshop.giringrim.funding.dto.FundingRespDtos;
import net.minidev.json.JSONObject;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.jdbc.SqlConfig;

import static org.assertj.core.api.Assertions.assertThat;

/*
@Sql(
        scripts = {"classpath:db/init.sql"},
        config = @SqlConfig(dataSource = "dataSource"),
        executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD

)
 */

class FundingControllerTest extends TestConfig {

    @LocalServerPort
    private int port;

    @Autowired
    TestRestTemplate testRestTemplate;

    @DisplayName("펀딩 상세조회 테스트")
    @Test
    void 펀딩_상세조회_테스트(){

        String url = "http://localhost:" + port + "/api/funding/1";
          ResponseEntity<JSONObject> responseEntity = testRestTemplate.
                  getForEntity(url,JSONObject.class);

        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        System.out.println("테스트" + responseEntity.getBody().toJSONString());

    }

}