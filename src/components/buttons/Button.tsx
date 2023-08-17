import React from "react";
import { clsx } from 'clsx';
import * as styles from "./Button.variants";
import { ButtonProps } from "./Button.interface";

export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  label,
  classes,
  ...props
}) => {
  return (
    <button className={clsx(classes, styles.button({ variant, size }))} {...props}>
      {label}
    </button>
  );
};