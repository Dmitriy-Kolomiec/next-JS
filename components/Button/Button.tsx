import classNames from 'classnames';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import Arrow from './arrow.svg'

export const Button = ({ children, arrow = 'none', appearance, className, ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      className={classNames([styles.button, className], {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
      })}
      {...props}
    >
      {children}
      {arrow !== 'none' && (
        <span
          className={classNames([styles.arrow], {
            [styles.down]: arrow === 'down',
            [styles.right]: arrow === 'right',
          })}
        >
          <Arrow/>
        </span>
      )}
    </button>
  );
};
