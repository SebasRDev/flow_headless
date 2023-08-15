import React from "react";
import { cva } from "class-variance-authority";
import { clsx } from 'clsx';
import { variants } from "./Button.variants";
import { ButtonProps } from "./Button.interface";

const button = cva("font-bold rounded-lg", {
  variants: variants,
  defaultVariants: {
    variant: "primary",
    size: "small",
  },
});

export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  label,
  classes,
  ...props
}) => {
  return (
    <button className={clsx(classes, button({ variant, size }))} {...props}>
      {label}
    </button>
  );
};