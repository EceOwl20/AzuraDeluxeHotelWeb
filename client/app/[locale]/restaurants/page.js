import React from 'react'
import ClinaryInfoSection from './components/ClinaryInfoSection'
import MainRestaurantSection from './components/MainRestaurantSection'
import CuisinesCarousel from './components/CuisinesCarousel'
import ClinaryReverseInfo from './components/ClinaryReverseInfo'

import orchestra from "./images/orchestra.webp"
import bellaazura from "./images/bellaazura.webp"
import ottoman from "./images/ottoman.webp"

import patisserie from "./images/Patisserie.webp"
import mazurka from "./images/MAZURKA.jpg"
import lyric from "./images/LYRIC.jpg"
import DiscoverBackground from './components/DiscoverBackground'
import backgroundImg from "./images/discoverbarsparallax.jpg"

import img1 from "./images/blok22.jpg"
import img2 from "./images/blok222.webp"

import img3 from "./images/blok2.jpg"
import img4 from "./images/blok21.jpg"
import ContactSection2 from '../GeneralComponents/Contact/ContactSection2'

import mainBanner from "./images/Banner.jpg"
import BannerDark from '../GeneralComponents/BannerDark'
import {useTranslations} from 'next-intl';

const page = () => {
  const t = useTranslations('Restaurants');
  const t2 = useTranslations('Restaurants.TwoImagesSection');
  const t3 = useTranslations('Restaurants.CarouselSection');
  const t4 = useTranslations('Restaurants.CarouselSection2');
  const t5 = useTranslations('Restaurants.BackgroundSection2');

  const cuisines = [
    {
      id: 1,
      img: orchestra,
      title: t3("title1"),
      description: t3("subtitle1"),
      text:t3("text1"),
      link:"restaurants/orchestrarestaurant"
    },
    {
      id: 2,
      img: bellaazura,
      title: t3("subtitle2"),
      description: t3("title2"),
      text:t3("text2"),
       link:"/restaurants/bellaazura"
    },
    {
      id: 3,
      img: ottoman,
      title: t3("title3"),
      description: t3("subtitle3"),
      text:t3("text3"),
       link:"/restaurants/ottomanrestaurant"
    }
  ];

  const cuisines2 = [
    {
      id: 1,
      img: patisserie,
      title: t4("title1"),
      description: t4("subtitle3"),
      text:t4("text1"),
      link:"/restaurants/patisserie"
    },
    {
      id: 2,
      img: mazurka,
      title: t4("title2"),
      description: t4("subtitle2"),
      text:t4("text2"),
       link:"/restaurants/mazurka"
    },
    {
      id: 3,
      img: lyric,
      title: t4("title3"),
      description: t4("subtitle3"),
      text:t4("text3"),
       link:"/restaurants/lyric"
    }
  ];

const textsClinary=[t2("text"),t2("span"),t2("list1")]

  return (
    <div className='overflow-hidden items-center justify-center flex flex-col gap-[60px]  md:gap-[80px] lg:gap-[100px] bg-[#fbfbfb]'>
      <BannerDark img={mainBanner} span={t("subtitle")} header={t("title")} text={t("text")}/>
      <ClinaryInfoSection img1={img3} img2={img4} span={t2("subtitle")} header={t2("title")} texts={textsClinary} />
      <MainRestaurantSection/>
      <CuisinesCarousel span={t3("subtitle")} header={t3("title")} text={t3("text")} cuisines={cuisines}/>
      <ClinaryReverseInfo img1={img1} img2={img2} span="Perfect Fine Dine Experiences" header="Bistro Restaurant" text1=" Forget about the concern about whether I can eat when you visit Lago Hotel and start daydreaming about a vacation. We are open twenty-four hours a day at Bistro restaurant. Experience our concept while sipping your beer next to those who taste delicious hamburgers, pasta, sandwiches, chicken drumsticks and sweeten their palates.Let’s learn more about this concept." text2=" Bistros are restaurants where typical menu items are provided quickly. The French take little breaks from their everyday labor in these serene locations, occasionally sipping coffee and occasionally consuming alcohol. Sandwiches, both hot and cold, desserts, and other drinks can all be enjoyed."/>
     <div className='flex flex-col relative'>
     <CuisinesCarousel span={t4("subtitle")} header={t4("title")} text={t4("text")} cuisines={cuisines2}/>
     </div>
      <DiscoverBackground span={t5("subtitle")} header={t5("title")} text={t5("text")} link="/bars" img={backgroundImg}/>
      <ContactSection2/>
    </div>
  )
}

export default page
