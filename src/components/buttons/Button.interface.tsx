export interface ButtonProps {
  /**
   * Which variant should the button be?
   */
  variant?: 'primary' | 'secondary';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'big';
  /**
   * Button contents
   */
  label?: string;
  /**
   * Optional additional button classes
   */
  classes?: {}[] | string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
};