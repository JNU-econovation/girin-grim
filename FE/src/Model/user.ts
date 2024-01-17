export type Form = {
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
};
export type UserForm = {
  email: string;
  password: string;
  nickname: string;
  favUniversity: FuvUniv[];
};
export type LoginUser = {
  email: string;
  password: string;
};

export type UserDetail = {
  isMine: boolean;
  member: UserDetailMemberInfo;
};

export type UserDetailMemberInfo = {
  memberId: number;
  nickname: string;
  email: string;
  image: string;
  aboutMe: string;
  address: string;
  coin: number;
  university: {
    universityId: number;
    name: string;
  };
};

export type InfoConst =
  | {
      title: "관심대학";
      content: { universityId: number; name: string }[];
      icon: null;
    }
  | {
      title: "크레파스" | "자기소개" | "연락처" | "주소";
      content: string;
      icon: JSX.Element | null;
    };

export type FuvUniv = { favUniversityId: number };
export type JoinCheck = {
  agree: boolean;
  emailCheck: boolean;
  nameCheck: boolean;
};
