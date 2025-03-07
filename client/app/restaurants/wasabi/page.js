import MainBannerSection from '@/app/GeneralComponents/MainBannerSection'
import React from 'react'
import imgBanner from "../fuego/images/SRF_2482.jpg"
import img1 from "../fuego/images/SRF_2403.jpg"
import img2 from "../fuego/images/SRF_2404.jpg"
import img3 from "../fuego/images/SRF_2414.jpg"
import img4 from "../fuego/images/SRF_2419.jpg"
import img5 from "../fuego/images/SRF_2429.jpg"
import img6 from "../fuego/images/SRF_2434.jpg"
import img7 from "../fuego/images/SRF_2439.jpg"
import img8 from "../fuego/images/SRF_2454.jpg"
import img9 from "../fuego/images/SRF_2459.jpg"
import img10 from "../fuego/images/SRF_2467.jpg"
import img11 from "../fuego/images/SRF_2472.jpg"
import img12 from "../fuego/images/SRF_2477.jpg"
import img13 from "../fuego/images/SRF_2482.jpg"
import img14 from "../fuego/images/SRF_2511.jpg"
import img15 from "../fuego/images/SRF_2521.jpg"
import img16 from "../fuego/images/SRF_2404_2.jpg"
import ClinaryReverseInfo from '../components/ClinaryReverseInfo'
import CuisinesCarousel from '../components/CuisinesCarousel'
import wasabi from "../gustorestaurant/images/wasabi2.webp"
import despina from "../images/despina.webp"
import anatolia from "../images/anatolia.webp"
import RoomTour from '@/app/rooms/familyswimup/components/RoomTour'
import DiscoverBackground from '../components/DiscoverBackground'
import ContactSection2 from '@/app/GeneralComponents/Contact/ContactSection2'
import backgroundImg from "../images/Background.webp"
import BannerDark from '@/app/GeneralComponents/BannerDark'
import KidsMomentCarousel from '@/app/kidsclub/components/KidsMomentCarousel'

const images=[img1,img2,img3,img4,img5,img6,
  img7,img8,img9,img10,img11,img12,img13,img14,img15,img16
]

const otherOptions = [
    {
        id: 1,
        img: anatolia,
        title: "Anatolia",
        description: "CUISINE: International ",
        text:"Let’s experience the pleasure of retaining the distinctive flavors and culinary traditions of Turkish food on the plate. LAGO has the honor of fusing your dreams with the unique taste of the Mediterranean.",
        link:"/"
      },
    {
        id: 2,
        img: wasabi,
        title: "Wasabi",
        description: "CUISINE: Teppanyaki (Japanese)",
        text:"Let’s experience the pleasure of retaining the distinctive flavors and culinary traditions of Turkish food on the plate. LAGO has the honor of fusing your dreams with the unique taste of the Mediterranean.",
        link:"/"
      },
      {
        id: 3,
        img: despina,
        title: "Despina",
        description: "CUISINE: Seafood and Fish ", 
         text:"Fish menus prepared for you by our award-winning chefs appeal to both your appetite and your eyes. Special recipes are waiting for you in our Fish A’la Carte restaurant. Our fish a’la carte restaurant serves on the ",
         link:"/"
      }
  ];

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[60px] md:gap-[80px] lg:gap-[100px] bg-[#fbfbfb]'>
      <BannerDark img={imgBanner} span="ITALIAN CUISINE AT ITS FINEST" header="Wasabi Restaurant" text="Enjoy a various amount of dining options from around the world."/>
      <ClinaryReverseInfo img1={img1} img2={img2} span="Perfect Fine Dine Experiences" header="Exquisite Italian Flavours" text1="Italian cuisine has been created by our experts for you as a culinary feast. In our main restaurant, our Italian A’la Carte restaurant is ready to serve you the distinctive flavors of Italian cuisine.  Lectus proin ac elit sed porttitor habitasse adipiscing id neque." text2="Nulla vitae commodo tristique viverra id praesent. Fermentum ut fermentum at nulla. Sagittis urna maecenas augue aliquam vestibulum. Lectus proin ac elit sed porttitor habitasse adipiscing id neque. Lectus proin ac elit sed porttitor habitasse adipiscing id neque."/>
      <KidsMomentCarousel images={images} header="" showheader={false}/>
      <RoomTour span="Perfect Fine Dine Experiences" header="Have a look around" text="Lorem ipsum dolor sit amet consectetur. Ipsum nulla sem placerat enim tortor vitae sapien lorem sem. In sapien a pharetra mollis lectus scelerisque lacus eu. Proin pellentesque netus a amet nisl cursus massa."/>
      <CuisinesCarousel span="Perfect Fine Dine Experiences" header="Other options" text="In our A’la Carte Restaurants, the exquisite flavors of international cuisine are waiting for you, crafted by the masterful hands of our award-winning chefs. During your holiday, we pleased to invite you to a wonderful adventure at our distinctive à la carte restaurants!" cuisines={otherOptions}/>
      <DiscoverBackground  span="A UNIQUE FEAST OF TASTE" header="Discover our Bars and Cafes" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus" link="/restaurant" img={backgroundImg}/>
      <ContactSection2/>
    </div>
  )
}

export default page
