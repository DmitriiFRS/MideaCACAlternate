"use client"

import { ReactNode, useEffect, useState } from 'react';
import styles from './page.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from './Redux/store';

function SmartScrollWrapper({children}: {children: ReactNode}) {
   const [classListMount, setClassListMount] = useState<boolean>(false)
   const isAwardsView = useSelector((state: RootState) => state.mainPageReducer.isAwardsView);
   const isReferenceView = useSelector((state: RootState) => state.mainPageReducer.isReferenceView);
   useEffect(() => {
      setClassListMount(true)
      document.body.style.overflow = 'hidden';
      return () => {
         setClassListMount(false)
         document.body.style.overflow = 'auto';
      }
   }, [])
   return (
      <div style={{scrollSnapType: !isAwardsView && !isReferenceView ? 'y mandatory' : 'none'}} className={classListMount ? styles.scrollWrapper : ''}>
         {children}
      </div>
   )
}
export default SmartScrollWrapper;