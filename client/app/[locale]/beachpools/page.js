import React from 'react'
import Beach1 from './Components/Beach1'
import Beach2 from './Components/Beach2'
import Beach3 from './Components/Beach3'
import Beach4 from './Components/Beach4'
import Beach5 from './Components/Beach5'
import ContactSection2 from '../GeneralComponents/Contact/ContactSection2'
import pool1 from "./Images/hoversız/beach4.jpg"
import pool2 from "./Images/hoversız/beach1.jpg"
import pool3 from "./Images/hoversız/beach5.jpg"
import pool4 from "./Images/hoversız/beach3.jpg"
import pool5 from "./Images/hoversız/beach2.jpg"
import hover1 from "./Images/hover/beach3.jpg"
import hover2 from "./Images/hover/beach2.jpg"
import hover3 from "./Images/hover/beach5.jpg"
import hover4 from "./Images/hover/beach4.jpg"
import hover5 from "./Images/hover/beach1.jpg"
import Form from '../GeneralComponents/Form'
import ClinaryInfoSection from '../restaurants/components/ClinaryInfoSection'
import BannerDark from '../GeneralComponents/BannerDark'
import mainimage from "./images/banner.webp"
import blok1 from "../HomePage/Components/Images/blok2.jpg"
import blok2 from "../HomePage/Components/Images/blok1.jpg"
import CuisinesCarousel from '../restaurants/components/CuisinesCarousel'

const poolItems = [
  {
    src: pool1,
    hoverSrc: hover1,
    subtitle: "family-friendly pool for general use",
    title: "Outdoor Swimming Pool",
    description: "Lorem ipsum dolor sit amet consectetur. Porta est ultricies in habitant. Pharetra arcu elit pellentesque ornare cursus leo pharetra sit sed. Ut ornare est mus eu nisl donec quam.",
    icontext:"Outdoor",
    icontext2:"750 m2",
    icontext3:"1.40 cm"
  },
  {
    src: pool2,
    hoverSrc: hover2,
    subtitle: "peaceful environment for relaxation",
    title: "Indoor Swimming Pool",
    description: "Lorem ipsum dolor sit amet consectetur. Egestas sollicitudin blandit est amet gravida integer. Mi feugiat fringilla morbi habitant nunc eu. Aliquam leo morbi nunc ",
    icontext:"Indoor",
    icontext2:"100 m2",
    icontext3:"1.40 cm"
  },
  {
    src: pool3,
    hoverSrc: hover3,
    subtitle: "Kids Club",
    title: "Children's Pool ",
    description: "Lorem ipsum dolor sit amet consectetur. Ullamcorper tempor pellentesque arcu fringilla eleifend donec quis. Nunc mauris amet ultrices proin elementum quis ut",
    icontext:"Outdoor",
    icontext2:"90 m2",
    icontext3:"40 cm"
  },
  {
    src: pool4,
    hoverSrc: hover4,
    subtitle: "Scenic views for a serene floating experience",
    title: "Slide Pool",
    description: "Lorem ipsum dolor sit amet consectetur. Porta est ultricies in habitant. Pharetra arcu elit pellentesque ornare cursus leo pharetra sit sed. Ut ornare est mus eu nisl donec quam ",
    icontext:"Outdoor",
    icontext2:"80 m2",
    icontext3:"1.20 cm"
  },
  {
    src: pool5,
    hoverSrc: hover5,
    subtitle: "ideal for recreational swimming",
    title: "Indoor Children's Pool",
    description: "Lorem ipsum dolor sit amet consectetur. Egestas sollicitudin blandit est amet gravida integer. Mi feugiat fringilla morbi habitant nunc eu. Aliquam leo morbi nunc ",
    icontext:"Indoor",
    icontext2:"90 m2",
    icontext3:"40 cm"
  },

]

const texts = [
  "Lorem ipsum dolor sit amet consectetur. Libero ut pellentesque netus odio felis morbi est. Netus turpis pretium diam at ut orci. Sed pretium cras viverra viverra pulvinar aliquet dictum magna luctus.",
  "Special Feautures",
  "Complimentary sun loungers, umbrellas, and towels.",
  "Beach bars serving refreshing drinks and light snacks.",
  "Calm waters ideal for swimming and water sports."
];


const page = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-[#fbfbfb] gap-[60px] md:gap-[80px] lg:gap-[100px]'>
    <BannerDark img={mainimage} span="ITALIAN CUISINE AT ITS FINEST" header="Beach & Pools" text="Enjoy a various amount of dining options from around the world."/>
    <ClinaryInfoSection
            img1={blok1}
            img2={blok2}
            span="Perfect Fine Dine Experiences"
            header="Discover Our Exclusive Beach"
            texts={texts}
          />
   
     <Beach2 />
      <Beach3 />
      <Beach4 />
   
      <Beach5 showLink={false} span="Dive Into Our Exclusive Pool Selection" header=" All Pools at a Glance" text=" Lorem ipsum dolor sit amet consectetur. Mauris et cras ut odio phasellus. Volutpat leo tempor quam lobortis purus nulla. Turpis felis sit sed tristique ut fermentum gravida aenean nam. Facilisi neque sit donec vitae velit diam eget ut. Imperdiet vivamus molestie volutpat at tellus scelerisque velit. Nibh integer odio." poolItems={poolItems}/>
      <ContactSection2 />
      <Form/>
   
    </div>
  )
}

export default page