import styles from './Footer.module.scss';
import Image from 'next/image';
import logo from '../../public/icons/midea-footer.png';

function Footer() {
   return (
      <footer className={styles.footer}>
         <div className={styles.footer__container}>
            <div className={styles.footer__logo}>
               <div className={styles.footer__logo__logo}>
                  <Image src={logo} alt='Midea' fill={true} />
               </div>
               <h3 className={styles.footer__logo__title}>Авторские права Midea, 2023 г. Все права защищены. Политика конфиденциальности</h3>
            </div>
            <div className={styles.footer__address}>
               <ul className={styles.footer__address__list}>
                  <li className={styles.footer__address__item}>Улица Карасарай дом 2 Олмазарский р-н</li>
                  <li className={styles.footer__address__item}>Улица Лабихавуз 57 Чиланзарский р-н 1 квартал</li>
                  <li className={styles.footer__address__item}>г. Ташкент, Яккасарайский р-н, ул. Шота Руставели, 81</li>
               </ul>
            </div>
            <div className={styles.footer__phones}>
               <ul className={styles.footer__phones__list}>
                  <li className={styles.footer__phones__item}>+998 (93) 111-11-11</li>
                  <li className={styles.footer__phones__item}>+998 (93) 111-11-11</li>
                  <li className={styles.footer__phones__item}>+998 (93) 111-11-11</li>
               </ul>
            </div>
            <div className={styles.footer__other}>
               <ul className={styles.footer__other__list}>
                  <li className={styles.footer__other__item}>ООО «WELKIN climate solutions» 100 115, Labihavuz street, 57, Tashkent</li>
                  <li className={styles.footer__other__item}>ИНН: 306 478 365 ОКЭД 46490</li>
                  <li className={styles.footer__other__item}>ТГФ АКБ «Капиталбанк» МФО: 00445</li>
                  <li className={styles.footer__other__item}>р/с: 2020 8000 9050 8878 0001</li>
               </ul>
            </div>
         </div>
         
      </footer>
   )
}
export default Footer;