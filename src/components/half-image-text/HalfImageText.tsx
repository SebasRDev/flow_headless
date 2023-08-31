import React from "react";
import { clsx } from 'clsx';
import { Button } from "..";
import * as styles from "./HalfImageText.variants";
import { HalfImageTextProps } from "./HalfImageText.interface";

export const HalfImageText: React.FC<HalfImageTextProps> = ({
  title,
  description,
  link,
  image,
  alignmentImage,
  classes,
  ...props
}) => {
  return (
    <div className={clsx(classes, styles.container())} {...props}>
      <img src={image.url} alt={image.alt} className={styles.image()}/>
      <div className={styles.content({alignmentImage})}>
        <div className={styles.title()}>
          {title}
        </div>
        <p className={styles.description()}>
          {description}
        </p>
        {link &&
          <p className={styles.bottom()}>
            <Button
              label={link?.text}
              variant="secondary"
              classes={styles.button()}
            />
          </p>
        }
      </div>
    </div>
  );
};
