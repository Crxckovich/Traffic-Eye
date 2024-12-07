import { HtagProps } from './Htag.props';
import styles from './Htag.module.css';

export const Htag = ({ tag, children, className }: HtagProps): JSX.Element => {
  const combinedClassName = `${styles[tag]} ${className || ''}`.trim();

  switch (tag) {
    case 'h1':
      return <h1 className={combinedClassName}>{children}</h1>;
    case 'h2':
      return <h2 className={combinedClassName}>{children}</h2>;
    case 'h3':
      return <h3 className={combinedClassName}>{children}</h3>;
    default:
      return <></>;
  }
};