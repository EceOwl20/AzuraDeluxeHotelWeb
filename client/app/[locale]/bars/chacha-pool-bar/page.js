import React from 'react'
import mainImg from "../lobby-piano-bar/images/main.webp"
import img1 from "../lobby-piano-bar/images/fresh1.webp"
import img2 from "../lobby-piano-bar/images/fresh2.webp"
import RoomTour from '@/app/[locale]/rooms/familyswimup/components/RoomTour'
import KidsMomentCarousel from '@/app/[locale]/kidsclub/components/KidsMomentCarousel'
import gallery2 from "../lobby-piano-bar/images/gallery1.webp"
import gallery1 from "../lobby-piano-bar/images/gallery2.webp"
import gallery3 from "../lobby-piano-bar/images/gallery3.webp"
import ClinaryReverseInfo from '@/app/[locale]/restaurants/components/ClinaryReverseInfo'
import backgroundImg from "../../restaurants/orchestrarestaurant/images/orchestra3.jpg"
import piano from "../images/PIANOBAR.png"
import chacha from "../images/Chacha.png"
import pier from "../images/Pierbar.png"
import discobar from "../images/discobar.png"
import DiscoverBackground from '../../restaurants/components/DiscoverBackground'
import OtherOptions4 from '../components/OtherOptions4'
import ContactSection2 from '@/app/[locale]/GeneralComponents/Contact/ContactSection2'
import RestaurantMainBanner from '@/app/[locale]/restaurants/components/RestaurantMainBanner'

const galleryImages=[gallery1,gallery2,gallery3,gallery1,gallery2,gallery3];

const otherOptions = [
  {
    id: 1,
    img: piano,
    title: "Lobby Piano Bar",
    description: "HOURS: 10:00 - 19:00",
    text:"Let’s experience the pleasure of retaining the distinctive flavors and culinary traditions of Turkish food on the plate. LAGO has the honor of fusing your dreams with the unique taste of the Mediterranean.",
    link:"/bars/lobby-piano-bar"
  },
{
    id: 2,
    img: chacha,
    title: "Cha Cha Pool Bar",
    description: "HOURS: 08:00 - 23:00",
    text:"Italian cuisine has been created by our experts for you as a culinary feast. In our main restaurant, our Italian A’la Carte restaurant is ready to serve you the distinctive flavors of Italian cuisine. Lorem Ipsum the distinctive flavors of ",
    link:"/bars/chacha-pool-bar"
  },
  {
    id: 3,
    img: pier,
    title: "Pier Bar",
    description: "HOURS: 09:00 - 18:00",
     text:"Fish menus prepared for you by our award-winning chefs appeal to both your appetite and your eyes. Special recipes are waiting for you in our Fish A’la Carte restaurant. Our fish a’la carte restaurant serves on the ",
     link:"/bars/pier-bar"
  },
  {
    id: 4,
    img: discobar,
    title: "Disco Bar Ciks",
    description: "HOURS: 24 hours ",
     text:"Fish menus prepared for you by our award-winning chefs appeal to both your appetite and your eyes. Special recipes are waiting for you in our Fish A’la Carte restaurant. Our fish a’la carte restaurant serves on the ",
     link:"/bars/disco-bar"
  }
  ];

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[100px] bg-[#fbfbfb]'>
      <RestaurantMainBanner img={mainImg} span="Fresh drınks and musıc" header="Cha Cha Pool Bar" text="Enjoy a various amount of dining options from around the world."/>
      <ClinaryReverseInfo img1={img1} img2={img2} span="Perfect Fine Dine Experiences" header="Fresh Drinks at the Pool" text1="Italian cuisine has been created by our experts for you as a culinary feast. In our main restaurant, our Italian A’la Carte restaurant is ready to serve you the distinctive flavors of Italian cuisine.  Lectus proin ac elit sed porttitor habitasse adipiscing id neque." text2="Nulla vitae commodo tristique viverra id praesent. Fermentum ut fermentum at nulla. Sagittis urna maecenas augue aliquam vestibulum. Lectus proin ac elit sed porttitor habitasse adipiscing id neque. Lectus proin ac elit sed porttitor habitasse adipiscing id neque."/>
      <KidsMomentCarousel images={galleryImages} header="" showheader={false}/>
      <RoomTour span="Perfect Fine Dine Experiences" header="Have a look around" text="Lorem ipsum dolor sit amet consectetur. Ipsum nulla sem placerat enim tortor vitae sapien lorem sem. In sapien a pharetra mollis lectus scelerisque lacus eu. Proin pellentesque netus a amet nisl cursus massa."/>
      <OtherOptions4 span="Perfect Fine Dine Experiences" header="LAGO’s Exclusive Pool Bars" text="In our A’la Carte Restaurants, the exquisite flavors of international cuisine are waiting for you, crafted by the masterful hands of our award-winning chefs. During your holiday, we pleased to invite you to a wonderful adventure at our distinctive à la carte restaurants!" images={otherOptions}/>
      <DiscoverBackground span="A UNIQUE FEAST OF TASTE" header="Discover our Fınest Restaurants" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus" link="/bars" img={backgroundImg}/>
      <ContactSection2/>
    </div>
  )
}

export default page
