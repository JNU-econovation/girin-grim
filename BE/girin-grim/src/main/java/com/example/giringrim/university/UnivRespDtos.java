package com.example.giringrim.university;

import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class UnivResponseDto {

    @Getter
    public static class GetUnivListDto{
        private List<UniversityDto> university;

        public GetUnivListDto(List<University> universityList){
            this.university = universityList.stream()
                    .map(UniversityDto::new)
                    .collect(Collectors.toList());
        }

        @Getter
        public class UniversityDto{
            private Long universityId;
            private String name;

            public UniversityDto(University university){
                this.universityId = university.getId();
                this.name = university.getName();
            }
        }
    }

}
