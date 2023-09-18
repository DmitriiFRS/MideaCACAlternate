"use client"
import { useSelector } from 'react-redux';
import styles from './Machines.module.scss';
import Image from 'next/image';
import { RootState } from '../Redux/store';
import Link from 'next/link';

type NewestMachinesPropsType = {
   deviceName: string
   image: any
   imageWidth: number
   imageHeight: number
   href: string
}

function NewestMachines({deviceName, image, imageWidth, imageHeight, href}: NewestMachinesPropsType) {
   const scrollRate = useSelector((state: RootState) => state.mainPageReducer.scrollRate);
   const isFixedEventActive = useSelector((state: RootState) => state.mainPageReducer.isFixedEventActive);
   return (
      <Link href={href} className={`${deviceName === 'Magboost' ? styles.machines__newest1 : styles.machines__newest2} ${isFixedEventActive ? styles.active : ''}`}>
         <p className={`${styles.machines__newest__title} ${deviceName === 'Magboost' ? styles.machines__newest__title1 : styles.machines__newest__title2} ${isFixedEventActive ? styles.titleActive : ''}`}>{deviceName}</p>
         <div className={styles.machines__container}>
            <Image className={styles.t} src={image} alt='magboost' width={imageWidth} height={imageHeight} />
         </div>
      </Link>
   )
}
export default NewestMachines;