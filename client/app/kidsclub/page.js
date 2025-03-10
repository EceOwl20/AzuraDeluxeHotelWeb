import React from 'react'
import imageMain from "./images/kids4.webp"
import KidsBamboo from './components/KidsBamboo'
import KidsIconsSection from './components/KidsIconsSection'
import KidsclubCarousel from './components/KidsclubCarousel'
import ContactSection from '../GeneralComponents/Contact/ContactSection'
import kids1 from "./images/kids7.jpg"
import kids2 from "./images/child_pool.jpg"
import kids3 from "./images/2149046677.jpg"
import CuisinesCarousel from '../restaurants/components/CuisinesCarousel'
import KidsRestaurantCarousel from './components/KidsRestaurantCarousel'
import KidsMomentCarousel from './components/KidsMomentCarousel'
import img1 from "./images/kids3.webp"
import img2 from "./images/kids4.webp"
import img3 from "./images/kids5.webp"
import ContactSection2 from '../GeneralComponents/Contact/ContactSection2'
import RestaurantMainBanner from '../restaurants/components/RestaurantMainBanner'
import BannerDark from '../GeneralComponents/BannerDark'
import ClinaryReverseInfo from '../restaurants/components/ClinaryReverseInfo'

const momentImages=[img1,img2,img3]

const kids = [
  {
    id: 1,
    img: kids1,
    title: "Slide Pool ",
    description: "bamboo kıds club ",
    text:"Lorem ipsum dolor sit amet consectetur. Egestas enim magnis pretium pretium risus suscipit a duis porttitor. Varius diam urna netus fermentum aliquet.",
    link:"/"
  },
  {
    id: 2,
    img: kids2,
    title: "Children's Pool   ",
    description: "bamboo kıds club",
     text:"Lorem ipsum dolor sit amet consectetur. Egestas enim magnis pretium pretium risus suscipit a duis porttitor. Varius diam urna netus fermentum aliquet.",
     link:"/"
  },
  {
    id: 3,
    img: kids3,
    title: "Indoor Kids Pool",
    description: "bamboo kıds club ",
     text:"Lorem ipsum dolor sit amet consectetur. Egestas enim magnis pretium pretium risus suscipit a duis porttitor. Varius diam urna netus fermentum aliquet.",
     link:"/"
  }
];

const page = () => {
  return (
    <div className='overflow-hidden flex flex-col items-center justify-center gap-[60px] md:gap-[80px] lg:gap-[100px] bg-[#fbfbfb]'>
      <BannerDark img={imageMain} span="RELAX AT OUR LAGO WELLNESS CENTER" header="Bamboo Kids Club" text="Relax and restart. Enjoy high-quality professional massage at our wellness center, obtain a comprehensive stretching of physical and mental."/>
      <ClinaryReverseInfo img1={img1} img2={img2} span="Perfect Fine Dine Experiences" header="Bistro Restaurant" text1=" Forget about the concern about whether I can eat when you visit Lago Hotel and start daydreaming about a vacation. We are open twenty-four hours a day at Bistro restaurant. Experience our concept while sipping your beer next to those who taste delicious hamburgers, pasta, sandwiches, chicken drumsticks and sweeten their palates.Let’s learn more about this concept." text2=" Bistros are restaurants where typical menu items are provided quickly. The French take little breaks from their everyday labor in these serene locations, occasionally sipping coffee and occasionally consuming alcohol. Sandwiches, both hot and cold, desserts, and other drinks can all be enjoyed."/>
      <KidsIconsSection/>
      <KidsclubCarousel/>
      <CuisinesCarousel span="Bamboo kıds club" header="Kid Pools" text="Lorem ipsum dolor sit amet consectetur. Viverra molestie dui fusce dignissim lacus adipiscing ut feugiat ut. Laoreet pharetra dolor libero id ornare nulla." cuisines={kids}/>
      <KidsMomentCarousel showheader={true} images={momentImages} header="Every Moment is Worth Sharing"/>
      <ContactSection2/>
    </div>
  )
}

export default page
