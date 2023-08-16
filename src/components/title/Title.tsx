import React from "react";
import { clsx } from 'clsx';
import { containerTitle, titleStyles, subtitleStyles } from "./Title.variants";
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
    <div className={clsx(classes, containerTitle({ align, color }))} {...props}>
      {tag == "h1" ?
        <h1 className={titleStyles({tag})}>{title}</h1>
        :
        <h3 className={titleStyles()}>{title}</h3>
      }
      <p className={subtitleStyles({ align, size })}>{subtitle}</p>
    </div>
  );
};