import styles from '../Intro.module.scss';
function Video() {
   return (
      <video className={styles.video__container} autoPlay muted loop>
         <source className={styles.video} src='/video/Intro.mp4' type='video/mp4' />
      </video>
   )
}
export default Video;