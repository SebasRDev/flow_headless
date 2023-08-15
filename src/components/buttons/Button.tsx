interface ButtonProps {
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
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Button = ({
  variant = 'primary',
  size = 'small',
  label,
  ...props
}: ButtonProps) => {
  let bVariant, bSize;
  switch (variant) {
    case 'primary':
      bVariant = "bg-primary-500 color-white"
      break;
    case 'secondary':
      bVariant = "text-primary-500 border-2 border-primary-500"
      break;
  
    default:
      break;
  }
  switch (size) {
    case 'big':
      bSize = "py-4 px-8 text-base leading-5"
      break;
    case 'small':
      bSize = "py-2 px-4 text-sm leading-[18px]"
      break;
  
    default:
      break;
  }

  return(
    <button type="button" className={[bVariant, bSize, 'font-bold rounded-lg'].join(' ')}>
      {label}
    </button>
  )
}