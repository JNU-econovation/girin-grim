
package com.starshop.giringrim.member.dto;

import com.starshop.giringrim.favUniversity.entity.FavUniversity;
import com.starshop.giringrim.member.entity.Member;
import lombok.Getter;

import java.math.BigDecimal;
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

        @Getter
        public static class MemberDto{
            private Long id;
            private String nickname;
            private String email;
            private String image;
            private String aboutMe;
            private String address;
            private BigDecimal coin;
            private List<FavUniversityDto> university;

            public MemberDto(Member member, List<FavUniversity> favUniversities){
                this.id = member.getId();
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

            @Getter
            public static class FavUniversityDto{
                private String name;

                public FavUniversityDto(FavUniversity favUniversity){
                    this.name = favUniversity.getName();
                }
            }
        }
    }
}

