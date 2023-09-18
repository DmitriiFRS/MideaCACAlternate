import styles from './Header.module.scss';
import Image from 'next/image';
import MideaLogo from '../../public/icons/MainLogo.png'
import Link from 'next/link';

function Header() {
   return (
   <header className={styles.header}>
      <Link href={'/'}>
         <Image src={MideaLogo} alt='Midea-CAC logo' width={256} height={90} priority={true} />
      </Link>
   </header>
   )
}
export default Header;