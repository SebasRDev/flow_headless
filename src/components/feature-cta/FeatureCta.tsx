import React from "react";
import { clsx } from 'clsx';
import { Button } from "..";
import * as styles from "./FeatureCta.variants";
import { FeatureCtaProps } from "./FeatureCta.interface";

export const FeatureCta: React.FC<FeatureCtaProps> = ({
  title,
  description,
  link,
  images,
  border,
  textColor,
  alignmentText,
  classes,
  ...props
}) => {
  return (
    <div className={clsx(classes, styles.containerCta({ border, textColor }))} {...props}>
      <img className={styles.imageStyles()} src={images.desktop}/>
      <div className={styles.contentStyles({alignmentText})}>
        <h3 className={styles.titleStyles()}>
          {title}
        </h3>
        <p className={styles.descriptionStyles()}>
          {description}
        </p>
        <div className={styles.bottomStyles()}>
          <Button
            label={link.text}
            variant="secondary"
            classes={styles.buttonStyles({textColor})}
          />
        </div>
      </div>
    </div>
  );
};