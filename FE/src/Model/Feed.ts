export type HomeFeed = {
  success: Boolean;
  response: {
    //관심 대학 추가하기!!!!!! 이름 뭐로 할까??
    funding: Feed[];
  };
  error: null;
};

type Feed = {
  fundingId: number;
  title: string;
  image: string;
  university: string;
  rate: number;
  shortDiscription: string;
  dueDate: number;
  member: {
    memberId: number;
    nickname: string;
  };
};
