"use client"

import styles from './Achievments.module.scss';
import '../globals.css'
import Image from 'next/image';
import imagebg from '../../public/img/second/second_framebg.png';
import AchievmentsTitles from './AchievmentsTitles';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
const list = [{
   number: '$51.16 млрд',
   subtitle: 'Общий доход'
},
{
   number: '166,000+',
   subtitle: 'Наших специалистов по всему миру'
},
{
   number: '278 место',
   subtitle: 'В списке Fortune Global 500'
},
{
   number: '200+',
   subtitle: 'Стран и регионов деятельности'
}
]

function Navigation() {
   const [isFrameInView, setFrameView] = useState<boolean>(false);
   const {ref, inView} = useInView({
      threshold: 1,
      delay: isFrameInView ? 2000 : 0
   });
   useEffect(() => {
      setFrameView(inView)
   }, [inView])
   return (
      <section ref={ref} className={styles.achievments}>
         <div className={styles.achievments__img}>
            <Image src={imagebg} alt='bg' fill={true} />
         </div>
         <nav className={`${styles.achievments__nav} container`}>
            <AchievmentsTitles isFrameInView={isFrameInView} />
         </nav>
      </section>
   )
}
export default Navigation;