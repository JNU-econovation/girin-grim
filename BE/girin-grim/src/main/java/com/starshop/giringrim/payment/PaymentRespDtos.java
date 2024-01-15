package com.starshop.giringrim.payment;


import com.starshop.giringrim.funding.entity.Funding;
import com.starshop.giringrim.funding.entity.FundingType;
import com.starshop.giringrim.member.entity.Member;
import com.starshop.giringrim.option.Option;
import com.starshop.giringrim.option.item.Item;
import com.starshop.giringrim.payment.details.PaymentDetails;
import lombok.Getter;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Getter
public class PaymentRespDtos {

    @Getter
    public static class PaymentDetailsDto{
        private MemberDto member;
        private FundingDto funding;
        private SupporterDto supporter;

        public PaymentDetailsDto(Member creator ,Member supporter, Funding funding){
            this.member = new MemberDto(creator);
            this.funding = new FundingDto(funding);
            this.supporter = new SupporterDto(supporter);
        }

        @Getter
        public static class MemberDto{
            private Long memberId;
            private String nickanme;

            public MemberDto(Member member){
                this.memberId = member.getId();
                this.nickanme = member.getNickname();
            }
        }

        @Getter
        public static class FundingDto{
            private Long fundingId;
            private FundingType fundingType;
            private String title;
            private String image;
            private String university;
            private int dueDate;

            public FundingDto(Funding funding){
                this.fundingId = funding.getId();
                this.fundingType = funding.getFundingType();
                this.title = funding.getTitle();
                this.image = funding.getImage();
                this.university = funding.getUniversity().getName();
                this.dueDate = funding.getDueDate();
            }

        }

        @Getter
        public static class SupporterDto{
            private String address;

            public SupporterDto(Member member){
                this.address = member.getAddress();
            }
        }

    }

    @Getter
    public static class ChargeDetailsDto{
        private BigDecimal coin;

        public ChargeDetailsDto(Member member){
            this.coin = member.getCoin();
        }
    }

    @Getter
    public static class PaymentHistoryDto{
        private BigDecimal totalPrice;
        private MemberDto member;
        private String address;
        private FundingDto funding;
        private List<OptionsDto> options;

        public PaymentHistoryDto(BigDecimal totalPrice, Member member, String address, Funding funding, List<OptionsDto> optionsDto){
            this.totalPrice = totalPrice;
            this.member = new MemberDto(member);
            this.address = address;
            this.funding = new FundingDto(funding);
            this.options = optionsDto;
        }

        @Getter
        public static class MemberDto{
            private String nickname;

            public MemberDto(Member member){
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
            private int dueDate;

            public FundingDto(Funding funding){
                this.fundingId = funding.getId();
                this.type = funding.getFundingType();
                this.title = funding.getTitle();
                this.image = funding.getImage();
                this.university = funding.getUniversity().getName();
                this.dueDate = funding.getDueDate();
            }
        }
        @Getter
        public static class OptionsDto {
            private Long optionId;
            private String name;
            private BigDecimal price;
            private Long quantity;
            private List<ItemDto> items;

            public OptionsDto(Option option, PaymentDetails paymentDetails, List<Item> itemList) {
                this.optionId = option.getId();
                this.price = option.getPrice();
                this.name = option.getName();
                this.quantity = paymentDetails.getQuantity();
                this.items = itemList.stream().map(ItemDto::new).collect(Collectors.toList());
            }

            @Getter
            public static class ItemDto {
                private Long itemId;
                private String name;

                public ItemDto(Item item) {
                    this.itemId = item.getId();
                    this.name = item.getItemName();
                }
            }
        }
    }

    @Getter
    public static class PaymentListDto{
        private List<FundingDto> funding;

        public PaymentListDto(List<FundingDto> fundingDto){
            this.funding = fundingDto;
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
            private StateDto state;


            public FundingDto(Funding funding, Member member, StateDto state){
                this.fundingId = funding.getId();
                this.title = funding.getTitle();
                this.image = funding.getImage();
                this.university = funding.getUniversity().getName();
                this.rate = funding.increseRate();
                this.shortDescription = funding.getShortDescription();
                this.dueDate = funding.getDueDate();
                this.member = new MemberDto(member);
                this.state = state;

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

            @Getter
            public static class StateDto{
                private Boolean isFinished;
                private Boolean isSuccess;

                public StateDto(Boolean isFinished, Boolean isSuccess){
                    this.isFinished = isFinished;
                    this.isSuccess = isSuccess;
                }
        }




    }
}
}
