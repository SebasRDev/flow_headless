import Link from 'next/link'

interface LinkProps{
  /**
   * Which size should the link be?
   */
  size?: 'small' | 'big';
  /**
   * Which font weight should the link have?
   */
  weight?: 'regular' | 'medium' | 'bold',
  /**
   * Link URL
   */
  link: string,
  /**
   * Link contents 
   */
  label: string,
  /**
   * Link Adorment
   */
  endAdorment?: string,
};

export const CustomLink = ({
  size = "small",
  weight = 'regular',
  link,
  label,
  endAdorment,
}: LinkProps) => {

  const lSize = size === 'small' ? 'text-lg leading-7' : 'text-2xl leading-9';
  let lWeigth;
  switch (weight) {
    case 'regular':
      lWeigth = 'font-normal'
      break;
    case 'medium':
      lWeigth = 'font-medium'
      break;
    case 'bold':
      lWeigth = 'font-bold'
      break;
  
    default:
      break;
  }

  return (
    <Link href={link} className={`text-primary-500 ${lSize} ${lWeigth}`}>
      {label} {endAdorment}
    </Link>
  )
}