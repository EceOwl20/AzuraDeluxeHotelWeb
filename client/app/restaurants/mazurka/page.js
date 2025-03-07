import MainBannerSection from '@/app/GeneralComponents/MainBannerSection'
import React from 'react'
import imgBanner from "./images/mazurka1.webp"
import img1 from "./images/mazurka2.webp"
import img2 from "./images/mazurka3.webp"
import img3 from "./images/mazurka1.webp"

import ClinaryReverseInfo from '../components/ClinaryReverseInfo'
import CuisinesCarousel from '../components/CuisinesCarousel'
import lyric from "../lyric/images/LYRIC1.webp"
import patisserie from "../patisserie/images/pastane1.webp"
import mazurka from "./images/mazurka1.webp"
import DiscoverBackground from '../components/DiscoverBackground'
import ContactSection2 from '@/app/GeneralComponents/Contact/ContactSection2'
import backgroundImg from "../images/discoverbarsparallax.jpg"
import BannerDark from '@/app/GeneralComponents/BannerDark'
import KidsMomentCarousel from '@/app/kidsclub/components/KidsMomentCarousel'


const images=[img1,img2,img3]

const otherOptions = [
    {
        id: 1,
        img: lyric,
        title: "Lyric",
        description: "CUISINE: International ",
        text:"Let’s experience the pleasure of retaining the distinctive flavors and culinary traditions of Turkish food on the plate. LAGO has the honor of fusing your dreams with the unique taste of the Mediterranean.",
        link:"/restaurants/lyric"
      },
    {
        id: 2,
        img: patisserie,
        title: "Patisserie ",
        description: "CUISINE: Teppanyaki (Japanese)",
        text:"Let’s experience the pleasure of retaining the distinctive flavors and culinary traditions of Turkish food on the plate. LAGO has the honor of fusing your dreams with the unique taste of the Mediterranean.",
        link:"/restaurants/bellaazura"
      },
      {
        id: 3,
        img: mazurka,
        title: "Mazurka",
        description: "CUISINE: Seafood and Fish ", 
         text:"Fish menus prepared for you by our award-winning chefs appeal to both your appetite and your eyes. Special recipes are waiting for you in our Fish A’la Carte restaurant. Our fish a’la carte restaurant serves on the ",
         link:"/restaurants/mazurka"
      }
  ];

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[60px] md:gap-[80px] lg:gap-[100px] bg-[#fbfbfb]'>
      <BannerDark img={imgBanner} span="ITALIAN CUISINE AT ITS FINEST" header="Mazurka" text="Enjoy a various amount of dining options from around the world."/>
      <ClinaryReverseInfo img1={img1} img2={img2} span="Perfect Fine Dine Experiences" header="Exquisite Fish Flavours" text1="Italian cuisine has been created by our experts for you as a culinary feast. In our main restaurant, our Italian A’la Carte restaurant is ready to serve you the distinctive flavors of Italian cuisine.  Lectus proin ac elit sed porttitor habitasse adipiscing id neque." text2="Nulla vitae commodo tristique viverra id praesent. Fermentum ut fermentum at nulla. Sagittis urna maecenas augue aliquam vestibulum. Lectus proin ac elit sed porttitor habitasse adipiscing id neque. Lectus proin ac elit sed porttitor habitasse adipiscing id neque."/>
      <KidsMomentCarousel images={images} header="" showheader={false}/>
      <CuisinesCarousel span="Perfect Fine Dine Experiences" header="Other options" text="In our A’la Carte Restaurants, the exquisite flavors of international cuisine are waiting for you, crafted by the masterful hands of our award-winning chefs. During your holiday, we pleased to invite you to a wonderful adventure at our distinctive à la carte restaurants!" cuisines={otherOptions}/>
      <DiscoverBackground  span="A UNIQUE FEAST OF TASTE" header="Discover our Bars" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus" link="/restaurant" img={backgroundImg}/>
      <ContactSection2/>
    </div>
  )
}

export default page
