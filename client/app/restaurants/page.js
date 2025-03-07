import React from 'react'
import RestaurantMainBanner from './components/RestaurantMainBanner'
import ClinaryInfoSection from './components/ClinaryInfoSection'
import MainRestaurantSection from './components/MainRestaurantSection'
import CuisinesCarousel from './components/CuisinesCarousel'
import ClinaryReverseInfo from './components/ClinaryReverseInfo'
import anatolia from "./images//anatolia.webp"
import gusto from "./images/gusto.webp"
import despina from "./images/despina.webp"
import bistro from "./images/bistrogorsel.png"

import wasabi from "./images/wasabi.webp"
import tapaz from "./images/tapaz.webp"
import fuego from "./images/fuego.webp"
import DiscoverBackground from './components/DiscoverBackground'
import backgroundImg from "./images/Background.webp"

import img1 from "./images/bistres1.webp"
import img2 from "./images/bist2.webp"

import img3 from "./images/art1.webp"
import img4 from "./images/art2.webp"
import ContactSection2 from '../GeneralComponents/Contact/ContactSection2'
import Image from 'next/image'
import mainBanner from "./images/restaurantMain.webp"

const cuisines = [
    {
      id: 1,
      img: anatolia,
      title: "Orchestra",
      description: "CUISINE: International ",
      text:"The variety of tasty dishes prepared by our chefs is waiting for you in a stylish and cosy atmosphere. Every evening dishes of different countries and well decorated buffet in our main restaurant Orchestra are waiting for you.",
      link:"restaurants/anatoliarestaurant"
    },
    {
      id: 2,
      img: gusto,
      title: "Bella Azura",
      description: "CUISINE: Italian ",
       text:"The most popular from Southern Italian cuisine carpaccio, risotto, pasta and salads are crowded with aroma of red wine in our Italian Restaurant. Magically served delicious dishes invite you to a journey around the Mediterranean.",
       link:"/restaurants/gustorestaurant"
    },
    {
      id: 3,
      img: despina,
      title: "Ottoman A La Carte",
      description: "CUISINE: TURKISH ",
       text:"The unique menu of dishes prepared on rare recipes of Ottoman Palace cuisine complements gentle classical Turkish music. Ideal for those who want to experience the grandeur of the palace with its taste. ",
       link:"/restaurants/despinarestaurant"
    }
  ];

  const cuisines2 = [
    {
      id: 1,
      img: wasabi,
      title: "Patisserie",
      description: "DESSRETS & HOT DRINKS",
      text:"Lorem ipsum dolor sit amet consectetur. Sit velit etiam ultricies facilisi eu amet iaculis leo semper. Mi at ac tellus pretium ornare porttitor scelerisque maecenas. Tellus suspendisse auctor diam dictumst eget elit eu quam.",
      link:"/restaurants/wasabi"
    },
    {
      id: 2,
      img: fuego,
      title: "Mazurka",
      description: "A LA CARTE SNACKS",
       text:"In our Teppanyaki A’la Carte Restaurant, where dishes of Japanese cuisine prepared in iron pans are presented, you can experience the distinctive flavors of the Far East through the original interpretation of our master chefs. ",
       link:"/restaurants/fuego"
    },
    {
      id: 3,
      img: tapaz,
      title: "Lyric Beach",
      description: "BEACH SNACKS",
       text:"Just next to sunbathing guests on the beach and the pier there’s a bar overlooking the sea, where you could find salads, pizza, fruit, kebap, waffel, snacks and variety of pasta. ",
       link:"/restaurants/tapazrestaurant"
    }
  ];

const textsClinary=["LAGO, you will enjoy your vacation with international cuisine in our A’la Carte Restaurants, where flavorful dishes are served, with anendless open buffet where delicious dishes feature uniqueness from Turkish cuisine as well as fresh flavors reflecting the spirit of the Mediterranean",
  "Ana Restoran: Kahvaltı, Öğlen ve Akşam Yemeği","Bistro Restoran: 24 Saat","Snack Bars: 24 Saat"]

const page = () => {
  return (
    <div className='overflow-hidden items-center justify-center flex flex-col gap-[60px]  md:gap-[80px] lg:gap-[100px] bg-[#fbfbfb]'>
      <RestaurantMainBanner img={mainBanner} span="Curated Culinary Experiences" header="Restaurants" text="Enjoy a various amount of dining options from around the world."/>
      <ClinaryInfoSection img1={img3} img2={img4} span="Perfect Fine Dine Experiences" header=" Culinary Art at LAGO" texts={textsClinary} />
      <MainRestaurantSection/>
      <CuisinesCarousel span="Perfect Fine Dine Experiences" header="A la Carte Restaurants" text="In our A’la Carte Restaurants, the exquisite flavors of international cuisine are waiting for you, crafted by the masterful hands of our award-winning chefs. During your holiday, we pleased to invite you to a wonderful adventure at our distinctive à la carte restaurants!" cuisines={cuisines}/>
      <ClinaryReverseInfo img1={img1} img2={img2} span="Perfect Fine Dine Experiences" header="Bistro Restaurant" text1=" Forget about the concern about whether I can eat when you visit Lago Hotel and start daydreaming about a vacation. We are open twenty-four hours a day at Bistro restaurant. Experience our concept while sipping your beer next to those who taste delicious hamburgers, pasta, sandwiches, chicken drumsticks and sweeten their palates.Let’s learn more about this concept." text2=" Bistros are restaurants where typical menu items are provided quickly. The French take little breaks from their everyday labor in these serene locations, occasionally sipping coffee and occasionally consuming alcohol. Sandwiches, both hot and cold, desserts, and other drinks can all be enjoyed."/>
     <div className='flex flex-col relative'>
     <Image src={bistro} width={bistro.width} height={bistro.header} className='hidden lg:flex absolute right-0 w-[172px] h-[203px] sm:w-[252px] sm:h-[304px] md:w-[343px] md:h-[407px] top-0 md:-top-[12%]  xl:right-[190px] lg:-top-[30%]' alt='bistro'/>
     <CuisinesCarousel span="Perfect Fine Dine Experiences" header="Cafés & Snacks" text="As the Lago family, we are making your dreams come true on the shore where the sand and the sea meet, looking at the horizon, accompanied by the deep blue waters of the Mediterranean. We choose the freshest and best quality fish of our country, surrounded by seas on 3 sides, and add our love to it." cuisines={cuisines2}/>
     </div>
      <DiscoverBackground span="A UNIQUE FEAST OF TASTE" header="Discover our Bars and Cafes" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus" link="/restaurant" img={backgroundImg}/>
      <ContactSection2/>
    </div>
  )
}

export default page
