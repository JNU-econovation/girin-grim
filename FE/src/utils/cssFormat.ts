export const HeroFormat = (page?: "header" | "member") => {
  return page === "header" ? "small" : page == "member" ? "large" : "small";
};

export const HeroFormatClass = (size?: "small" | "medium" | "large") => {
  return size === "small"
    ? "w-10 h-10"
    : size === "medium"
    ? "w-20 h-20"
    : "w-40 h-40";
};

export const HeroFormatSize = (size?: "small" | "medium" | "large") => {
  return size === "small" ? 40 : size === "medium" ? 80 : 160;
};
