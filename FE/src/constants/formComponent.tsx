import ToggleBtn from "@/components/pages/join/ToggleBtn";
import DuplicateCheckButton from "../components/pages/join/DuplicateCheckButton";
import { Email, Nick, Password, ISchool } from "../components/common/icon";

export const formComponent = [
  {
    id: "email",
    title: "Email",
    placeholder: "이메일 주소 입력",
    pattern: "",
    icon: <Email />,
    button: {
      exist: true,
      component: <DuplicateCheckButton type="email" />,
    },
    type: "email",
    notice: "",
  },
  {
    id: "password",
    title: "Password",
    placeholder: "비밀번호 입력",
    pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=-]).{6,20}$/,
    icon: <Password />,
    button: {
      exist: true,
      component: <ToggleBtn />,
    },
    type: "password",
    notice: " • 영어와 숫자를 포함, 6-20자 이내",
  },
  {
    id: "passwordCheck",
    title: "Password check",
    placeholder: "비밀번호 확인",
    pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=-]).{6,20}$/,
    icon: <Password />,
    button: {
      exist: false,
      component: null,
    },
    type: "password",
    notice: "",
  },
  {
    id: "image",
    title: "",
    placeholder: "",
    pattern: "",
    icon: <Password />,
    button: {
      exist: true,
      component: <input type="file" />,
    },
    type: "password",
    notice: "",
  },
  {
    id: "school",
    title: "School",
    placeholder: "관심 학교 선택",
    pattern: ``,
    icon: <ISchool />,
    button: {
      exist: false,
      component: null,
    },
    type: "button",
    notice: " • 관심 학교 선택, 1-10개 이내",
  },
  {
    id: "name",
    title: "Nick Name",
    placeholder: "닉네임 입력",
    pattern: /[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]{2,20}$/,
    icon: <Nick />,
    button: {
      exist: true,
      component: <DuplicateCheckButton type="name" />,
    },
    type: "text",
    notice: " • 2-20자 이내, 특수기호 불가능",
  },
];
