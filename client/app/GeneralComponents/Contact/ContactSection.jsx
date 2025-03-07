"use client"
import React,{ useEffect, useRef } from "react";
import Image from 'next/image'
import imgBackground from "./images/darkgallerybg.png"
import LeafSvg from '../Header/Icons/LeafSvg'
import minigallery from "./images/azuragallery.webp"
import Link from 'next/link'
import { PiInstagramLogoLight,PiMetaLogoLight,PiFacebookLogoLight, PiYoutubeLogoLight} from "react-icons/pi";

const ContactSection = () => {

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollSpeed = 2.5; // Daha yavaş kayma için 1px
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        scrollContainer.scrollTop += scrollSpeed;

        // Eğer en sona geldiyse, biraz bekleyip başa dön
        if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
          setTimeout(() => {
            scrollContainer.scrollTop = 0; // Baştan başlat (ani sıçrama yapmadan)
          }, 500); // 0.5 saniye bekleyip baştan başlat
        }
      }, 40); // Daha smooth kayma için 30ms
    };

    startScrolling();

    return () => clearInterval(scrollInterval); // Component unmount olursa temizle
  }, []);

  return (
    <div className='flex w-screen h-screen md:h-[497px] lg:h-[750px] 2xl:h-[850px] items-center md:justify-start bg-cover bg-center relative  max-w-[1920px] overflow-hidden justify-center' style={{ backgroundImage: `url(${imgBackground.src})` }}>
      <LeafSvg className="absolute top-6 -left-24" width={498} height={652}/>
      <div className='flex flex-col md:flex-row w-[95%]  md:w-[88%] lg:w-[80%] items-center justify-start bg-white h-[85%] lg:h-[88%] max-w-[1440px] gap-[20px]'>

        <div className='flex h-[25%] md:h-auto w-[90%] md:w-[45%] lg:w-[39%] font-jost text-black items-center md:items-start justify-center '>
           <div className='flex flex-col md:w-[79%] items-center text-center md:text-start md:items-start justify-center gap-[15px] md:gap-[23.19px] lg:gap-[30px]'>
           <span className=' text-[12px] font-medium leading-[14px] uppercase tracking-[0.48px] mt-[10%] md:mt-0'>Follow us for more</span>
            <h2 className='font-marcellus font-normal text-[28px] md:text-[28px] lg:text-[28px] xl:text-[36px] 2xl:text-[44px] leading-[150%] lg:leading-[57.6px] capsizedText3 lg:capsizedText2'>@AzuraDeluxeResort</h2>
            <p className='text-[14px] lg:text-[16px] font-normal leading-[24px] '>
            Lorem ipsum dolor sit amet consectetur. Id urna rhoncus volutpat fames velit. Odio nisl condimentum pharetra in. Massa eu tristique adipiscing ut risus etiam justo platea volutpat. Sit eget.
            {/* Titreyengol, Sorgun / Manavgat/ Antalya / TR <br></br>
            Phone: <Link href="/" className='underline '>+90 242 756 99 00 </Link> <br></br>
            Call Center: <Link href="/" className='underline '>+90 242 524 57 87</Link> <br></br>
            Email: <Link href="/" className='underline '>sales@lagohotel.com</Link> <br></br> */}
            </p>
            <div className='flex w-full items-center justify-center md:justify-start gap-[20px] '>
                <div className='flex items-center justify-center gap-[18px]'>
                <PiInstagramLogoLight size={28} />
                {/* <PiMetaLogoLight size={30} /> */}
                 <PiFacebookLogoLight size={28} />
                 <PiYoutubeLogoLight size={28} />
                </div>
                <div className='flex bg-black h-[20px] w-[1px]'></div>
                <span className="text-lagoBrown font-marcellus underline underline-offset-[6px] text-[16px] font-normal hidden lg:flex leading-[30px] uppercase">Stay updated</span>
                <span className="text-lagoBrown font-marcellus underline underline-offset-[6px] text-[14px] font-normal md:leading-[19.88px] flex lg:hidden uppercase">BOOK NOW</span>
            </div>
           </div>
        </div>

        <div className='flex w-[90%] md:w-[55%] lg:w-[60%] h-[75%] md:h-[95%] '>
        <div style={{ scrollBehavior: "smooth" }} ref={scrollRef} className="w-full h-[96%] md:h-full min-h-[322px] max-w-[99%] overflow-hidden custom-scroll scroll-smooth ">
      <div className="flex flex-col">
          {[...Array(8)].flatMap((_, loopIndex) =>
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
          {/* <div className='flex flex-col w-full overflow-auto hover:overflow-scroll custom-scroll h-auto'>
          <div className="columns-3 gap-3 px-3 mb-3 transition-all duration-[350ms] ease-in-out cursor-pointer ">
                {images.map((item,index)=>{
                    return(
                      <div className="mb-3 transition-all duration-[350ms] ease-in-out cursor-pointer" key={index}>
                        <Image src={item.imgSrc} alt="contact" className='w-[100%] '/>
                    </div>
                    )
                })}
            </div>
          </div> */}
        
          </div>       

      </div>
    </div>
  )
}

export default ContactSection
