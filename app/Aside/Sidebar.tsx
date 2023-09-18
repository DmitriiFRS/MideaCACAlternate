"use client"
import styles from './SideMenu.module.scss';
import Image from 'next/image';
import close from '../../public/icons/Close-sidebar.svg';
import { useDispatch, useSelector } from 'react-redux';
import { isTransitionAside, toggleSidebar, transformWindow } from '../Redux/Slice/asideMenuSlice';
import { RootState } from '../Redux/store';
import Menus from './AsideMenus/Menus';

function Sidebar() {
   const transform = useSelector((state: RootState) => state.asideReducer.translateWindow);
   const isTransition = useSelector((state: RootState) => state.asideReducer.isTransition);
   const dispatch = useDispatch()
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
      <section style={isTransition ? {backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)'}
      : {backgroundColor: '', backdropFilter: ''}} onClick={closeSideMenu} className={styles.sidebar}>
         <div style={{transform: `${transform}`}} onClick={(e) => e.stopPropagation()} className={styles.sidebar__body}>
            <Menus />
            <button onClick={closeSideMenu} className={styles.sidebar__close}>
               <Image style={{color: 'white'}} src={close} width={23} height={23} alt='close'></Image>
            </button>
         </div>
      </section>
   )
}
export default Sidebar;