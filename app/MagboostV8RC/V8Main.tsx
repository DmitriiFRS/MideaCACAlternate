"use client"

import styles from './MagboostV8.module.scss';
import ImageTitleRC from './ImageTitleRC';
import PreviewTitle from './PreviewTitle';
import { useEffect, useState } from 'react';
import PreviewTitleText from './PreviewTitleText';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
type ImageTitleBlockType = {
   image: any
   title: string
   description: Array<string>
   icons: Array<string>
}

function V8Main({previewTitle, imageTitleBlock} : {previewTitle: Array<string>, imageTitleBlock: Array<ImageTitleBlockType>}) {
   useEffect(() => {
      window.scrollTo(0,0)
      console.log(previewTitle, imageTitleBlock)
   }, [])
   const [isView1, setIsView1] = useState(false)
   const [isView2, setIsView2] = useState(false)
   const imageTitleParams = [{
      isView: isView1,
      setIsView: setIsView1
   },
   {
      isView: isView2,
      setIsView: setIsView2
   }
   ]
   const scrollPosition = useSelector((state: RootState) => state.innovationsReducer.scrollRate);
   return (
      <section className={styles.VRFMain}>
         <PreviewTitle>
            <PreviewTitleText previewTitle={previewTitle} scrollPosition={scrollPosition}/>
         </PreviewTitle>
         {imageTitleParams.map((el, index) => {
            let orders = [];
            index % 2 === 0 ? orders.push('2','1') : orders.push('1','2')
            return (
               <ImageTitleRC key={index} image={imageTitleBlock[index].image} title={imageTitleBlock[index].title} description={imageTitleBlock[index].description}
               icons={imageTitleBlock[index].icons} orders={orders} isView={el.isView} setIsView={el.setIsView}/>
            )
         })}
      </section>
   )
}
export default V8Main;