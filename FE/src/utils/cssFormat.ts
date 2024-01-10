export const HeroFormat = (page?: "header" | "member") => {
  return page === "header" ? "small" : page == "member" ? "large" : "small";
};

export const HeroFormatClass = (size?: "small" | "medium" | "large") => {
  return size === "small"
    ? "w-10 h-10"
    : size === "medium"
    ? "w-20 h-20"
    : "w-30 h-30";
};

export const HeroFormatSize = (size?: "small" | "medium" | "large") => {
  return size === "small" ? 40 : size === "medium" ? 80 : 120;
};
