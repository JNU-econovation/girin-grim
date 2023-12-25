package com.example.giringrim.member;

import com.example.giringrim.member.Member;
import com.example.giringrim.favUniversity.FavUniversity;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;

import java.util.List;

@Getter
public class MemberReqDto {

    @Getter
    public static class EmailValidationReqDto {
        private String email;
    }

    @Getter
    public static class NicknameValidationReqDto {
        private String nickname;
    }


    @Getter
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


        private List<FavUniversityDto> university;

        @Getter
        public static class FavUniversityDto {
            private String name;

            public FavUniversity toEntity(Member member){
                return FavUniversity.builder()
                        .name(name)
                        .member(member)
                        .build();
            }
        }

        public Member toEntity(String encodedPassword){
            return Member.builder()
                    .nickname(nickname)
                    .email(email)
                    .password(encodedPassword)
                    .build();
        }
    }
}
