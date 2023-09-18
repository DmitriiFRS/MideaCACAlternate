"use client"

import Arrow from './Arrow';
import styles from './Innovation.module.scss';

function Arrows() {
   return (
      <div className={styles.arrows}>
         <Arrow/>
         <Arrow/>
      </div>
   )
}
export default Arrows;