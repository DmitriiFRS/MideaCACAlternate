import styles from './Intro.module.scss';
import Trigger from './Trigger';
import Video from './Video/Video';

function Intro() {
   return (
   <section className={styles.intro}>
      <Video />
      <Trigger />
   </section>
   )
}
export default Intro;