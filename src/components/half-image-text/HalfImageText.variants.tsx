import { cva } from "class-variance-authority";

export const container = cva(["container", "relative", "my-8", "sm:grid", "sm:grid-cols-2"]);

export const image = cva(["h-[194px]", "max-sm:mb-4", "sm:w-[564px]", "sm:h-[318px]", "object-contain", "rounded-xl"]);
export const content = cva(["sm:pl-4"], {
  variants: {
    alignmentImage: {
      left: [],
      right: ["col-start-1", "row-start-1", "pl-0", "pr-4"],
    },
  },
  defaultVariants: {
    alignmentImage: "left",
  },
});
export const title = cva(["font-normal", "text-2xl", "leading-7", "mb-4", "text-gray-15", "sm:mb-8"]);
export const description = cva(["font-normal", "text-lg", "leading-7", "mb-4", "text-gray-55", "sm:mb-8"]);
export const bottom = cva(["text-left", "w-max"]);
export const button = cva(["block", "my-0"]);