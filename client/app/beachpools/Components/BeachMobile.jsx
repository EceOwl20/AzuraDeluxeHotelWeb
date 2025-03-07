import React from 'react'
import mainImg from "../Images/beachandpoolmobile.png"
import yazi from "../Images/BeachPoolsyazısı.webp";
import Image from 'next/image'
import gradient from "../Images/gradientBeach.png";

const BeachMobile = () => {
  return (
    <div className='flex w-screen h-screen lg:hidden items-center justify-center bg-center bg-cover relative' style={{ backgroundImage: `url(${mainImg.src})` }}>
      <div className='absolute bg-lagoBlack/30 inset-0 z-[1]'></div>
      <div className='flex flex-col w-[90%] lg:w-[50%] items-center justify-center text-center gap-[30px] lg:gap-[50px] text-white font-jost z-50'>
        <span className='text-[12px] md:text-[14px] font-medium leading-[14px] tracking-[0.6px] uppercase'>Curated Culinary Experiences</span>
        <h1 className='text-[40px] md:text-[56px] lg:text-[80px] leading-[28.8px] -tracking-[0.48px] md:tracking-0 font-medium md:leading-[61.6px] lg:leading-[106px] lg:capsizedText font-jost'>Beach & Pools</h1>
        <p className='text-[16px] lg:text-[18px] font-normal leading-[130%] lg:leading-[30px] w-[95%] md:w-[588px]'>Enjoy a various amount of dining options from around the world.</p>
      </div>
    </div>
    
  )
}

export default BeachMobile
