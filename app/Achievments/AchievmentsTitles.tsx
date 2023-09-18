

import styles from './Achievments.module.scss';

const list = [{
   number: '$51.16 млрд',
   subtitle: 'Общий доход'
},
{
   number: '166,000+',
   subtitle: 'Наших специалистов по всему миру'
},
{
   number: '278 место',
   subtitle: 'В списке Fortune Global 500'
},
{
   number: '200+',
   subtitle: 'Стран и регионов деятельности'
}
]

function AchievmentsTitles({isFrameInView}: {isFrameInView: boolean}) {
   return (
      <ul className={styles.achievments__list}>
         {list.map((el, index) => {
            return (
               <li key={index} className={`${styles.achievments__item} ${isFrameInView ? styles.achievments__item__active : ''}`}>
                  <p className={styles.achievments__main}>{el.number}</p>
                  <p className={styles.achievments__sub}>{el.subtitle}</p>
               </li>
            )
         })}
      </ul>
   )
}
export default AchievmentsTitles;