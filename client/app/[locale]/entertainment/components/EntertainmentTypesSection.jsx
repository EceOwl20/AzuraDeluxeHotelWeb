"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from 'next/image'
import fitness from "../images/FITNESSCENTER.jpg"
import kids from "../images/kids3.jpg"
import water from "../images/5042.jpg"
import beachvoley from "../../gallery/images/entertainment/1.jpg"
import tennis from "../images/kids4.jpg"
import cinema from "../images/kids1.jpg"
import sunset from "../../gallery/images/entertainment/2.jpg"
import stage from "../images/kids2.jpg"
import themed from "../../gallery/images/entertainment/2150407949.jpg"
import Link from 'next/link'
import {useTranslations} from 'next-intl';

const EntertainmentTypesSection = () => {
  const t = useTranslations('Entertainment.GridSection');

  const activities = [
    {
      title: t("title1"),
      category: t("daytime"),
      description: t("text1"),
      image: fitness,
      link:"/spor"
    },
    {
      title: t("title2"),
      category: t("daytime"),
      description: t("text2"),
      image: kids,
      link:"/kidsclub"
    },
    {
      title: t("title3"),
      category: t("daytime"),
      description: t("text3"),
      image: water,
      link:"/beachpools"
    },
    {
      title: t("title4"),
      category: t("daytime"),
      description: t("text4"),
      image: beachvoley,
      link:"/beachpools"
    },
    {
      title: t("title5"),
      category: t("daytime"),
      description: t("text5"),
      image: tennis,
      link:"/spor"
    },
    {
      title: t("title6"),
      category: t("daytime"),
      description: t("text6"),
      image: cinema,
      link:"/beachpools"
    },
    {
      title: t("title7"),
      category: t("nighttime"),
      description: t("text7"),
      image: sunset,
      link:"/spor"
    },
    {
      title: t("title8"),
      category: t("nighttime"),
      description: t("text8"),
      image: stage,
      link:"/entertainment"
    },
    {
      title: t("title9"),
      category: t("daytime"),
      description: t("text9"),
      image: themed,
      link:"/spor"
    }
  ];


  const [emblaRef, emblaApi] = useEmblaCarousel({  loop: true,
    align: "start",
    startIndex: 0, });

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
    <div className="flex w-screen items-center justify-center max-w-[1440px]">
      <div className="flex flex-col w-[87.79%] md:w-[91.4%] lg:w-[76.8%] items-start justify-center gap-[30px] md:gap-[50px] max-w-[1106px]">
        
        {/* Başlık Bölümü */}
        <div className="flex flex-col items-start justify-center text-start gap-[15px] md:gap-[25px] lg:gap-[35px] text-black font-jost">
          <span className="text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase">
          {t("subtitle")}
          </span>
          <h3 className="text-[28px] md:text-[32px] lg:text-[48px] font-normal font-marcellus leading-[120%] lg:leading-[57.6px] lg:capsizedText2">
          {t("title")}
          </h3>
          <p className="text-[16px] font-normal leading-[24px] lg:w-[65%] lg:capsizedText4 w-[98%] md:w-[80%]">
          {t("text")}
          </p>
        </div>
        {/* Dinamik Kartlar */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 w-full items-center justify-center gap-[31px]">
          {activities.map((activity, index) => (
            <div key={index} className="flex flex-col items-center justify-center relative mb-[180px]">
              <div className="w-full flex flex-col items-center justify-end cursor-pointer">
                <Image src={activity.image} width={activity.image.width} height={activity.image.height} className="flex w-full" alt='activity'/>
                <div className="absolute flex flex-col items-start justify-center bg-white gap-[25px] font-jost text-black w-[90%] p-[20px] -bottom-44">
                  <span className="text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase">
                    {activity.category}
                  </span>
                  <h4 className="text-[28px] lg:text-[30px] font-normal leading-[120%] capitalize font-marcellus lg:capsizedText3">
                    {activity.title}
                  </h4>
                  <p className="text-[14px] font-normal leading-[21px] capsizedText4">
                    {activity.description}
                  </p>
                </div>
              </div>
              <Link className='absolute inset-0' href={activity.link}></Link>
            </div>
          ))}
        </div>

         {/* other options */}
      <div className="md:hidden flex flex-col gap-6 w-full">
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex items-start justify-start w-full">
            {activities.map((activity,index) => (
              <div
                key={index}
                className="flex-[0_0_auto] h-[415px] md:h-[390px] lg:h-[390px] min-w-0 mr-[1.5%]"
              >
                <div className="flex flex-col relative w-full items-center text-start justify-center gap-[15px] lg:gap-[20px] font-jost text-black ">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    width={activity.image.width}
                    height={activity.image.height}
                     className="flex h-[300px] md:h-[400px] w-auto md:w-full"
                  />
                  <div className="absolute flex flex-col items-start justify-center bg-white gap-[25px] font-jost text-black w-[90%] p-[20px] -bottom-32">
                  <span className="text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase">
                    {activity.category}
                  </span>
                  <h4 className="text-[28px] lg:text-[30px] font-normal leading-[120%] capitalize font-marcellus lg:capsizedText3">
                    {activity.title}
                  </h4>
                  <p className="text-[14px] font-normal leading-[21px] capsizedText4">
                    {activity.description}
                  </p>
                </div>
                
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex lg:hidden items-end justify-end w-full mt-[0px] md:mt-[20px] xl:mt-[50px] relative">
  {activities.map((_, i) => (
    <div
      key={i}
      className={`transition-all w-[33.3%] h-[1px] bg-[#24292C] rounded-full ${
        selectedIndex === i ? "p-[1px]" : "bg-[#848383] "
      }`}
      onClick={() => handleJump(i)}
    />
  ))}
</div>
        </div>

      </div>
    </div>
  );
}

export default EntertainmentTypesSection;
