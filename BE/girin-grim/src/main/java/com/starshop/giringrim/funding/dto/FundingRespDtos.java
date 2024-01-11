package com.starshop.giringrim.funding.dto;

import com.querydsl.core.annotations.QueryProjection;
import com.starshop.giringrim.favUniversity.entity.FavUniversity;
import com.starshop.giringrim.funding.entity.Funding;
import com.starshop.giringrim.funding.entity.FundingType;
import com.starshop.giringrim.member.entity.Member;
import com.starshop.giringrim.option.Option;
import com.starshop.giringrim.option.item.Item;
import lombok.Builder;
import lombok.Getter;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;



@Getter
public class FundingRespDtos {

    @Getter
    public static class GetFundingDto {

        private Boolean isMine;
        private BigDecimal coin;
        private MemberDto member;
        private FundingDto funding;
        private List<OptionsDTO> options;

        public GetFundingDto(boolean isMine, BigDecimal coin, MemberDto member, FundingDto funding, List<OptionsDTO> optionList) {
            this.isMine = isMine;
            this.coin = coin;
            this.member = member;
            this.funding = funding;
            this.options = optionList;
        }

        @Getter
        public static class MemberDto{
            private Long memberId;
            private String nickname;

            public MemberDto(Member member) {
                this.memberId = member.getId();
                this.nickname = member.getNickname();
            }
        }

        @Getter
        public static class FundingDto{
            private Long fundingId;
            private FundingType type;
            private String title;
            private String image;
            private String university;
            private String shortDescription;
            private LocalDateTime startTime;
            private LocalDateTime endTime;
            private LocalDateTime estimateStartTime;
            private BigDecimal rate;
            private BigDecimal curMoney;
            private BigDecimal goalMoney;

            private FundingDto(Funding funding) {
                this.fundingId = funding.getId();
                this.type = funding.getFundingType();
                this.title = funding.getTitle();
                this.image = funding.getImage();
                this.university = funding.getUniversity().getName();
                this.shortDescription = funding.getShortDescription();
                this.startTime = funding.getStartTime();
                this.endTime = funding.getEndTime();
                this.estimateStartTime = funding.getEstimatedStartTime();
                this.rate = funding.increseRate();
                this.curMoney = funding.getCurrentMoney();
                this.goalMoney = funding.getGoalMoney();
            }

            public static FundingDto of(Funding funding){
                return new FundingDto(funding);
            }
        }

        @Getter
        public static class OptionsDTO {
            private Long optionId;
            private String name;
            private BigDecimal price;
            private Long quantity;
            private Boolean isPickup;
            private List<ItemDTO> items;

            public OptionsDTO(Option option, List<Item> itemList) {
                this.optionId = option.getId();
                this.price = option.getPrice();
                this.name = option.getName();
                this.quantity = option.getQuantity();
                this.isPickup = option.getIsPickup();
                this.items = itemList.stream().map(ItemDTO::new).collect(Collectors.toList());
            }
        }

        @Getter
        public static class ItemDTO {
            private Long itemId;
            private String name;


            public ItemDTO(Item item) {
                this.itemId = item.getId();
                this.name = item.getItemName();
            }


        }
    }

    @Getter
    public static class FundingDescriptionDto {
        private String longDescription;

        public FundingDescriptionDto(Funding funding) {
            this.longDescription = funding.getLongDescription();
        }
    }

    @Getter
    public static class HomeDto{
        private List<FavUniversityDto> favUniversity;
        private List<FundingDto> funding;

        public HomeDto(List<FavUniversity> favUniversity, List<FundingDto> funding){
            this.favUniversity = favUniversity.stream().map(FavUniversityDto::new).collect(Collectors.toList());
            this.funding = funding;
        }

        public HomeDto(List<FundingDto> funding){
            this.funding = funding;
        }

        @Getter
        public static class FavUniversityDto{
            private Long favUniversityId;
            private String name;

            public FavUniversityDto(FavUniversity favUniversity){
                this.favUniversityId = favUniversity.getId();
                this.name = favUniversity.getName();
            }

        }

        @Getter
        public static class FundingDto{
            private Long fundingId;
            private String title;
            private String image;
            private String university;
            private BigDecimal rate;
            private String shortDescription;
            private int dueDate;
            private MemberDto member;


            @QueryProjection
            public FundingDto(Funding funding, Member member){
                this.fundingId = funding.getId();
                this.title = funding.getTitle();
                this.image = funding.getImage();
                this.university = funding.getUniversity().getName();
                this.rate = funding.increseRate();
                this.shortDescription = funding.getShortDescription();
                this.dueDate = funding.getDueDate();
                this.member = new MemberDto(member);

            }


            @Getter
            private class MemberDto{
                private Long memberId;
                private String nickname;

                public MemberDto(Member member){
                    this.memberId = member.getId();
                    this.nickname = member.getNickname();
                }
            }
        }
    }

}
