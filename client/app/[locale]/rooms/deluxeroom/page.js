import React from 'react'
import SubRoomBanner from '../subroomComponent/components/SubRoomBanner'
import SubroomCarousel from '../subroomComponent/components/SubroomCarousel'
import RoomFeatures from '../subroomComponent/components/RoomFeatures'
import RoomTour from '../subroomComponent/components/RoomTour'
import OtherOptions from '../subroomComponent/components/OtherOptions'
import backgroundImg from "../subroomComponent/images/odafull.webp"
import ContactSection2 from '@/app/[locale]/GeneralComponents/Contact/ContactSection2'
import options1 from "../deluxeroom/images/deluxe4.jpg";
import options2 from "../fantasyroom/images/fantasy4.jpg";
import {useTranslations} from 'next-intl';
import img1 from "./images/deluxe1.jpg";
import img2 from "./images/deluxe2.jpg";
import img3 from "./images/deluxe3.jpg";
import img4 from "./images/deluxe4.jpg";
import img5 from "./images/deluxe5.webp";
import img6 from "./images/deluxe6.webp";
import img7 from "./images/deluxe7.webp";
import img8 from "./images/deluxe8.jpg";
import img9 from "./images/deluxe9.webp";
import BackgroundSection from '../subroomComponent/components/BackgroundSection'

const page = () => {
  const t = useTranslations('DeluxeRoom');
  const t2 = useTranslations('DeluxeRoom.RoomFeatures');
  const t3 = useTranslations('DeluxeRoom.BackgroundSection');
  const t4 = useTranslations('DeluxeRoom.OtherOptions');

  const subroomBannerText=[t("span1"),t("span2"),t("span3")]
  const backgroundTexts=[t3("text")]
  
  const iconTexts=[t2("span1"),t2("span2")];

  const carouselImages = [img1,img2,img3,img4,img5,img6,img7,img8,img9];
  const rooms = [
    {
      id: 1,
      img: options1,
      title: t4("title1"),
      description: t4("subtitle1"),
      size: t4("area1"),
      capacity: t4("person1"),
      text: t4("text1"),
      link: "/rooms/familyroom",
    },
    {
      id: 2,
      img: options2,
      title: t4("title2"),
      description: t4("subtitle2"),
      size: t4("area2"),
      capacity: t4("person2"),
      text: t4("text2") ,
      link: "/rooms/fantasyroom",
    },
  
  ];

  return (
    <div className=' overflow-hidden flex flex-col items-center justify-center gap-[60px] md:gap-[80px] lg:gap-[100px] bg-[#fbfbfb]'>
     <div className='flex flex-col'>
     <SubRoomBanner img={img4} span="exclusive stay with an INDEPENDENT pool" header="Deluxe Room" texts={subroomBannerText}/>
     <SubRoomBanner img={img1} span={t("subtitle")} header={t("title")} texts={subroomBannerText}/>
     <SubroomCarousel images={carouselImages}/>
     </div>
      <RoomFeatures span={t2("subtitle")} header={t2("title")} text={t2("text")} header2={t2("subtitle2")} header3={t2("subtitle3")}  text2={t2("text2")} iconsTexts={iconTexts}  />
     <BackgroundSection span={t3("subtitle")} header={t3("title")} texts={backgroundTexts} link="/" img={img3}/>
      <OtherOptions rooms={rooms}/>
      <ContactSection2/>
    </div>
  )
}

export default page
