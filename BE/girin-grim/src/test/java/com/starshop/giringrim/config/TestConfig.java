package com.starshop.giringrim.config;

import org.junit.jupiter.api.AfterEach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;


@ActiveProfiles("test")
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public abstract class TestConfig {
    @Autowired
    private DatabaseCleanup databaseCleanup;

    @AfterEach
    public void setUpAfter() {
        databaseCleanup.execute();
    }

}