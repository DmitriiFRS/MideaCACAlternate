"use client"

import { useSelector } from 'react-redux';
import styles from './Innovation.module.scss'
import { RootState } from '../Redux/store';

function Titles() {
   const isFixedEventActive = useSelector((state: RootState) => state.mainPageReducer.isFixedEventActive);
   const scrollRate = useSelector((state: RootState) => state.mainPageReducer.scrollRate);
   return (
      scrollRate && 
      <section className={`${styles.titles} ${isFixedEventActive || scrollRate > 30 ? styles.titles__unactive : ''}`}>
         <p style={{width: scrollRate < 17.5 ? '0%' : '100%'}} className={styles.textLine}>17 научно-исследовательских центров Midea играют определяющую</p>
         <p style={{width: scrollRate < 18.7 ? '0%' : '100%'}} className={styles.textLine}>роль в способности компании предлагать клиентам передовые,</p>
         <p style={{width: scrollRate < 19.9 ? '0%' : '100%'}} className={styles.textLine}>энергоэффективные и надежные климатические системы</p>
         <p style={{width: scrollRate < 21.1 ? '0%' : '100%'}} className={styles.textLine}>и оборудование.</p>
         <p style={{width: scrollRate < 22.3 ? '0%' : '100%'}} className={styles.textLine}>Благодаря инвестициям в инновации Midea остается в авангарде</p>
         <p style={{width: scrollRate < 23.5 ? '0%' : '100%'}} className={styles.textLine}>технологий ОВКВ и предоставляет своим клиентам абсолютно</p>
         <p style={{width: scrollRate < 24.7 ? '0%' : '100%'}} className={styles.textLine}>революционные разработки в области изготовления чиллеров</p>
         <p style={{width: scrollRate < 25.9 ? '0%' : '100%'}} className={styles.textLine}>и систем VRF.</p>
      </section>
   )
}
export default Titles;

/* 17 научно-исследовательских центров Midea играют определяющую роль в способности компании предлагать клиентам передовые, энергоэффективные и надежные
 климатические системы и оборудование. Благодаря инвестициям в инновации Midea остается в авангарде технологий ОВКВ и предоставляет своим клиентам абсолютно революционные разработки
в области изготовления чиллеров и систем VRF. */