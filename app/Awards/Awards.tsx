"use client"
import styles from './Awards.module.scss';
import Image from 'next/image';
import ahri from '../../public/icons/AwardsIcons/AHRI.png';
import iso from '../../public/icons/AwardsIcons/ISO.png';
import eurovent from '../../public/icons/AwardsIcons/EUROVENT.png';
import gold2022 from '../../public/icons/AwardsIcons/GOLD 2022.png';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import { setAwardsView } from '../Redux/Slice/mainPageSlice';


function Awards() {
   const isAwardsView = useSelector((state: RootState) => state.mainPageReducer.isAwardsView);
   const dispatch = useDispatch()
   const {ref, inView} = useInView({
      threshold: 0.01
   })
   useEffect(() => {
      dispatch(setAwardsView(inView))
   }, [inView])
return (
   <section ref={ref} className={styles.awards}>
      <h2 className={styles.awards__title}>Награды и сертификаты</h2>
      <div className={styles.awards__iconsBody}>
         <Image src={ahri} alt='logo' />
         <Image src={iso} alt='logo' />
         <Image src={eurovent} alt='logo' />
         <Image src={gold2022} alt='logo' />
         <Image src={eurovent} alt='logo' />
      </div>
   </section>
)
}
export default Awards;