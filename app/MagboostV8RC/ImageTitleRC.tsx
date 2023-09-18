"use client"

import { useInView } from 'react-intersection-observer';
import styles from './MagboostV8.module.scss';
import Image from 'next/image';
import { useEffect } from 'react';
import TitleList from './TitleList';

export type ImageTitleProps = {
   image: any
   title: string
   description: Array<string>
   icons: Array<string>
   orders: Array<string>
   isView: boolean
   setIsView: Function
}

function ImageTitleRC({ image, description, icons, title, orders, isView, setIsView}: ImageTitleProps) {
   const {ref, inView} = useInView({
      threshold: [0, 0],
   })
   useEffect(() => {
      setIsView(inView)
   },[inView])
   return (
      <div ref={ref} className={styles.imageTitle}>
         <div style={{order: orders[0]}} className={`${styles.image__container} ${isView ? styles.image__container__active : ''}`}>
            <Image quality={100} src={image} alt='1' fill={true}/>
         </div>
         <div style={{order: orders[1]}} className={styles.title}>
            <div className={styles.title__mainTitleBody}>
               <h3 className={`${styles.title__mainTitle} ${isView ? styles.title__mainTitle__active : ''}`}>{title}</h3>
            </div>
            <TitleList description={description} icons={icons} />
         </div>
      </div>
   )
}
export default ImageTitleRC;