import imgBanner from "./images/Banner.jpg"
import ClinaryInfoSection from '../restaurants/components/ClinaryInfoSection'
import cafebar1 from "./images/blok2.png"
import cafebar2 from "./images/blok22.png"
import DiscoverBackground from '../restaurants/components/DiscoverBackground'
import backgroundImg from "../restaurants/orchestrarestaurant/images/orchestra3.jpg"
import BackgroundSection from '../rooms/familyswimup/components/BackgroundSection'
import backgroundImg2 from "./images/POOL.png"
import OtherOptions4 from './components/OtherOptions4'
import piano from "./images/PIANOBAR.png"
import chacha from "./images/Chacha.png"
import pier from "./images/Pierbar.png"
import discobar from "./images/discobar.png"

import ContactSection2 from '../GeneralComponents/Contact/ContactSection2'
import BannerDark from "../GeneralComponents/BannerDark"

const clinaryTexts=["Lago, you will enjoy your vacation with international cuisine in our A’la Carte Restaurants, where flavorful dishes are served, with an endless open buffet where delicious dishes feature uniqueness from Turkish cuisine as well as fresh flavors reflecting the spirit of the Mediterranean"]
const backgroundTexts=["For breakfast, lunch, and dinner, we have prepared an endless open buffet where you may immerse in both authentic Turkish cuisine sensations and seasonal delicacies."]
const backgroundTexts2=["For breakfast, lunch, and dinner, we have prepared an endless open buffet where you may immerse in both authentic Turkish cuisine sensations and seasonal delicacies."]

const otherOptions = [
  {
      id: 1,
      img: piano,
      title: "Lobby Piano Bar",
      description: "HOURS: 10:00 - 19:00 ",
      text:"Let’s experience the pleasure of retaining the distinctive flavors and culinary traditions of Turkish food on the plate. LAGO has the honor of fusing your dreams with the unique taste of the Mediterranean.",
      link:"/"
    },
  {
      id: 2,
      img: chacha,
      title: "Cha Cha Pool Bar",
      description: "HOURS: 08:00 - 23:00",
      text:"Italian cuisine has been created by our experts for you as a culinary feast. In our main restaurant, our Italian A’la Carte restaurant is ready to serve you the distinctive flavors of Italian cuisine. Lorem Ipsum the distinctive flavors of ",
      link:"/barcafes/joiebar"
    },
    {
      id: 3,
      img: pier,
      title: "Pier Bar",
      description: "HOURS: 09:00 - 18:00",
       text:"Fish menus prepared for you by our award-winning chefs appeal to both your appetite and your eyes. Special recipes are waiting for you in our Fish A’la Carte restaurant. Our fish a’la carte restaurant serves on the ",
       link:"/"
    },
    {
      id: 4,
      img: discobar,
      title: "Disco Bar Ciks",
      description: "HOURS: 24 hours ",
       text:"Fish menus prepared for you by our award-winning chefs appeal to both your appetite and your eyes. Special recipes are waiting for you in our Fish A’la Carte restaurant. Our fish a’la carte restaurant serves on the ",
       link:"/"
    }
];



const page = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[60px] md:gap-[80px] lg:gap-[100px] bg-[#fbfbfb]'>
      <BannerDark  img={imgBanner} span="ITALIAN CUISINE AT ITS FINEST" header="Bars" text="Enjoy a various amount of dining options from around the world."/>
      <ClinaryInfoSection img1={cafebar1} img2={cafebar2} span="Perfect Fine Dine Experiences" header="Exceptional Bars" texts={clinaryTexts}/>
      <BackgroundSection span="A UNIQUE FEAST OF TASTE" header="Cool Down and Relax" texts={backgroundTexts} link="/" img={backgroundImg2}/>
      <OtherOptions4 span="Perfect Fine Dine Experiences" header="Bars" text="In our A’la Carte Restaurants, the exquisite flavors of international cuisine are waiting for you, crafted by the masterful hands of our award-winning chefs. During your holiday, we pleased to invite you to a wonderful adventure at our distinctive à la carte restaurants!" images={otherOptions}/>
     
      <DiscoverBackground span="A UNIQUE FEAST OF TASTE" header="Discover our Fınest Restaurants" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus" link="/barcafes" img={backgroundImg}/>
      <ContactSection2/>
    </div>
  )
}

export default page
