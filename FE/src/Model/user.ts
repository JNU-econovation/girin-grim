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
      title: string;
      content: string;
      icon: string;
      array: false;
    }
  | {
      title: string;
      content: string;
      icon: null;
      array: false;
    }
  | {
      array: true;
      title: string;
      content: { universityId: number; name: string }[];
      icon: null;
    };
