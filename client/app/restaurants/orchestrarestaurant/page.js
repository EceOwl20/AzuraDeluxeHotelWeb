import MainBannerSection from '@/app/GeneralComponents/MainBannerSection'
import React from 'react'
import imgBanner from "./images/orchestra2.webp"
import img1 from "./images/orchestra3.jpg"
import img2 from "./images/orchestra2.webp"
import ClinaryReverseInfo from '../components/ClinaryReverseInfo'
import CuisinesCarousel from '../components/CuisinesCarousel'
import orchestra from "../images/orchestra.webp"
import bellaazura from "../images/bellaazura.webp"
import ottoman from "../images/ottoman.webp"
import DiscoverBackground from '../components/DiscoverBackground'
import ContactSection2 from '@/app/GeneralComponents/Contact/ContactSection2'
import backgroundImg from "../images/discoverbarsparallax.jpg"
import RestaurantMainBanner from '../components/RestaurantMainBanner'
import KidsMomentCarousel from '@/app/kidsclub/components/KidsMomentCarousel'
import BannerDark from '@/app/GeneralComponents/BannerDark'

const images =[imgBanner,img1,img2]

const otherOptions = [
    {
        id: 1,
        img: orchestra,
        title: "Orchestra",
        description: "CUISINE: International ",
        text:"Let’s experience the pleasure of retaining the distinctive flavors and culinary traditions of Turkish food on the plate. LAGO has the honor of fusing your dreams with the unique taste of the Mediterranean.",
        link:"/restaurants/orchestrarestaurant"
      },
    {
        id: 2,
        img: bellaazura,
        title: "Bella Azura",
        description: "CUISINE: Teppanyaki (Japanese)",
        text:"Let’s experience the pleasure of retaining the distinctive flavors and culinary traditions of Turkish food on the plate. LAGO has the honor of fusing your dreams with the unique taste of the Mediterranean.",
        link:"/restaurants/bellaazura"
      },
      {
        id: 3,
        img: ottoman,
        title: "Ottoman",
        description: "CUISINE: Seafood and Fish ", 
         text:"Fish menus prepared for you by our award-winning chefs appeal to both your appetite and your eyes. Special recipes are waiting for you in our Fish A’la Carte restaurant. Our fish a’la carte restaurant serves on the ",
         link:"/restaurants/ottomanrestaurant"
      }
  ];

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[60px] md:gap-[80px] lg:gap-[100px] bg-[#fbfbfb] overflow-x-hidden'>
      <BannerDark img={imgBanner} span="ITALIAN CUISINE AT ITS FINEST" header="Orchestra Restaurant" text="Enjoy a various amount of dining options from around the world."/>
      <ClinaryReverseInfo img1={img1} img2={img2} span="Perfect Fine Dine Experiences" header="Exquisite Italian Flavours" text1="Italian cuisine has been created by our experts for you as a culinary feast. In our main restaurant, our Italian A’la Carte restaurant is ready to serve you the distinctive flavors of Italian cuisine.  Lectus proin ac elit sed porttitor habitasse adipiscing id neque." text2="Nulla vitae commodo tristique viverra id praesent. Fermentum ut fermentum at nulla. Sagittis urna maecenas augue aliquam vestibulum. Lectus proin ac elit sed porttitor habitasse adipiscing id neque. Lectus proin ac elit sed porttitor habitasse adipiscing id neque."/>
     <KidsMomentCarousel images={images} header="" showheader={false}/>
      <CuisinesCarousel span="Perfect Fine Dine Experiences" header="Other options" text="In our A’la Carte Restaurants, the exquisite flavors of international cuisine are waiting for you, crafted by the masterful hands of our award-winning chefs. During your holiday, we pleased to invite you to a wonderful adventure at our distinctive à la carte restaurants!" cuisines={otherOptions}/>
      <DiscoverBackground  span="A UNIQUE FEAST OF TASTE" header="Discover our Bars" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus" link="/restaurant" img={backgroundImg}/>
      <ContactSection2/>
    </div>
  )
}

export default page
