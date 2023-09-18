"use client"

import { useDispatch, useSelector } from 'react-redux';
import styles from '../SideMenu.module.scss';
import { RootState } from '@/app/Redux/store';
import Image from 'next/image';
import Link from 'next/link';
import { isTransitionAside, toggleSidebar, transformWindow } from '@/app/Redux/Slice/asideMenuSlice';

function SubMenu() {
   const dispatch = useDispatch();
   const transform = useSelector((state: RootState) => state.asideReducer.translateWindow);
   const activeSubMenu = useSelector((state: RootState) => state.asideReducer.subMenuActive);
   const isToggle = useSelector((state: RootState) => state.asideReducer.isToggleSubmenu);
   function closeSideMenu() {
      if (transform === 'translateX(-110%)') return
      dispatch(transformWindow('translateX(-110%)'));
      dispatch(isTransitionAside(false));

      setTimeout(() => {
         dispatch(toggleSidebar(false))
         document.body.style.paddingRight = '0px';
      },900)
   }
   return (
      <nav className={styles.sidebar__subMenu}>
         <ul style={{transform: isToggle ? 'translateX(-100%)' : 'translateX(0%)'}} className={styles.sidebar__subMenu__list}>
            {activeSubMenu.map((el, index) => {
               return (
                  <Link onClick={closeSideMenu} href={el.href ? el.href : '/'} className={styles.sidebar__subMenu__item} key={index}>
                     <p className={styles.sidebar__subMenu__title}>{el.title}</p>
                     {el.id === 0 ?
                     <div className={styles.sidebar__subMenu__img}>
                     <Image src={el.img} alt={el.title} fill={true} />
                     </div> : ''}   
                  </Link>
               )
            })}
         </ul>
      </nav>
   )
}
export default SubMenu;