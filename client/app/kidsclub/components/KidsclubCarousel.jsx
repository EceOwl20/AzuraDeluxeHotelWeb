"use client";
import React, { useState, useEffect, useCallback } from "react";
import useCarousel from "embla-carousel-react";
import img1 from "../images/submenu/childactivite.jpg"
import img2 from "../images/submenu/ballpool.jpg"
import img3 from "../images/submenu/babyroom.jpg"
import img4 from "../images/submenu/gamerooms.jpg"
import img5 from "../images/submenu/childactivite-1.jpg"
import Image from "next/image";

const images=[img1,img2,img3,img4,img5] 
const headers=["Children's Activities","Mini Disco ","Little Cinema","Game Rooms","Playground"]

const KidsclubCarousel = () => {
    const [emblaRef, emblaApi] = useCarousel({
        loop: true,
        align: "start",
        startIndex: 0,
      });
    
      const [selectedIndex, setSelectedIndex] = useState(0);
    
      const scrollPrev = useCallback(() => {
        if (emblaApi && emblaApi.scrollPrev) emblaApi.scrollPrev();
      }, [emblaApi]);
    
      const scrollNext = useCallback(() => {
        if (emblaApi && emblaApi.scrollNext) emblaApi.scrollNext();
      }, [emblaApi]);
    
      useEffect(() => {
        if (emblaApi) {
          emblaApi.on("select", () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
          });
          setSelectedIndex(emblaApi.selectedScrollSnap());
        }
      }, [emblaApi]);

  return (
    <div className='flex flex-col w-screen items-center justify-center gap-[30px] lg:gap-[50px] pb-[30px] '>
      <div className='flex flex-col w-[87.79%] md:w-[91.4%] lg:w-[76.8%] items-center justify-center max-w-[1106px] '>
        <div className='flex flex-col gap-[17px] items-center justify-center font-jost text-black'>
           <div className='flex flex-col gap-[15px] md:gap-[25px] lg:gap-[35px] items-center justify-center text-center w-full'>
           <span className='text-[14px] lg:text-[18px] font-medium uppercase leading-[26px] tracking-[0.72px]'>Welcome to Kids Club</span>
            <h2  className='text-[28px] md:text-[32px] lg:text-[48px] font-normal leading-[120%] lg:leading-[26px] font-marcellus lg:capsizedText2'>Where Fun and Education Meet</h2>
            <p className='text-[14px] lg:text-[16px] font-normal leading-[18px] lg:leading-[26px]'>Kids Club, her yaş grubundan çocuğa hitap eden eğitici ve eğlenceli aktiviteler sunar. <br></br> Çocuğunuzun yaratıcılığını geliştirecek ve hayallerini gerçekleştirecek bir ortam hazırladık.</p>
           </div>
        </div>
      </div>


      <div className="flex flex-col w-[93.89%] md:w-[95.7%] lg:w-[87.4%] ml-[6.1%] md:ml-[4.3%] lg:ml-[11.6%] justify-end items-end">
           {/* carousel */}
           <div className="flex overflow-hidden relative w-full h-full flex-col justify-end items-end" ref={emblaRef}>
        <div className="flex grid-flow-col">
          {images.map((image, index) => (
            <div className="relative flex w-auto lg:h-[540px] flex-[0_0_auto] mx-[7px] shadow-lg  " key={index}>
              <Image
                src={image.src}
                layout="contain"
                width={360}
                height={540}
                alt={`Slide ${index + 1}`}
                objectPosition="center"
                className="flex h-[383px] md:h-[420px] lg:h-[540px] xl:h-auto w-auto md:w-full"
              />
              <div className="absolute inset-0 text-center top-[9%] w-full items-center justify-center">
                <div className="w-[100%] flex items-center justify-center text-center">
                <p className="text-[25px] md:text-[30px] lg:text-[40px] -tracking-[0.88px] font-normal font-marcellus text-white w-[90%] lg:w-[50%]">{headers[index]}</p>
                </div>
              </div>
            
            </div>
          ))}
        </div>
       
      </div>
      <div className="flex items-end justify-end w-full mt-[50px] relative">
  {images.map((_, i) => (
    <div
      key={i}
      className={`transition-all  w-full h-[2px] bg-[#24292C] rounded-full ${
        selectedIndex === i ? "p-[2px]" : "bg-[#848383] "
      }`}
      onClick={() => handleJump(i)}
    />
  ))}

</div>
        </div>
    </div>
  )
}

export default KidsclubCarousel
