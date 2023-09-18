import styles from './page.module.scss'
import Intro from './Intro/Intro'
import Achievments from './Achievments/Achievments'
import SideMenu from './Aside/SideMenu'
import Innovation from './Innovation/Innovation'
import Machines from './Machines/Machines'
import Awards from './Awards/Awards'
import ReferenceProject from './ReferenceProject/ReferenceProject'
import SmartScrollWrapper from './SmartScrollWrapper'
import Footer from './Footer/Footer'
import { useRef } from 'react'

const params = [{
  title: 'V8 Series VRF',
  href: '/VRF'
},
{
  title: 'V8',
  href: '/V8'
}
]

export default function Home() {
  return (
    <main className={styles.main}>
      <SideMenu />
      <SmartScrollWrapper>
        <Intro />
        <Achievments />
        <Innovation />
        <Machines />
        <Awards />
        <ReferenceProject />
        <Footer />
      </SmartScrollWrapper>
    </main>
  )
}
