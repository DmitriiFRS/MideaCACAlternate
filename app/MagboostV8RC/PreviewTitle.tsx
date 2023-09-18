"use client"
import styles from './MagboostV8.module.scss';
import { ReactNode } from 'react';


function PreviewTitle({children}: {children: ReactNode}) {
   return (
   <div className={styles.preview}>
      {children}
   </div>
   )
}
export default PreviewTitle;