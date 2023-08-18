import { SidebraProps } from './Sidebar.props';
import styles from './Sidebar.module.css';

export const Sidebar = ({ ...props }: SidebraProps) => {
  return <div {...props}>Sidebar</div>;
};
