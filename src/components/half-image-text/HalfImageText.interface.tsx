export interface HalfImageTextProps {
  /**
   * Title content
   */
  title: string;
  /**
   * Description content
   */
  description: string;
  /**
   * Object with the image URL 
   */
  image: { url: string, alt:string};
  /**
   * Object with link to redirect
   */
  link?: { text: string, url: string};
  /**
   * Which alignment should the image be?
   */
  alignmentImage?: 'left' | 'right';
  /**
   * Optional additional classes
   */
  classes?: {}[] | string;
};