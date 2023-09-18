"use client"
import { useSelector } from 'react-redux';
import styles from './SideMenu.module.scss';
import { RootState } from '../Redux/store';
import AsideButton from './AsideButton';
import Sidebar from './Sidebar';

function SideMenu() {
   const isSidebarOpen = useSelector((state: RootState) => state.asideReducer.isSidebarOpen);
return (
   <section className={styles.aside}>
      {isSidebarOpen ? <Sidebar /> : !isSidebarOpen ? <AsideButton /> : ''} 
   </section>
)
}
export default SideMenu;