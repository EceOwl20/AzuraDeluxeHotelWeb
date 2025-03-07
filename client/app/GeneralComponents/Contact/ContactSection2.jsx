"use client"
import React, { useEffect, useRef } from "react";
import Image from 'next/image'
import minigallery from "./images/azuragallery.webp"
import Link from 'next/link'
import { PiInstagramLogoLight, PiMetaLogoLight, PiFacebookLogoLight, PiYoutubeLogoLight } from "react-icons/pi";

const ContactDetails = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full md:w-[40%] md:pl-0">
      <div className="flex flex-col w-full max-w-[313px] items-center md:items-start justify-center gap-[20px] md:gap-[30px]">
        <span className="font-jost text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase">
          CONTACT US FOR MORE
        </span>
        <h2 className="font-marcellus text-[28px] md:text-[32px] lg:text-[48px] leading-[36px] md:leading-[57.6px] lg:capsizedText2">
          @AzuraDeluxeResort
        </h2>
        <p className="font-jost text-[14px] md:text-[16px] leading-[24px] underline-offset-2 flex flex-col gap-2 ">
          {/* Mobil görünüm (lg'den küçük) */}
          <span className="capsizedText4 lg:hidden">
            Titreyengol, Sorgun / Manavgat/ Antalya / TR
          </span>
          <span className="capsizedText4 lg:hidden">
            Phone: <Link href="" className="underline">+90 242 756 99 00</Link>
          </span>
          <span className="capsizedText4 lg:hidden">
            Call Center: <Link href="" className="underline">+90 242 524 57 87</Link>
          </span>
          <span className="capsizedText4 lg:hidden">
            Email: <Link href="" className="underline">sales@lagohotel.com</Link>
          </span>

          {/* Desktop görünüm (lg ve üstü) */}
          <span className="hidden lg:block">
            Titreyengol, Sorgun / Manavgat/ Antalya / TR
          </span>
          <span className="hidden lg:block">
            Phone: <Link href="" className="underline">+90 242 756 99 00</Link>
          </span>
          <span className="hidden lg:block">
            Call Center: <Link href="" className="underline">+90 242 524 57 87</Link>
          </span>
          <span className="hidden lg:block">
            Email: <Link href="" className="underline">sales@lagohotel.com</Link>
          </span>
        </p>
        <div className="flex gap-[20px] whitespace-nowrap">
          <div className="flex items-center justify-center gap-[18px]">
            <PiInstagramLogoLight size={28} />
            {/* <PiMetaLogoLight size={30} /> */}
            <PiFacebookLogoLight size={28} />
            <PiYoutubeLogoLight size={28} />
          </div>
          <div className="flex bg-black h-[20px] w-[1px] self-center"></div>
          <span className="text-lagoBrown font-marcellus underline underline-offset-[6px] text-[16px] font-normal leading-[30px] uppercase">
            BOOK NOW
          </span>
        </div>
      </div>
    </div>
  )
}

const GallerySection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollSpeed = 2.5; // Daha yavaş kayma için 1px
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        scrollContainer.scrollTop += scrollSpeed;
        if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
          setTimeout(() => {
            scrollContainer.scrollTop = 0;
          }, 500);
        }
      }, 40);
    };

    startScrolling();

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="flex justify-center md:justify-end items-center w-[90%] md:w-[60%] h-full">
      <div
        style={{ scrollBehavior: "smooth" }}
        ref={scrollRef}
        className="w-full h-[30vh] sm:h-[40vh] justify-center items-center md:h-[322px] max-w-[789px] overflow-hidden custom-scroll scroll-smooth md:mr-[4%]"
      >
        <div className="flex flex-col">
          {[...Array(100)].flatMap((_, loopIndex) =>
            [minigallery].map((img, index) => (
              <Image
                key={`${loopIndex}-${index}`}
                src={img}
                height={img.height}
                width={img.width}
                alt="Minigallery"
                loading="lazy"
                className="xl:w-[100%] h-auto overflow-hidden"
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

const ContactSection2 = () => {
  return (
    <div className="flex w-screen max-w-[1440px] mb-[100px] justify-start">
      {/* Desktop görünüm: İki bölüm arasında ekstra boşluk */}
      <div className="hidden md:flex justify-center items-center gap-8 border-[1px] border-lagoBlack xl:min-w-[90vw] 2xl:min-w-[1401px]  h-[34vh] min-h-[422px]">
        <ContactDetails />
        <GallerySection />
      </div>
      {/* Mobil görünüm: Arkaplan resmi kaldırıldı */}
      <div className="flex flex-col w-full md:hidden justify-center items-center h-[65vh] bg-[#fbfbfb]">
        <div className="flex flex-col w-[90%] sm:w-[85%] bg-[#fbfbfb] gap-[33px] min-h-content h-[55vh] py-[30px] items-center justify-center text-center">
          <ContactDetails />
          <GallerySection />
        </div>
      </div>
    </div>
  )
}

export default ContactSection2
