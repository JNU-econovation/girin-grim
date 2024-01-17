
package com.starshop.giringrim.member.dto;

import com.starshop.giringrim.favUniversity.entity.FavUniversity;
import com.starshop.giringrim.member.entity.Member;
import lombok.Getter;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;

@Getter
public class MemberRespDtos {

    @Getter
    public static class LoginRespDto{
        private String accessToken;
        private String refreshToken;

        public LoginRespDto(String accessToken, String refreshToken){
            this.accessToken = accessToken;
            this.refreshToken = refreshToken;
        }
    }

    @Getter
    public static class ProfileRespDto{
        private Boolean isMine;
        private MemberDto member;

        public ProfileRespDto(Member member, List<FavUniversity> favUniversity, boolean isMine){
            this.member = new MemberDto(member, favUniversity);
            this.isMine = isMine;
        }

        public ProfileRespDto(Member member, boolean isMine){
            this.member = new MemberDto(member);
            this.isMine = isMine;
        }

        @Getter
        public static class MemberDto{
            private Long memberId;
            private String nickname;
            private String email;
            private String image;
            private String aboutMe;
            private String address;
            private BigDecimal coin;
            private List<FavUniversityDto> university;

            public MemberDto(Member member, List<FavUniversity> favUniversities){
                this.memberId = member.getId();
                this.nickname = member.getNickname();
                this.email = member.getEmail();
                this.image = member.getImage();
                this.aboutMe = member.getAboutMe();
                this.address = member.getAddress();
                this.coin = member.getCoin();
                this.university = favUniversities.stream()
                        .map(FavUniversityDto::new)
                        .toList();
            }

            public MemberDto(Member member){
                this.memberId = member.getId();
                this.nickname = member.getNickname();
                this.email = null;
                this.image = member.getImage();
                this.aboutMe = member.getAboutMe();
                this.address = null;
                this.coin = null;
                this.university= Collections.emptyList();
            }

            @Getter
            public static class FavUniversityDto{
                private Long universityId;
                private String name;

                public FavUniversityDto(FavUniversity favUniversity){
                    this.universityId = favUniversity.getId();
                    this.name = favUniversity.getName();
                }
            }
        }
    }

    @Getter
    public static class HeaderInfoRespDto{
        private Long memberId;
        private String image;

        public HeaderInfoRespDto(Member member){
            this.memberId = member.getId();
            this.image = member.getImage();
        }
    }
}

