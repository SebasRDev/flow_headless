import { cva } from "class-variance-authority";

export const containerTitle = cva(["container", "mt-8", "mb-8"], {
  variants: {
    align: {
      left: ["text-left"],
      center: ["text-center"],
    },
    color: {
      primary: ["text-primary-500"],
      secondary: ["text-gray-15"],
    },
  },
  defaultVariants: {
    align: "center",
    color: "primary",
  },
});

export const titleStyles = cva(["mb-4"], {
  variants: {
    tag: {
      h1: ["text-font-size-800", "sm:text-font-size-1000"],
      h3: ["text-font-size-600", "sm:text-font-size-800"]
    }
  },
  defaultVariants: {
    tag: "h3",
  },
});

export const subtitleStyles = cva(["text-font-size-200", "leading-7", "w-full"], {
  variants: {
    align: {
      left: ["mx-0"],
      center: ["mx-auto"],
    },
    size: {
      medium: ["sm:w-3/5"],
      big: ["sm:w-full"],
    },
  },
  defaultVariants: {
    align: "center",
    size: "big",
  },
});