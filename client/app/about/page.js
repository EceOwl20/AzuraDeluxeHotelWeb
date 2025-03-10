import React from 'react'
import MainBanner2 from '../GeneralComponents/MainBanner2'
import mainImg from "./images/banner.jpg"
import exactImg from "./images/PANORAMIC.jpg"
import SpaReverseInfo from '../spawellness/components/SpaReverseInfo'
import MissionVisionSection from './components/MissionVisionSection'
import EmblaCarousel from "../HomePage/Components/Slider/Slider1"
import KidsMomentCarousel from '../kidsclub/components/KidsMomentCarousel'
import img1 from "./images/gal_sol.jpg"
import img2 from "./images/gal_orta.jpg"
import img3 from "./images/Gal_sag.jpg"
import img4 from "./images/gal_son.jpg"
import leftImg from "./images/1.jpg"
import rightImg from "./images/2.jpg"
import ContactSection2 from '../GeneralComponents/Contact/ContactSection2'

const images =[img2,img3,img4,img1]

const texts=["LAgo hotel","Our Mission & Vision","Our mission is to provide unparalleled hospitality and create lasting memories for our guests. We are dedicated to excellence in every aspect of your stay, from personalized services to sustainable practices. Our vision is to be a leader in the hospitality industry, known for delivering exceptional experiences while preserving the environment."]
const texts2=["hotel LAgo","Why Choose Lago Hotel?","In addition, our hotel offers delicious meals prepared by professional chefs, as well as bars with distinctive flavors and restaurants serving cuisine from throughout the world. When you stay at our hotel, you can hear nightingales and other bird sounds as you wake up and enjoy our dazzling pool and crystal blue sea. In addition to these, Lago offers a variety of amenities for your comfort, including sauna, spa, fitness center, men’s and women’s barbershops, boutique, jewelry store, photographer’s studio, game center, and shopping mall."]
const texts3=["hotel LAgo","a special vacation","Our hotel is 50 meters from the lake and 300 meters from the river. Here you can walk, jog, go fishing, find the opportunity to watch birds from all over the world, and live in touch with nature. Also other places: Manavgat is 4 km from and Manavgat waterfall is 6 km from. Side is 9 km from, where you have the chance to see the ancient city of Side, the antique amphitheater, the museum, the Temple of Apollo and the first sundial in the world. Side Center: 9 Km Manavgat Center: 4 Km ; Antalya Airport: 63 Km "]

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[60px] md:gap-[80px] lg:gap-[100px] bg-[#fbfbfb]'>
      <MainBanner2 span="HAPPY MOMENTS UNFORGETTABLE" header="About Our Hotel" img={mainImg}/>
      <SpaReverseInfo isImageLeft={false} span="hotel LAgo " header="The Exact Place" text="We provide you with a pleasurable vacation experience that will make you feel at home in our rooms, created in accordance with various tastes and demands by combining aesthetics and comfort with their eye-catching designs and practical structures! We also have heated indoor pools, one for adults and one for children. Thanks to hotel’s unique location, most of our rooms have sea, pool and some lake, river and forest views. " link="/" showLink={true} img={exactImg}/>
      <KidsMomentCarousel showheader={false} header=""  images={images}/>
      <MissionVisionSection texts={texts} texts2={texts2} texts3={texts3} leftImg={leftImg} rightImg={rightImg} showLink={false}/>
      <EmblaCarousel options={{ loop: true }}/>
      <ContactSection2/>
    </div>
  )
}

export default page
