import React from 'react'
import MainBanner2 from '../GeneralComponents/MainBanner2'
import mainImg from "./images/Banner.jpg"
import GalleryScrollSection from './components/GalleryScrollSection'
import ContactSection2 from '../GeneralComponents/Contact/ContactSection2'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center overflow-hidden gap-[100px] bg-[#fbfbfb]'>
     <div className='flex flex-col items-center justify-center'>
     <MainBanner2 img={mainImg} span="Explore the hotel" header="Azura Gallery"/>
     <GalleryScrollSection/>
     </div>
      <ContactSection2/>
    </div>
  )
}

export default page
