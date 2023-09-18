"use client"
import { useInView } from 'react-intersection-observer';
import styles from './MagboostV8.module.scss';
import { useEffect, useState } from 'react';
import Image from 'next/image';
type TitleListTypeProps = {
   description: Array<string>
   icons: Array<string>
}
function TitleList({description, icons} : TitleListTypeProps) {
   const {ref, inView} = useInView({
      threshold: [0, 0],
      rootMargin: '20% 0% 0% 0%'
   })
   const [isView, setIsView] = useState<boolean>(false);
   useEffect(() => {
      setIsView(inView);
   }, [inView])
   return (
      <ul ref={ref} className={styles.title__list}>
         <li className={`${styles.title__item} ${styles.title__item__el1} ${isView ? styles.title__item__active : ''}`}>
            <Image src={icons[0]} alt='' width={30} height={30}></Image>
            <p className={styles.title__description}>{description[0]}</p>
         </li>
         <li className={`${styles.title__item} ${styles.title__item__el2} ${isView ? styles.title__item__active : ''}`}>
            <Image src={icons[1]} alt='' width={30} height={30}></Image>
            <p className={styles.title__description}>{description[1]}</p>
         </li>
         <li className={`${styles.title__item} ${styles.title__item__el3} ${isView ? styles.title__item__active : ''}`}>
            <Image src={icons[2]} alt='' width={30} height={30}></Image>
            <p className={styles.title__description}>{description[2]}</p>
         </li>
         <li className={`${styles.title__item} ${styles.title__item__el4} ${isView ? styles.title__item__active : ''}`}>
            <Image src={icons[3]} alt='' width={30} height={30}></Image>
            <p className={styles.title__description}>{description[3]}</p>
         </li>
      </ul>
   )
}
export default TitleList;