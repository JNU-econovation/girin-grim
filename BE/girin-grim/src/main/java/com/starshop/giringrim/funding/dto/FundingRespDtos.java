package com.starshop.giringrim.funding.dto;

import com.starshop.giringrim.funding.entity.Funding;
import com.starshop.giringrim.funding.entity.FundingType;
import com.starshop.giringrim.member.entity.Member;
import com.starshop.giringrim.option.Option;
import com.starshop.giringrim.option.item.Item;
import lombok.Getter;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;



@Getter
public class FundingRespDtos {

    @Getter
    public static class UploadFunding {

        private Boolean isMine;
        private FundingDto funding;
        private List<OptionsDTO> options;

        public UploadFunding(boolean isMine, FundingDto funding, List<OptionsDTO> optionList) {
            this.isMine = isMine;
            this.funding = funding;
            this.options = optionList;
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
            private int rate;
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
                this.rate = (funding.getCurrentMoney().divide(funding.getGoalMoney())).multiply(BigDecimal.valueOf(100)).intValue();
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
            private List<ItemDTO> items;

            public OptionsDTO(Option option, List<Item> itemList) {
                this.optionId = option.getId();
                this.price = option.getPrice();
                this.name = option.getName();
                this.quantity = option.getQuantity();
                this.items = itemList.stream().map(item -> new ItemDTO(item)).collect(Collectors.toList());            }
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

   


}
