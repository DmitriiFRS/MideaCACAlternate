
import magboostSide from '../../public/img/Sidemenu/magboost-side.png';
import v8Side from '../../public/img/Sidemenu/v8-side.png';
import v6Side from '../../public/img/Sidemenu/v6-side.png';

export type goodsObjType = {
   title: string
   img: any
   id: number
   href?: string
}
type subMenuGoodsType = Array<Array<goodsObjType>>


export const subMenuGoods: subMenuGoodsType = [[
   {
      title: 'Magboost',
      img: magboostSide,
      id: 0,
      href: '/Magboost'
   },
   {
      title: 'V8 series VRF',
      img: v8Side,
      id: 0,
      href: '/V8'
   },
   {
      title: 'V6 series VRF',
      img: v6Side,
      id: 0,
      href: '/V6'
   },
],
[
   {
      title: 'Шаблон 2(1)',
      img: 'картинка',
      id: 1
   },
   {
      title: 'Шаблон 2(2)',
      img: 'картинка',
      id: 1
   },
   {
      title: 'Шаблон 2(3)',
      img: 'картинка',
      id: 1
   },
   {
      title: 'Шаблон 2(4)',
      img: 'картинка',
      id: 1
   },
],
[
   {
      title: 'Шаблон 3(1)',
      img: 'картинка',
      id: 2
   },
   {
      title: 'Шаблон 3(2)',
      img: 'картинка',
      id: 2
   },
   {
      title: 'Шаблон 3(3)',
      img: 'картинка',
      id: 2
   },
   {
      title: 'Шаблон 3(4)',
      img: 'картинка',
      id: 2
   },
],
[
   {
      title: 'Шаблон 4(1)',
      img: 'картинка',
      id: 3
   },
   {
      title: 'Шаблон 4(2)',
      img: 'картинка',
      id: 3
   },
   {
      title: 'Шаблон 4(3)',
      img: 'картинка',
      id: 3
   },
   {
      title: 'Шаблон 4(4)',
      img: 'картинка',
      id: 3
   },
],
[
   {
      title: 'Шаблон 5(1)',
      img: 'картинка',
      id: 3
   },
   {
      title: 'Шаблон 5(2)',
      img: 'картинка',
      id: 3
   },
   {
      title: 'Шаблон 5(3)',
      img: 'картинка',
      id: 3
   },
   {
      title: 'Шаблон 5(4)',
      img: 'картинка',
      id: 3
   },
],
[
   {
      title: 'Шаблон 6(1)',
      img: 'картинка',
      id: 4
   },
   {
      title: 'Шаблон 6(2)',
      img: 'картинка',
      id: 4
   },
   {
      title: 'Шаблон 6(3)',
      img: 'картинка',
      id: 4
   },
   {
      title: 'Шаблон 6(4)',
      img: 'картинка',
      id: 4
   },
],
]