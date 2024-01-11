export type Form = {
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
  university: { name: string }[];
  agree: boolean;
  emailCheck: boolean;
  nameCheck: boolean;
};
export type UserForm = {
  email: string;
  password: string;
  nickname: string;
  university: { name: string }[];
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
      title: "크레파스";
      content: string;
      icon: JSX.Element;
      array: false;
    }
  | {
      title: "자기소개" | "연락처" | "주소";
      content: string;
      icon: null;
      array: false;
    }
  | {
      title: "관심대학";
      content: { universityId: number; name: string }[];
      icon: null;
      array: true;
    };
