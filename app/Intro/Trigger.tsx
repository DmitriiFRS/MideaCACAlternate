"use client"
import { useInView } from 'react-intersection-observer';
import styles from './Intro.module.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import { setSidemenuVisible } from '../Redux/Slice/mainPageSlice';
function Trigger() {
   const dispatch = useDispatch();
   const isSidemenuVisible = useSelector((state: RootState) => state.mainPageReducer.isSidemenuVisible);
   const {ref, inView} = useInView({
      threshold: 0.05
   })
   useEffect(() => {
      console.log(isSidemenuVisible)
   }, [isSidemenuVisible])
   useEffect(() => {
      dispatch(setSidemenuVisible(inView))
   }, [inView])
return (
   <div ref={ref} className={styles.intro__trigger}></div>
)
}
export default Trigger;