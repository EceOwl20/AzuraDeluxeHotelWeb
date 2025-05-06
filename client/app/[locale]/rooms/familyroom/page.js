import React from 'react'
import SubRoomBanner from '../subroomComponent/components/SubRoomBanner'
import SubroomCarousel from '../subroomComponent/components/SubroomCarousel'
import RoomFeatures from '../subroomComponent/components/RoomFeatures'
import BackgroundSection from '../subroomComponent/components/BackgroundSection'
import OtherOptions from '../subroomComponent/components/OtherOptions'
import backgroundImg from "../subroomComponent/images/odafull.webp"
import ContactSection2 from '@/app/[locale]/GeneralComponents/Contact/ContactSection2'
import options1 from "../deluxeroom/images/deluxe4.jpg";
import options2 from "../fantasyroom/images/fantasy4.jpg";
import {useTranslations} from 'next-intl';
import img1 from "./images/family1.webp";
import img2 from "./images/family2.jpg";
import img3 from "./images/family3.webp";
import img4 from "./images/family4.webp";
import img5 from "./images/family5.webp";
import img6 from "./images/family6.jpg";
import img7 from "./images/family7.webp";
import img8 from "./images/family8.webp";
import img9 from "./images/family9.webp";
import img10 from "./images/family10.webp";
import img11 from "./images/family11.jpg";
import img12 from "./images/family12.jpg";
import RoomTour from '../subroomComponent/components/RoomTour'

const page = () => {
  const t = useTranslations('FamilyRoom');
  const t2 = useTranslations('FamilyRoom.RoomFeatures');
  const t3 = useTranslations('FamilyRoom.BackgroundSection');
  const t4 = useTranslations('FamilyRoom.OtherOptions');
  const t5 = useTranslations('FamilyRoom.RoomTour');

const subroomBannerText=[t("span1"),t("span2"),t("span3")]
const backgroundTexts=[t3("text"),t3("list1"),t3("list2")]

const iconTexts=[t2("span1"),t2("span2")];

const features=[t2("feature1"),t2("feature2"),t2("feature3"),t2("feature4"),t2("feature5"),t2("feature6"),t2("feature7"),t2("feature8"),t2("feature9"),t2("feature10"),t2("feature11")];

  const carouselImages = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12];
  const rooms = [
    {
      id: 1,
      img: options1,
      title: t4("title1"),
      description: t4("subtitle"),
      size: t4("area1"),
      capacity: t4("person1"),
      text: t4("text1"),
      link: "/rooms/deluxeroom",
    },
    {
      id: 2,
      img: options2,
      title: t4("title2"),
      description: t4("subtitle"),
      size: t4("area2"),
      capacity: t4("person2"),
      text: t4("text2") ,
      link: "/rooms/fantasyroom",
    },
  
  ];

  return (
    <div className=' overflow-hidden flex flex-col items-center justify-center gap-[60px] md:gap-[80px] lg:gap-[100px] bg-[#fbfbfb]'>
     <div className='flex flex-col'>
     <SubRoomBanner img={img1} span={t("subtitle")} header={t("title")} texts={subroomBannerText}/>
     <SubroomCarousel images={carouselImages}/>
     </div>
      <RoomFeatures span={t2("subtitle")} header={t2("title")} text={t2("text")} header2={t2("subtitle2")} header3={t2("subtitle3")}  text2={t2("text2")} iconsTexts={iconTexts}  features={features}/>
     <BackgroundSection span={t3("subtitle")} header={t3("title")} texts={backgroundTexts} link="/" img={img3}/>
     <RoomTour span={t5("span")} header={t5("title")} text={t5("text")} link="https://kuula.co/share/collection/71LrW?logo=1&info=0&fs=1&vr=1&autorotate=0.22&autop=10&autopalt=1&thumbs=4&margin=2&alpha=0.72"/>
     <RoomTour span={t5("span2")} header={t5("title2")} text={t5("text2")} link="https://kuula.co/share/collection/715J7?logo=1&info=0&fs=1&vr=1&autorotate=0.22&autop=10&autopalt=1&thumbs=4&margin=2&alpha=0.72"/>
      <OtherOptions rooms={rooms}/>
      <ContactSection2/>
    </div>
  )
}

export default page
