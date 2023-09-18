"use client"

import { useEffect } from 'react';
import styles from './MagboostV8.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/Redux/store';
import { scrollPosition } from '@/app/Redux/Slice/innovationsSlice';
import Image from 'next/image';

type StartEffectPropsType = {
   modelStartText: string
}

function StartEffect({modelStartText}: StartEffectPropsType) {
   const dispatch = useDispatch();
   const scrollRate = useSelector((state: RootState) => state.innovationsReducer.scrollRate);
   useEffect(() => {
      function handleScroll() {
         const scrollPercentage = (window.pageYOffset / (document.body.scrollHeight - window.innerHeight) * 100)
         if (scrollPercentage < 1) dispatch(scrollPosition(1));
         else
         dispatch(scrollPosition(scrollPercentage / 2));
      }
      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }

   })
   return (
      <div style={{opacity: `${scrollRate > 5 ? 1 - scrollRate / 10 : 1}`, display: scrollRate > 12 ? 'none' : 'flex'}} className={styles.effect}>
         <div style={{transform: `scale(${scrollRate < 1 ? 1 : scrollRate})`}} className={styles.effect__magboostContainer}>
            <Image src={modelStartText} alt='Magboost' fill={true}></Image>
         </div>
         <h3 style={{transform: `scale(${scrollRate < 1 ? 1 : (scrollRate + 10) / 10})`}} className={styles.effect__bgTitle}>Legendary</h3>
      </div>
   )
}
export default StartEffect;