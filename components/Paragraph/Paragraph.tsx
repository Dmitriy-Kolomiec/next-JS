import { ParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.css';
import classNames from 'classnames';

export const Paragraph = ({ children, fontSize, className, ...props }: ParagraphProps): JSX.Element => {
  return (
    <p
      className={classNames([styles.paragraph, className], {
        [styles.medium]: fontSize === 'medium',
        [styles.large]: fontSize === 'large',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
