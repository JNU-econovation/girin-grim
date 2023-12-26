import { formComponent } from "@/constants/formComponent";
import JoinInput from "./JoinInput";

export default function JoinForm() {
  return (
    <div>
      {formComponent.map((item, index) => {
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
    </div>
  );
}
