import React from 'react'
import mainImg from "./images/fitnessBanner.jpg"
import SpaInfoSection from '../spawellness/components/SpaInfoSection'
import infoImg from "./images/group_fit.jpg"
import infoImg2 from "./images/fitnessBanner.jpg"
import SpaHeaderSection from '../spawellness/components/SpaHeaderSection'
import gallery1 from "./images/table_ten.jpg"
import gallery2 from "./images/gallery_orta.jpg"
import gallery3 from "./images/gallery_sag.jpg"

import SpaTypesInfoSection from '../spawellness/components/SpaTypesInfoSection'
import aqua from "./images/aqua.jpg"
import tableten from "./images/table_ten.jpg"
import ContactSection2 from '../GeneralComponents/Contact/ContactSection2'
import BannerDark from '../GeneralComponents/BannerDark'
import SpaReverseInfo from "../spawellness/components/SpaReverseInfo"

const galleryImages =[gallery1,gallery2,gallery3]

const texts=["Perfect Fine Dine Experiences","Stay fit at LAGO Hotel","For those looking to stay in shape while on vacation, you can unwind your body and soul by receiving a massage from a competent masseuse in our SPA after engaging in your daily sporting activities in our Fitness room, which we have equipped with professional equipment, or you can step back in time in the traditional Turkish Bath and relax in the Finnish Sauna."]
const texts2=["","",""]
const texts3=["SPA & WELLNESS","Group Activities","Lorem ipsum dolor sit amet consectetur. Vulputate ultrices sit.","Tabata, HIT cardio, ","Zumba, Step aerobics","Yoga, pilates"]


const page = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[100px] bg-[#fbfbfb]'>
      <BannerDark img={mainImg} span="RELAX AT OUR LAGO WELLNESS CENTER" header="Spor & Fitness" text="Relax and restart. Enjoy high-quality professional massage at our wellness center, obtain a comprehensive stretching of physical and mental."/>
      <SpaInfoSection img1={infoImg} img2={infoImg2} texts={texts} texts2={texts2} texts3={texts3}/>
      <SpaHeaderSection span="Perfect Fine Dine Experiences" header="Lorem ipsum dolor sit amet" text="Lorem ipsum dolor sit amet consectetur. Sed sit venenatis nisi enim id aenean natoque aliquet et. Et aliquam viverra enim sapien. Dignissim arcu volutpat enim nisl condimentum." images={galleryImages}/>
      <SpaTypesInfoSection isImageLeft={true} showLink={false} span="Water Polo, beach volleyball" header="Beach Voleyball" text="Lorem ipsum dolor sit amet consectetur. Vitae maecenas facilisis leo ultrices neque massa. Accumsan urna risus in porttitor velit suspendisse purus orci volutpat. Nulla scelerisque id convallis lacus blandit et sed. Elementum vel dolor senectus in morbi. Risus est praesent ultrices vestibulum velit feugiat fusce. Nibh bibendum." img={aqua}/>
      <SpaReverseInfo isImageLeft={false} showLink={false} span="Experience traditional culture" header="Personal Trainer" text="Lorem ipsum dolor sit amet consectetur. Vitae maecenas facilisis leo ultrices neque massa. Accumsan urna risus in porttitor velit suspendisse purus orci volutpat. Nulla scelerisque id convallis lacus blandit et sed. Elementum vel dolor senectus in morbi. Risus est praesent ultrices vestibulum velit feugiat fusce. Nibh bibendum." img={tableten}/>
      <ContactSection2/>
    </div>
  )
}

export default page
