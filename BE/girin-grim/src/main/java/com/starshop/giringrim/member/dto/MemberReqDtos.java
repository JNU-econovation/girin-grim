package com.starshop.giringrim.member.dto;

import com.starshop.giringrim.favUniversity.entity.FavUniversity;
import com.starshop.giringrim.member.entity.Member;
import com.starshop.giringrim.university.entity.University;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
public class MemberReqDtos {

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class JoinReqDto {

        @NotBlank(message = "닉네임을 입력해주세요.")
        @Pattern(regexp = "^[a-zA-Z0-9가-힣]{2,8}$", message = "닉네임은 2~8자의 한글, 영문, 숫자만 가능합니다.")
        private String nickname;

        @NotBlank
        @Pattern(regexp = "^[a-zA-Z0-9+-\\_.]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$", message = "이메일 형식이 올바르지 않습니다.")
        private String email;

        @NotBlank(message = "비밀번호를 입력해주세요.")
        @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=-]).{6,20}$", message = "비밀번호는 6~20자의 영문, 숫자, 특수문자를 포함해야합니다.")
        private String password;


        private List<FavUniversityDto> favUniversity;

        private String image;

        @Getter
        @AllArgsConstructor
        @NoArgsConstructor
        public static class FavUniversityDto {
            private Long favUniversityId;

            public FavUniversity toEntity(Member member, University univ){
                return FavUniversity.builder()
                        .name(univ.getName())
                        .member(member)
                        .build();
            }
        }

        public Member toEntity(String encodedPassword){
            return Member.builder()
                    .nickname(nickname)
                    .email(email)
                    .password(encodedPassword)
                    .image(image)
                    .aboutMe("자기소개가 입력되지 않았습니다. ‘수정하기’ 버튼을 눌러 본인을 소개해보세요!")
                    .build();
        }
    }

    @Getter
    @AllArgsConstructor
    public static class LoginReqDto {
        @NotBlank(message = "이메일을 입력해주세요.")
        @Pattern(regexp = "^[a-zA-Z0-9+-\\_.]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$", message = "이메일 형식이 올바르지 않습니다.")
        private String email;

        @NotBlank(message = "비밀번호를 입력해주세요.")
        @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=-]).{6,20}$", message = "비밀번호는 6~20자의 영문, 숫자, 특수문자를 포함해야합니다.")
        private String password;
    }
}
