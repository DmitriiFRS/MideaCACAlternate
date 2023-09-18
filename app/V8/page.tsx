import V8Main from '../MagboostV8RC/V8Main';
import V8Video from '../MagboostV8RC/V8Video';
import styles from './V8.module.scss';
import vrf1 from '../../public/gif/fonsiz_siklli0000-1000.gif';
import vrf2 from '../../public/img/Innovation/VRF-2.jpg';
import Footer from '../Footer/Footer';

const v8 = {
   video: '/video/V8-Main-Video.mp4',
   modelStartText: '/img/Innovation/v8Text2.png',
   previewTitle: ['Мы не ограничиваемся просто созданием продукта. Мы стремимся к совершенству, и наша', 'новейшая серия - Midea V8 VRF - это воплощение этой философии.',
   'Она объединяет не только ключевые инновации VRF технологий, но и дополняет их', 'передовыми усовершенствованиями, отвечающими потребностям клиентов и вызовам нашего времени.',
   'Наши инженеры и исследователи уделяли внимание каждой детали, чтобы Midea V8 VRF стала', 'идеальным сочетанием функциональности и элегантности.',
   'Это не просто система - это опыт, который добавит', 'качества в вашу жизнь.'],
   imageTitleBlock: [{
      image: vrf1,
      title: 'Магнитный подшипник с пространственно-векторным управлением',
      description: ['Меньше трения', 'Меньше износа', 'Высокая точность', 'Большая стабильность'],
      icons: ['/icons/MagboostV8/icon12.png', '/icons/MagboostV8/icon4.png', '/icons/MagboostV8/icon13.png', '/icons/MagboostV8/icon14.png'],
   },
   {
      image: vrf2,
      title: 'Компрессор Back-to-Back с магнитной подвеской вала',
      description: ['Меньше трения', 'Отсутствие масла', 'Уменьшение уровня шума', 'Минимальная вибрация'],
      icons: ['/icons/MagboostV8/icon1.png', '/icons/MagboostV8/icon2.png', '/icons/MagboostV8/icon3.png', '/icons/MagboostV8/icon4.png'],
   }]
}

function V8Magboost() {
   return (
      <section className={styles.v8}>
         <V8Video video={v8.video} modelStartText={v8.modelStartText} />
         <V8Main previewTitle={v8.previewTitle} imageTitleBlock={v8.imageTitleBlock} />
         <Footer />
      </section>
   )
}
export default V8Magboost;