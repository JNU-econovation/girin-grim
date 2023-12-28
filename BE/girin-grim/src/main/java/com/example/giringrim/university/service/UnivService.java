package com.example.giringrim.university.service;

import com.example.giringrim.university.repository.UnivRepository;
import com.example.giringrim.university.entity.University;
import com.example.giringrim.university.dto.UnivRespDtos;
import com.example.giringrim.university.exception.RegionNotExistException;
import com.example.giringrim.university.exception.UnivNotExistException;
import com.example.giringrim.utils.exception.ErrorMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class UnivService {

    private final UnivRepository univRepository;

    @Transactional(readOnly = true)
    public UnivRespDtos.GetUnivListDto getUnivList(String region, String keyword){

        if(keyword != null){
            List<University> universityList = univRepository.findByKeyword(keyword);
            if(universityList.isEmpty()){
                throw new UnivNotExistException(ErrorMessage.UNIV_NOT_EXIST);
            }
            return new UnivRespDtos.GetUnivListDto(universityList);
        }
        List<University> universityList = univRepository.findByRegion(region);
        if(universityList.isEmpty()){
            throw new RegionNotExistException(ErrorMessage.REGION_NOT_EXIST);
        }
        return new UnivRespDtos.GetUnivListDto(universityList);
    }


}
