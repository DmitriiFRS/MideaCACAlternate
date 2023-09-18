"use client"
import { useDispatch, useSelector } from 'react-redux';
import styles from './SideMenu.module.scss';
import { isTransitionAside, setActiveMenuItem, setActiveSubMenu, toggleSidebar, transformWindow } from '../Redux/Slice/asideMenuSlice';
import { RootState } from '../Redux/store';
import Image from 'next/image';
import icon1 from '../../public/icons/Sidemenu/sideIcon1.svg';
import icon2 from '../../public/icons/Sidemenu/sideIcon2.svg';
import icon3 from '../../public/icons/Sidemenu/sideIcon3.svg';
import icon4 from '../../public/icons/Sidemenu/sideIcon4.svg';
import icon5 from '../../public/icons/Sidemenu/sideIcon5.svg';
import icon6 from '../../public/icons/Sidemenu/sideIcon6.svg';
import { useEffect, useState } from 'react';
const btnSections = [{
   id: 1,
   icon: icon1,
   transitiodDelay: '0s'
},
{
   id: 2,
   icon: icon2,
   transitiodDelay: '0.1s'
},
{
   id: 3,
   icon: icon3,
   transitiodDelay: '0.2s'
},
{
   id: 4,
   icon: icon4,
   transitiodDelay: '0.3s'
},
{
   id: 5,
   icon: icon5,
   transitiodDelay: '0.4s'
}
   ]

function AsideButton() {
   const dispatch = useDispatch();
   const mainMenuList = useSelector((state: RootState) => state.asideReducer.mainMenuList);
   const isSidemenuVisible = useSelector((state: RootState) => state.mainPageReducer.isSidemenuVisible);
   const [scrollWidth, setScrollWidth] = useState<null | number>(null);
   useEffect(() => {
      setScrollWidth(window.innerWidth - document.body.clientWidth)
   }, [])
   function openSideMenu() {
      dispatch(toggleSidebar(true));
      
      setTimeout(() => {
         dispatch(transformWindow('translateX(0%)'));
         dispatch(isTransitionAside(true));
      })
   }
   function changeMenuItem (index: number) {
      const newMenu = mainMenuList.map((el, idx) => {
         if (index === idx) return {...el, isActive: true}
         else return {...el, isActive: false}
      })
      dispatch(setActiveMenuItem(newMenu))
      dispatch(setActiveSubMenu(index))
   }
   return (
   <button onClick={openSideMenu} className={styles.aside__openBtn}>
      {btnSections.map((el, index) => {
         return (
            <li style={{opacity: isSidemenuVisible ? 0 : 0.5, transform: isSidemenuVisible ? 'translateX(-80%)' : 'translateX(0%)', transitionDelay: el.transitiodDelay}} 
            onClick={() => changeMenuItem(index)} key={index} className={styles.aside__btnBlock}>
               <div className={styles.aside__iconBody}>
                  <Image src={el.icon} alt='icon' />
               </div>
            </li>
         )
      })}
   </button>
   )
}
export default AsideButton;