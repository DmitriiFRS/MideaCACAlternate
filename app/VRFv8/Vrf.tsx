import styles from './Vrf.module.scss';
import Image from 'next/image';
import pulse from '../../public/icons/pulse-img.png';
import Link from 'next/link';

type VrfPropsType = {
   imageFullScreen: any
   title: string
   href: string
}

function Vrf({imageFullScreen, title, href}: VrfPropsType) {
   return (
      <section className={styles.vrf}>
         <Link href={href} className={styles.vrf__imgContainer}>
            <div className={styles.vrf__titleContainer}>
               <h2 className={styles.vrf__title}>{title}</h2>
               <Image className={styles.vrf__pulseIcon} src={pulse} alt='pulse' width={92} height={92} />
            </div>
            <Image src={imageFullScreen} alt='VRF-V8' fill={true} quality={100} style={{objectFit: 'cover', objectPosition: 'top'}} />
         </Link>
      </section>
   )
}
export default Vrf;