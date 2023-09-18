"use client"
import { useEffect } from 'react';
import styles from './Innovation.module.scss';
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import { changeEventStatus } from '../Redux/Slice/mainPageSlice';

function TriggerFixEvent() {
   const dispatch = useDispatch();
   const {ref, inView} = useInView({
      threshold: 0
   })
   useEffect(() => {
      dispatch(changeEventStatus(inView));
   }, [inView])
   return (
   <div ref={ref} className={styles.trigger}></div>
   )
}
export default TriggerFixEvent;