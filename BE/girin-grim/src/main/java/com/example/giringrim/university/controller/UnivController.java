package com.example.giringrim.university.controller;

import com.example.giringrim.university.service.UnivService;
import com.example.giringrim.university.dto.UnivRespDtos;
import com.example.giringrim.utils.ApiResponseGenerator;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class UnivController {

    private final UnivService univService;

    @GetMapping("/init")
    public ResponseEntity<?> initUniv(){
        univService.initUniv();
        return ApiResponseGenerator.success(HttpStatus.OK);
    }

    @GetMapping("/uni")
    public ResponseEntity<?> getUnivList(@RequestParam(value = "region") String region, @RequestParam(value = "q", required = false) String keyword){
        UnivRespDtos.GetUnivListDto respDto = univService.getUnivList(region, keyword);
        return ApiResponseGenerator.success(respDto, HttpStatus.OK);
    }
}
