import { useInView } from 'react-intersection-observer';
import styles from './Machines.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import { useEffect } from 'react';
import { changeEventStatus } from '../Redux/Slice/mainPageSlice';

function Trigger() {
   const dispatch = useDispatch();
   const {ref, inView} = useInView({
      threshold: 0
   })
   useEffect(() => {
      dispatch(changeEventStatus(inView))
   }, [inView])
return <div ref={ref} className={styles.machines__trigger}></div>
}
export default Trigger;