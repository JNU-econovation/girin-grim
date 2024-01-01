package com.starshop.giringrim.payment;

import com.starshop.giringrim.funding.entity.Funding;
import com.starshop.giringrim.funding.entity.FundingType;
import com.starshop.giringrim.member.entity.Member;
import lombok.Getter;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

@Getter
public class PaymentRespDtos {

    @Getter
    public static class PaymentDetailsDto{
        private String nickname;
        private FundingDto funding;
        private SupporterDto supporter;

        public PaymentDetailsDto(String nickname ,Member member, Funding funding){
            this.nickname = nickname;
            this.funding = new FundingDto(funding);
            this.supporter = new SupporterDto(member);
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
}
