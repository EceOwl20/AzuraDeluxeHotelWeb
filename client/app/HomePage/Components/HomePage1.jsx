import React from 'react'
import EmblaCarousel from "./Slider/Slider1"


export default function HomePage1() {
  

  return (
    <div className='flex flex-col w-full items-center justify-center my-[50px]'>
      <div className="flex flex-col w-[87.79%] md:w-[91.4%] lg:w-[76.8%] gap-[15px] md:gap-[25px] lg:gap-[35px] items-center justify-center text-center text-[#000] font-jost">
      <span className=' text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase'>
      The comfort, quality, endless and impeccable service
      </span>
      <h2 className='text-[28px] md:text-[38px] lg:text-[48px] font-marcellus font-normal leading-normal lg:leading-[57.6px] lg:capsizedText2'>
      Welcome to Azura Deluxe Resort
      </h2>
      <p className=' text-center text-[14px] md:text-[16px] font-normal leading-[20.8px] lg:leading-[24px] md:max-w-[490px] lg:max-w-[736px]'>
      The complex is located 98 km from Antalya (airport), 69 km from Gazipaşa airport and 22 km from Alanya. Between the Mediterranean Sea and the Taurus Mountains is beautifully situated our grounds with a total surface of 12,000 m2 directly on the sea. Our beach has a length of 70 meters and has a jetty for lying and staying.
      </p>
      <button className='hidden lg:flex underline underline-offset-[6px] text-lagoBrown text-[16px] font-normal uppercase leading-[30px] font-marcellus'>
        DISCOVER MORE
      </button>

      </div>
      
    </div>
  )
}
