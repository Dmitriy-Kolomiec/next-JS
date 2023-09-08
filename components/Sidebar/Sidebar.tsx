'use client'
import { SidebraProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import { createContext } from 'react';

const SidebarContext = createContext({});

export const Sidebar = ({ ...props }: SidebraProps) => {
  return (
    <SidebarContext.Provider value={{}}>
      <div {...props}>Sidebar</div>;
    </SidebarContext.Provider>
  );
};
