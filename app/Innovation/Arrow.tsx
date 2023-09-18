"use client"
import styles from './Innovation.module.scss';

function Arrow() {
return (
   <div className={`${styles.arrows__body}`}>
      <div className={styles.arrows__sliding}>
         <div className={styles.arrows__arrow}></div>
      </div>
      <div className={`${styles.arrows__sliding} ${styles.arrows__delay1}`}>
         <div className={styles.arrows__arrow}></div>
      </div>
      <div className={`${styles.arrows__sliding} ${styles.arrows__delay2}`}>
         <div className={styles.arrows__arrow}></div>
      </div>
      <div className={`${styles.arrows__sliding} ${styles.arrows__delay3}`}>
         <div className={styles.arrows__arrow}></div>
      </div>
   </div>
   
)
}
export default Arrow;