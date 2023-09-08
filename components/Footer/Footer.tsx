import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import classNames from 'classnames';
import { format } from 'date-fns';
import Link from 'next/link';

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={classNames([styles.footer, className])} {...props}>
      <div>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
      <Link href="/">Пользовательское соглашение</Link>
      <Link href="/">Политика конфиденциальности</Link>
    </footer>
  );
};


