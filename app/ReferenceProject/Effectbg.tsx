"use client"
import { useInView } from 'react-intersection-observer';
import styles from './ReferenceProject.module.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { referenceEven, referenceOdd } from '../Redux/Slice/mainPageSlice';
import { RootState } from '../Redux/store';

function Effectbg() {
   const even = useSelector((state: RootState) => state.mainPageReducer.even);
   const odd = useSelector((state: RootState) => state.mainPageReducer.odd);
   const dispatch = useDispatch();
   const {ref, inView} = useInView({
      threshold: 0.6,
      rootMargin: '10% 0% 0% 0%',
      triggerOnce: true
   });
   useEffect(() => {
      dispatch(referenceEven(inView))
      setTimeout(() => {
         dispatch(referenceOdd(inView))
      }, 300)
   }, [inView])
   return (
      <>
         <div ref={ref} style={{height: even ? '0%' : '100%', width: even ? '30.5%' : '28.3%'}} className={`${styles.reference__img__effects} ${styles.reference__img__effect1}`}></div>
         <div style={{height: odd ? '0%' : '100%', left: odd ? '27.4%' : '25.1%' }} className={`${styles.reference__img__effects} ${styles.reference__img__effect2}`}></div>
         <div style={{height: even ? '0%' : '100%', left: even ? '52.1%' : '49.9%'}} className={`${styles.reference__img__effects} ${styles.reference__img__effect3}`}></div>
         <div style={{height: odd ? '0%' : '100%', left: odd ? '76.7%' : '74.5%'}} className={`${styles.reference__img__effects} ${styles.reference__img__effect4}`}></div>
      </>
   )
}
export default Effectbg;