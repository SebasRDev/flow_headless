import { cva } from "class-variance-authority";

export const button = cva("font-bold rounded-lg", {
  variants: {
    variant: {
      primary: [
        "bg-primary-500",
        "text-white",
      ],
      secondary: [
        "text-primary-500",
        "border-2",
        "border-primary-500",
      ],
    },
    size: {
      small: ["py-2", "px-4", "text-sm", "leading-[18px]"],
      big: ["py-4", "px-8", "text-base", "leading-5"],
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "small",
  },
});
