"use client"

import styles from './Machines.module.scss';
import magboost from '../../public/img/Innovation/magboost.png';
import v8 from '../../public/img/Innovation/v8.png';
import Image from 'next/image';
import shadowbg from '../../public/img/Innovation/shadow_bg.jpg';
import { useState } from 'react';

const machineSettings = [{
   magboost: {
      width: '40%',
      height: '40%',
      left: '31.5%',
      transform: 'scale(1)',
      filter: 'blur(0)'
   },
   v8: {
      width: '38%',
      height: '55%',
      right: '5%',
      transform: 'scale(0.45)',
      filter: 'blur(1rem)'
   }
},
{
   magboost: {
      width: '40%',
      height: '40%',
      left: '5%',
      transform: 'scale(0.45)',
      filter: 'blur(1rem)'
   },
   v8: {
      width: '38%',
      height: '55%',
      right: '29%',
      transform: 'scale(1)',
      filter: 'blur(0)'
   }
}]

function Machines() {
   const [toggleMachine, setToggleMachine] = useState<boolean>(false);
return (
   <section className={styles.machines}>
      <div className={styles.machines__shadow}>
         <Image src={shadowbg} alt='' fill={true}></Image>
      </div>
      <div className={styles.machines__titles}>
         <p style={{transform: toggleMachine  ? 'translateX(-25vw)' : 'translateX(0)', opacity: toggleMachine ? 0 : 1}} className={styles.machines__title1}>Magboost</p>
         <p style={{transform: toggleMachine ? 'translateX(-7.5vw)' : 'translateX(15vw)', opacity: toggleMachine ? 1 : 0}} className={styles.machines__title2}>V8</p>
      </div>
      <div onClick={() => {setToggleMachine(false)}} style={toggleMachine ? machineSettings[1].magboost : machineSettings[0].magboost} className={styles.machines__magboost}>
         <Image src={magboost} alt='magboost' fill={true}></Image>
      </div>
      <div onClick={() => {setToggleMachine(true)}} style={toggleMachine ? machineSettings[1].v8 : machineSettings[0].v8} className={styles.machines__v8}>
         <Image src={v8} alt='v8' fill={true}></Image>
      </div>
   </section>
   )
}
export default Machines;