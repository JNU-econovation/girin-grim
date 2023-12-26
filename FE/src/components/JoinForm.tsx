import DuplicateCheckButton from "./DuplicateCheckButton";
import JoinInput from "./JoinInput";
import { Email, Nick, Password, ISchool } from "./ui/icon";

export default function JoinForm() {
  const joinForm = [
    {
      id: "email",
      title: "Email",
      placeholder: "이메일 주소 입력",
      icon: <Email />,
      button: {
        exist: true,
        component: <DuplicateCheckButton />,
        url: "",
      },
      type: "email",
      notice: "",
    },
    {
      id: "password",
      title: "Password",
      placeholder: "비밀번호 입력",
      icon: <Password />,
      button: {
        exist: true,
        component: "z",
        url: "",
      },
      type: "password",
      notice: " • 영어와 숫자를 포함, 6-20자 이내",
    },
    {
      id: "passwordCheck",
      title: "Password check",
      placeholder: "비밀번호 확인",
      icon: <Password />,
      button: {
        exist: false,
        component: null,
        url: "",
      },
      type: "password",
      notice: "",
    },
    {
      id: "school",
      title: "School",
      placeholder: "관심 학교 선택",
      icon: <ISchool />,
      button: {
        exist: true,
        component: null,
        url: "",
      },
      type: "button",
      notice: " • 관심 학교 선택, 1-10개 이내",
    },
    {
      id: "name",
      title: "Nick Name",
      placeholder: "닉네임 입력",
      icon: <Nick />,
      button: {
        exist: true,
        component: null,
        url: "",
      },
      type: "text",
      notice: " • 2-20자 이내, 특수기호 불가능",
    },
  ];

  return (
    <form>
      {joinForm.map((item, index) => {
        return (
          <JoinInput
            id={item.id}
            key={item.title}
            title={item.title}
            placeholder={item.placeholder}
            icon={item.icon}
            button={{
              ...item.button,
              component: item.button.component as React.ReactElement<any, any>,
            }}
            type={item.type}
            notice={item.notice}
          />
        );
      })}
    </form>
  );
}
