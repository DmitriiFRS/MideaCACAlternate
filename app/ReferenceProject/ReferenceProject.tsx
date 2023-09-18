import styles from './ReferenceProject.module.scss';
import Effectbg from './Effectbg';
import ImgesFragment from './ImgesFragment';

function ReferenceProject() {
   return (
   <section className={styles.reference}>
      <h2 className={styles.reference__title}>Референтный проект</h2>
      <div className={styles.reference__imgBody}>
         <ImgesFragment />
         <Effectbg />
      </div>
   </section>
   )
}
export default ReferenceProject;