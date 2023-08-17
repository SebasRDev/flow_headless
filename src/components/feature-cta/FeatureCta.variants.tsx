import { cva } from "class-variance-authority";

export const imageStyles = cva(
  ["absolute", "max-w-none", "left-1/2", "top-1/2", "-translate-x-1/2", "-translate-y-1/2", "aspect-video", "-z-10"]
);

export const titleStyles = cva(
  ["font-normal", "text-font-size-600", "leading-[40px]", "sm:text-font-size-800", "sm:leading-[44px]"]
);

export const descriptionStyles = cva(
  ["hidden", "sm:block", "text-font-size-200", "leading-7", "sm:mt-8"]
);

export const bottomStyles = cva(
  ["mt-8", "max-sm:w-full"]
);

export const containerCta = cva(
  [
    "container", "relative", "overflow-hidden", "max-sm:mx-auto", "my-12", "bg-no-repeat",
    "bg-cover", "bg-center", "rounded-2xl", "border-solid", "border-4",
  ],
  {
    variants: {
      border: {
        none: ["border-none"],
        blue: ["border-cyan-200"],
        white: ["border-white"],
      },
      textColor: {
        blue: ["text-primary-500"],
        white: ["text-white"],
      },
    },
    defaultVariants: {
      border: "none",
      textColor: "blue",
    },
  }
);

export const contentStyles = cva(
  ["flex", "flex-col", "px-28", "sm:px-[98px]", "py-8", "sm:py-[42px]", "w-full", "max-sm:items-center", "max-sm:text-center"],
  {
    variants: {
      alignmentText: {
        left: ["text-left"],
        center: ["my-0", "mx-auto", "items-center", "text-center"],
      },
    },
    defaultVariants: {
      alignmentText: "center",
    },
  }
);

export const buttonStyles = cva([], {
  variants: {
    textColor: {
      blue: ["text-primary", "border-primary"],
      white: ["text-white", "border-white"],
    },
  },
  defaultVariants: {
    textColor: "blue",
  },
});