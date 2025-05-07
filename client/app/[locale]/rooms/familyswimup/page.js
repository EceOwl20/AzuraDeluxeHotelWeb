import React from 'react'
import SubRoomBanner from '../subroomComponent/components/SubRoomBanner'
import SubroomCarousel from '../subroomComponent/components/SubroomCarousel'
import RoomFeatures from '../subroomComponent/components/RoomFeatures'
import BackgroundSection from '../subroomComponent/components/BackgroundSection'
import RoomTour from '../subroomComponent/components/RoomTour'
import OtherOptions from '../subroomComponent/components/OtherOptions'
import backgroundImg from "./images/odafull.webp"
import ContactSection2 from '@/app/[locale]/GeneralComponents/Contact/ContactSection2'

import img1 from "./images/SRF_2039.jpg";
import img2 from "./images/SRF_2044.jpg";
import img3 from "./images/SRF_2053.jpg";
import img4 from "./images/SRF_2064.jpg";
import img5 from "./images/SRF_2069.jpg";
import img6 from "./images/SRF_2073.jpg";
import img7 from "./images/SRF_2086.jpg";
import img8 from "./images/SRF_2092.jpg";
import img9 from "./images/SRF_2119.jpg";
import img10 from "./images/SRF_3168.jpg";
import img11 from "./images/SRF_3176.jpg";

import mainImg from "./images/header.webp"
const subroomBannerText=["Forest / Sea View","1-4 Adult + 1-3 Children","2 Bedrooms / 4 Beds"]
const backgroundTexts=["Guests staying in Swim-Up rooms are welcomed with a VIP setup, including a carefully prepared fruit tray and delicate macarons upon check-in.","A’la Carte Dining: One complimentary visit for stays of 7+ nights.","Pavilion Discount: Enjoy 15% off exclusive pavilion services."]

const iconTexts=["  Independent Pool"," 2 Single Beds"," Extra Baby Crib"];


const page = () => {
  const carouselImages = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11];

  return (
    <div className=' overflow-hidden flex flex-col items-center justify-center gap-[60px] md:gap-[80px] lg:gap-[100px] bg-[#fbfbfb]'>
     <div className='flex flex-col'>
     <SubRoomBanner img={img3} span="exclusive stay with an INDEPENDENT pool" header="Family Swim-Up" texts={subroomBannerText}/>
     <SubroomCarousel images={carouselImages}/>
     </div>
      <RoomFeatures span=" FUN FOR ALL ages" header="     Swim Up Family Room" text="   It is located in our main building with a volume of 50-55 m2 with
              sea and forest view. This room type consists of 2 separate
              bedrooms (with intermediate door) with double bedroom (for 2
              adults) and room with 2 separate beds (2 twin beds / for 2
              adults). 1 shared bathroom, pool & terrace with seating
              group. Maximum stay with 4 adults  Suitable for up to 1
              child.  Family Swim-up Forest has a large pool shared
              with other SwimUp rooms.
              Family Swim-up Deniz features an independent private pool." header2="  Family-friendly Amenities" header3="Room Features"  text2="Services offered to all rooms (Key System with Chip Armband, Daily
              Mini Bar Refill, Bathroom Cosmetics, Tea-Coffee Set-Up)
              6 of our rooms are specially designed for our disabled
              guests and the width of the main doors is 112cm.
              Extra folding bed is used in rooms without Sofa Bed.
              THE POOLS IN THE SWIMUP ROOMS ARE NOT HEATED." iconsTexts={iconTexts}  />
      <BackgroundSection span="EXCLUSIVE PRIVILEGES" header="Swim-Up Room VIP Benefits" texts={backgroundTexts} link="/" img={backgroundImg}/>
      <RoomTour span="CHOOSE THE BEST ROOM FOR YOU" header="Have a look around" text="Lorem ipsum dolor sit amet consectetur. Ipsum nulla sem placerat enim tortor vitae sapien lorem sem. In sapien a pharetra mollis lectus scelerisque lacus eu. Proin pellentesque netus a amet nisl cursus massa." link="/"/>
      <OtherOptions/>
      <ContactSection2/>
    </div>
  )
}

export default page