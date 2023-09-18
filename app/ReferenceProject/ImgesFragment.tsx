"use client"

import Image from "next/image";
import styles from './ReferenceProject.module.scss';
import reference from '../../public/img/ReferenceImg.png';
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { setReferenceView } from "../Redux/Slice/mainPageSlice";

function ImgesFragment() {
   const dispatch = useDispatch();
   const {ref, inView} = useInView({
      threshold: 0.01
   })
   useEffect(() => {
      dispatch(setReferenceView(inView));
   }, [inView])
   return (
      <div ref={ref} className={styles.reference__img}>
         <Image quality={100} fill={true} src={reference} alt='referenceProjects' />
      </div>
   )
}
export default ImgesFragment;