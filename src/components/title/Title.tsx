import React from "react";
import { clsx } from 'clsx';
import * as styles from "./Title.variants";
import { TitleProps } from "./Title.interface";

export const Title: React.FC<TitleProps> = ({
  color,
  align,
  title,
  size,
  subtitle,
  tag,
  classes,
  ...props
}) => {
  return (
    <div className={clsx(classes, styles.containerTitle({ align, color }))} {...props}>
      {tag == "h1" ?
        <h1 className={styles.titleStyles({tag})}>{title}</h1>
        :
        <h3 className={styles.titleStyles()}>{title}</h3>
      }
      {subtitle && <p className={styles.subtitleStyles({ align, size })}>{subtitle}</p>}
    </div>
  );
};