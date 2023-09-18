"use client"
import styles from './Innovation.module.scss';
import Image from 'next/image';
import imagebg from '../../public/img/Innovation/innovation_bg.png'
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const list = [{
   number: '0%',
   subtitle: 'Количество брака',
   number2: '17',
   subtitle2: 'Научно-исследовательских центров'
},
{
   number: '20,000+',
   subtitle: 'Экспертов НИЦ',
   number2: '$4.05 млрд',
   subtitle2: 'Инвестиций за последние 5 лет'
},
]

function Innovation() {
   const [isFrameInView, setFrameView] = useState<boolean>(false);
   const {ref, inView} = useInView({
      threshold: 1,
      delay: isFrameInView ? 2000 : 0
   });
   useEffect(() => {
      setFrameView(inView)
   }, [inView])
return (
   <section ref={ref} className={styles.innovation}>
      <div className={styles.innovation__img}>
            <Image src={imagebg} alt='bg' fill={true} />
      </div>
         <h2 className={`${styles.innovation__title} ${isFrameInView ? styles.innovation__title__active : ''}`}>Innovations and technologies</h2>
      <nav className={styles.innovation__nav}>
         <ul className={styles.innovation__list}>
            {list.map((el, index) => {
               return (
                  <li style={{opacity: isFrameInView ? 1 : 0}} key={index} className={styles.innovation__item}>
                     <div className={styles.innovation__titleBlock}>
                        <p className={styles.innovation__titleElem}>{el.number}</p>
                        <p className={styles.innovation__subElem}>{el.subtitle}</p>
                     </div>
                     <div className={styles.innovation__titleBlock}>
                        <p className={styles.innovation__titleElem}>{el.number2}</p>
                        <p className={styles.innovation__subElem}>{el.subtitle2}</p>
                     </div>
                  </li>
               )
            })}
         </ul>
      </nav>
   </section>
)
}
export default Innovation;