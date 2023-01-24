export const convertFonts = (
  width: number,
  size: "2xl" | "xl" | "lg" | "base" | "sm" | "xs" | "3xl"
) => {
  const RATIO = (width / 2480) * 2.5;
  switch (size) {
    case "xs":
      return {
        fontSize: `${12 * RATIO}px`,
        lineHeight: `${16 * RATIO}px`,
      };
    case "sm":
      return {
        fontSize: `${14 * RATIO}px`,
        lineHeight: `${20 * RATIO}px`,
      };
    case "lg":
      return {
        fontSize: `${18 * RATIO}px`,
        lineHeight: `${28 * RATIO}px`,
      };
    case "xl":
      return {
        fontSize: `${20 * RATIO}px`,
        lineHeight: `${28 * RATIO}px`,
      };
    case "2xl":
      return {
        fontSize: `${24 * RATIO}px`,
        lineHeight: `${30 * RATIO}px`,
      };
    case "3xl":
      return {
        fontSize: `${32 * RATIO}px`,
        lineHeight: `${36 * RATIO}px`,
      };
    case "base":
      return {
        fontSize: `${16 * RATIO}px`,
        lineHeight: `${24 * RATIO}px`,
      };
    default:
      break;
  }
};

export const convertSize = (width: number, expect: number) => {
  const RATIO = width / 2480;
  return expect * RATIO;
};
