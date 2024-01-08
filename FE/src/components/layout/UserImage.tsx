import useUser from "@/hooks/useUser";
import { User } from "../common/icon";

export default function UserImage() {
  const { data, isLoading, isError } = useUser();

  if (isLoading || !data) return <div>Loading...</div>;

  const { image, memberId } = data.response;
  return <User />;
}
