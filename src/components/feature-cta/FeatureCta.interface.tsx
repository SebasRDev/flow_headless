export interface FeatureCtaProps {
  /**
   * Title content
   */
  title: string;
  /**
   * Description content
   */
  description: string;
  /**
   * Object with link to redirect
   */
  link: { text: string, url: string, alt?:string};
  /**
   * Object with the image URLs for desktop and mobile
   */
  images: { desktop: string, mobile: string};
  /**
   * Which border color should be?
   */
  border?: 'none' | 'blue' | 'white';
  /**
   * Which color should the text be?
   */
  textColor?: 'blue' | 'white';
  /**
   * Which alignment should the text be?
   */
  alignmentText?: 'left' | 'center';
  /**
   * Optional additional classes
   */
  classes?: {}[] | string;
};