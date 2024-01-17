import { HomeFeed } from "@/Model/Feed";
import { TResponse } from "@/Model/Response";
import { HomeFeedProps } from "@/hooks/useFeeds";
import { Server } from "./axios";
import { homeURL } from "@/constants/urls";
import { getToken } from "@/utils/authenticate";

export const getHomeFeed = async ({
  category,
  sort,
  uni,
  q,
}: HomeFeedProps): Promise<TResponse<HomeFeed>> => {
  const data = await Server.get(homeURL, {
    params: { category, sort, uni, q },
    headers: {
      Authorization: getToken(),
    },
  }).then((res) => res.data);
  return data;
};
