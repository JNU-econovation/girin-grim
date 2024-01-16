export const getDateData = (d: string) => {
  const date = new Date(d);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const now = Date.now();
  const DdayDate = now - date.getTime();

  const Dday = Math.floor(DdayDate / (1000 * 60 * 60 * 24));

  return { year, month, day, Dday };
};

export const checkIsOnGoing = (startTime: string, endTiem: string) => {
  const now = Date.now();

  const start = Date.parse(startTime);
  const end = Date.parse(endTiem);

  const isOnGoing = start < now && now < end;

  return isOnGoing;
};
