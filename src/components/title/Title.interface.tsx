export interface TitleProps {
  /**
   * Title content
   */
  title: string;
  /**
   * Optional subtitle content
   */
  subtitle?: string;
  /**
   * Which color should the text be?
   */
  color?: 'primary' | 'secondary';
  /**
   * Which align should the text be?
   */
  align?: 'left' | 'center';
  /**
   * The title should be a H1 tag?
   */
  tag?: 'h1' | 'h3';
  /**
   * How large should the subtitle be?
   */
  size?: 'medium' | 'big';
  /**
   * Optional additional classes
   */
  classes?: {}[] | string;
};