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
