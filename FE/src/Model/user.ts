type Form = {
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
  university: { name: string }[];
  agree: boolean;
  emailCheck: boolean;
  nameCheck: boolean;
};
type UserForm = {
  email: string;
  password: string;
  nickname: string;
  university: { name: string }[];
};
