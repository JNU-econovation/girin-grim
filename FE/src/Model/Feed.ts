export type HomeFeed = {
  favUniversity: FavUniversity[];
  funding: Feed[];
};

export type Feed = {
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

export type FavUniversity = {
  favUniversityId: number;
  name: string;
};
