"use client"
import styles  from '../V8/V8.module.scss';
import V8Video from '../MagboostV8RC/V8Video';
import V8Main from '../MagboostV8RC/V8Main';
import vrf1 from '../../public/gif/fonsiz_siklli0000-1000.gif';
import vrf2 from '../../public/img/Innovation/VRF-2.jpg';
import Footer from '../Footer/Footer';

const magboost = {
   video: '/video/Magboost-Main-Video.mp4',
   modelStartText: '/img/Innovation/MagboostStart.png',
   previewTitle: ['Midea MagBoost - это прорыв в системах охлаждения, который навсегда изменит ваши', 'представления о надежности и эффективности.',
   'Долговечность: Инновационные технологии и отсутствие трения увеличивают срок службы', 'оборудования и сокращают затраты на обслуживание и ремонт.',
   'Эффективность: Высокая энергоэффективность снижает потребление энергии, позволяя', 'экономить средства.',
   'Компактность: Усовершенствованная конструкция чиллеров и теплообменника обеспечивает', 'их удобное и компактное размещение.',
   'Минимальный шум: благодаря электромагнитной технологии снижается уровень шума.'],
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

function VRFv8Page() {
return (
   <section className={styles.vrf}>
      <V8Video video={magboost.video} modelStartText={magboost.modelStartText} />
      <V8Main previewTitle={magboost.previewTitle} imageTitleBlock={magboost.imageTitleBlock} />
      <Footer />
   </section>
)
}
export default VRFv8Page;