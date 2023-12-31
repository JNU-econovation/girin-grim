export type HomeFeed = {
  success: Boolean;
  response: {
    //관심 대학 추가하기!!!!!! 이름 뭐로 할까??
    funding: Feed[];
  };
  error: null;
};

type Feed = {
  fundingId: 1;
  title: "펀딩 제목1";
  image: "url형태";
  university: "전남대";
  rate: 70;
  shortDiscription: "짧은 설명";
  dueDate: 3;
  member: {
    memberId: 1;
    nickname: "홍길동";
  };
};
