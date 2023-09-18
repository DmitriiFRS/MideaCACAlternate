"use client"

import { useSelector } from 'react-redux';
import StartEffect from './StartEffect';
import styles from './MagboostV8.module.scss';
import { RootState } from '@/app/Redux/store';

type VideoComponentType = {
   video: string
   modelStartText: string
}

function V8Video({video, modelStartText}: VideoComponentType) {
   const scrollPosition = useSelector((state: RootState) => state.innovationsReducer.scrollRate);
   return (
      <div className={styles.vrf__container}>
         <StartEffect modelStartText={modelStartText} />
         <video style={{position: scrollPosition < 15.5 ? 'fixed' : 'absolute', top: scrollPosition < 15.5 ? '0' : '94vh'}} className={styles.vrf__videoContainer} autoPlay muted loop>
            <source className={styles.video} src={video} type='video/mp4' />
         </video>
      </div>
      
   )
}
export default V8Video;