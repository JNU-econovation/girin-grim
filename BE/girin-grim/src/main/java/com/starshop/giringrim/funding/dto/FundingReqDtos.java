package com.starshop.giringrim.funding.dto;

import com.starshop.giringrim.funding.entity.Funding;
import com.starshop.giringrim.funding.entity.FundingType;
import com.starshop.giringrim.member.entity.Member;
import com.starshop.giringrim.option.Option;
import com.starshop.giringrim.option.item.Item;
import com.starshop.giringrim.university.entity.University;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
@Getter
public class FundingReqDtos{
    @Getter
    public static class UploadDto {

        private FundingDto funding;
        private List<OptionDto> options;

        @Getter
        public static class FundingDto {

            @NotBlank(message = "제목은 필수 입력 항목입니다.")
            private String title;
            @NotBlank(message = "이미지는 필수 입력 항목입니다.")
            private String image;
            @NotBlank(message = "내용은 필수 입력 항목입니다.")
            private String shortDescription;
            @NotNull(message = "대학교를 선택해주세요.")
            private Long university;
            @NotBlank(message = "사진을 등록해주세요.")
            private String longDescription;
            @NotNull(message = "시작일을 선택해주세요.")
            private LocalDateTime startTime;
            @NotNull(message = "종료일을 선택해주세요.")
            private LocalDateTime endTime;
            @NotNull(message = "예상 시작일을 선택해주세요.")
            private LocalDateTime estimatedStartTime;
            @NotNull(message = "목표 금액을 입력해주세요.")
            private BigDecimal goalMoney;

            public Funding toEntity(University university, FundingType type, Member member) {
                return Funding.builder()
                        .fundingType(type)
                        .title(title)
                        .image(image)
                        .shortDescription(shortDescription)
                        .longDescription(longDescription)
                        .currentMoney(BigDecimal.ZERO)
                        .goalMoney(goalMoney)
                        .startTime(startTime)
                        .endTime(endTime)
                        .estimatedStartTime(estimatedStartTime)
                        .member(member)
                        .university(university)
                        .build();
            }

        }

        @Getter
        public static class OptionDto {
            private String name;
            private BigDecimal price;
            private Long quantity;
            private List<ItemDto> items;

            @Getter
            public static class ItemDto {
                private String name;

                public Item toEntity(Option option){
                    return Item.builder()
                            .option(option)
                            .itemName(name)
                            .build();
                }
            }

            public Option toEntity(Funding funding){
                return Option.builder()
                        .funding(funding)
                        .name(name)
                        .price(price)
                        .quantity(quantity)
                        .build();
            }
        }



    }

}


