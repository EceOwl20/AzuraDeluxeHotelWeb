"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaTripadvisor
} from "react-icons/fa";
import Link from "next/link";
import logosvg from "../Header/Icons/logo2.svg";
import Phone from "../Header/Icons/Phone";
import LocationSvg from "./LocationSvg";
import MessageSvg from "./MessageSvg";
import ArrawDown from "@/app/[locale]/HomePage/Components/Icons/ArrawDown";
import DgtlfaceSvg from "./DgtlfaceSvg";
import BSvg from "./BSvg";

export default function Footer() {
  const [isRoomsOpen, setIsRoomsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  return (
    <footer className="w-full flex flex-col bg-[#1A1A16] text-gray-200 text-sm justify-center items-center z-10">
      <div className="hidden lg:flex w-[91.1%] max-w-[1440px] items-start justify-center text-start gap-[4%] mt-[60px]">
        <div className="flex w-[66%] items-start text-start">
          {/* SOL: 4 SÜTUN (QUICK MENU, TERMS, COMPANY, CONTACT) */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8">
            {/* QUICK MENU */}
            <div className="flex flex-col items-start justify-start text-start gap-[40px]">
              <Link href="/rooms" className="text-[15px] text-white font-marcellus font-normal leading-[26px] tracking-[0.6px] uppercase ">
              Accomodation
              </Link>
              <ul className="text-lagoGray2 font-jost text-[16px] font-normal leading-[20px] space-y-6">
              <li>  <Link href="/rooms/deluxeroom" className="hover:text-white cursor-pointer">Deluxe Room</Link></li>
                <li><Link href="/rooms/familyroom" className="hover:text-white cursor-pointer">Family Room</Link></li>
                <li><Link href="/rooms/fantasyroom" className="hover:text-white cursor-pointer">Fantasy Room</Link></li>
              </ul>
            </div>

            {/* TERM & CONDITIONS */}
            <div className="flex flex-col items-start justify-start text-start gap-[40px]">
              <Link href="/restaurants" className="text-[15px] text-white font-marcellus font-normal leading-[26px] tracking-[0.6px] uppercase ">
              Cuisine

              </Link>
              <ul className="text-lagoGray2 font-jost text-[16px] font-normal leading-[20px] space-y-6">
                <Link href="/restaurants" className="hover:text-white cursor-pointer">
                  Main Restaurant
                </Link>
                <li className="hover:text-white cursor-pointer">
              <Link href="/restaurants/orchestrarestaurant">  Orchestra</Link>
                </li>
                <li className="hover:text-white cursor-pointer">
               <Link href="/restaurants/bellaazura"> Bella Azura</Link>
                </li>
                <li className="hover:text-white cursor-pointer"><Link href="/restaurants/ottomanrestaurant">Ottoman A'la Carte</Link></li>
               
        
              </ul>
            </div>

            {/* COMPANY */}
            <div className="flex flex-col items-start justify-start text-start gap-[40px]">
              <h4 className="text-[15px] text-white font-marcellus font-normal leading-[26px] tracking-[0.6px] uppercase ">
              Activities
              </h4>
              <ul className="text-lagoGray2 font-jost text-[16px] font-normal leading-[20px] space-y-6">
                <li className="hover:text-white cursor-pointer">
                <Link href="/spor">Spor</Link>
                </li>
                <li className="hover:text-white cursor-pointer">
                  <Link href="/kidsclub">Kids</Link>
                </li>
                <li className="hover:text-white cursor-pointer">
                  <Link href="/spawellness">Spa</Link>
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div className="flex flex-col items-start justify-start text-start gap-[40px]">
              <h4 className="text-[15px] text-white font-marcellus font-normal leading-[26px] tracking-[0.6px] uppercase ">
                <Link href="/connect">Contact</Link>
              </h4>
              <div className="flex flex-col gap-[24px]">
                <p className="text-lagoGray2 font-jost text-[16px] font-normal leading-[20px] ">
                  Phone: <span className="underline">+90 242 517 12 34</span>
                </p>
                <a href="mailto:info@azuradeluxe.com" className="text-lagoGray2 font-jost text-[16px] font-normal leading-[20px]">
                  info@azuradeluxe.com
                </a>
                <p className="text-lagoGray2 font-jost text-[16px] font-normal leading-[20px] ">
                  Address:   Avsallar Mah.  
                  <br />
                  İncekum Cad. No:76
                  <br />
                  Alanya / Turkey
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[30%] flex flex-col items-start border-l border-gray-400 pl-16 gap-[40px]">
          {/* Logo */}
          <div className="mb-10">
          <Image
            src={logosvg}
            alt="Logo"
            width={223}
            height={88}
            className="object-contain items-center justify-center"
          />
          </div>

          {/* Sosyal ikonlar */}
          <div className="grid grid-cols-2 lg:flex items-center gap-[32px]">
            <Link
              href="https://www.instagram.com/azuradeluxeresort/"
              target="_blank"
              rel="norefferer nofollower"
            >
              {" "}
              <FaInstagram className="w-[30px] h-[32px]" />
            </Link>
            <Link
              href="https://www.facebook.com/AzuraDeluxeResort/"
              target="_blank"
              rel="norefferer nofollower"
            >
              {" "}
              <FaFacebook className="w-[30px] h-[32px]" />
            </Link>
           
            <Link
              href="https://www.youtube.com/channel/UC3Z23WuWOhmpFnbw9fLI1-g"
              target="_blank"
              rel="norefferer nofollower"
            >
              {" "}
              <FaYoutube className="w-[30px] h-[32px]" />
            </Link>
          </div>

          {/* Alt linkler */}
          <div className="grid grid-cols-2 items-center gap-6 whitespace-nowrap text-lagoGray2">
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <a href="#" className="hover:underline">
              Privacy Notice
            </a>
            <a href="#" className="hover:underline">
              Sustainability
            </a>
            <li className="hover:text-white cursor-pointer">
                  <Link href="/news">Blog</Link>
                </li>
          </div>
        </div>
      </div>

      {/* tablet */}
      <div className="hidden md:flex flex-col lg:hidden w-full bg-lagoBlack h-auto py-[47px] gap-[50px] items-center justify-center">
        <div className="flex w-[90%] gap-[37px] items-center justify-start ml-[10%]">
          <Image
            src={logosvg}
            alt="Logo"
            width={223}
            height={88}
            className="object-contain items-center justify-center"
          />

          <div className="grid grid-cols-2 gap-[25px] items-start justify-start font-jost text-[12px] font-normal leading-[24px] w-[66%] ml-[2%]">
            <div className="flex gap-[15px] items-center justify-center">
              <Phone className="flex" width={25} height={25} color="#A6A6A6" />
              <div className="flex flex-col gap-[10px] items-start justify-start">
                <span className="text-[#A6A6A6] leading-[32.53px] capsizedText6 tracking-[0.3px]">
                  Hotel Line
                </span>
                <div className="flex h-[1px] w-full bg-[#D9D9D9]/50"></div>
                <p className="text-[#FBFBFB] leading-[32.53px] capsizedText6">
                  + 90 242 756 99 00
                </p>
              </div>
            </div>

            <div className="flex gap-[15px] items-center justify-center">
              <Phone className="flex" width={25} height={25} color="#A6A6A6" />
              <div className="flex flex-col gap-[10px] items-start justify-start">
                <span className="text-[#A6A6A6] leading-[32.53px] capsizedText6 tracking-[0.3px]">
                  Call Center
                </span>
                <div className="flex h-[1px] w-full bg-[#D9D9D9]/50"></div>
                <p className="text-[#FBFBFB] leading-[32.53px] capsizedText6">
                  + 90 242 524 57 87
                </p>
              </div>
            </div>

            <div className="flex gap-[15px] items-center justify-center">
              <LocationSvg
                className="flex"
                width={26}
                height={26}
                color="#A6A6A6"
              />
              <div className="flex flex-col gap-[10px] items-start justify-start">
                <span className="text-[#A6A6A6] leading-[32.53px] capsizedText6 tracking-[0.3px]">
                  Adress
                </span>
                <div className="flex h-[1px] w-full bg-[#D9D9D9]/50"></div>
                <p className="text-[#FBFBFB] leading-[32.53px] capsizedText6 tracking-[0.3px]">
                  Manavgat/Antalya, TR
                </p>
              </div>
            </div>

            <div className="flex gap-[15px] items-center justify-center">
              <MessageSvg
                className="flex"
                width={26}
                height={26}
                color="#A6A6A6"
              />
              <div className="flex flex-col gap-[10px] items-start justify-start">
                <span className="text-[#A6A6A6] leading-[32.53px] capsizedText6 tracking-[0.3px]">
                  E-mail
                </span>
                <div className="flex h-[1px] w-full bg-[#D9D9D9]/50"></div>
                <p className="text-[#FBFBFB] leading-[32.53px] capsizedText6 tracking-[0.3px]">
                info@azuradeluxe.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-[30px] items-start justify-center w-[90%] ml-[10%]">
          <div className="flex flex-col items-start justify-start text-start gap-[40px] w-[33%]">
            <Link href="/rooms" className="text-[15px] text-white font-marcellus font-normal leading-[26px] tracking-[0.6px] uppercase ">
            Accomodation
            </Link>
            <ul className="text-lagoGray2 font-jost text-[16px] font-normal leading-[20px] space-y-6">
              <li className="hover:text-white cursor-pointer"><Link href="/rooms/deluxeroom">Deluxe Room</Link></li>
              <li className="hover:text-white cursor-pointer"><Link href="/rooms/familyroom">Family Room</Link> </li>
              <li className="hover:text-white cursor-pointer"><Link href="/rooms/fantasyroom">Fantasy Room</Link></li>
            
            </ul>
          </div>

          {/* TERM & CONDITIONS */}
          <div className="flex flex-col items-start justify-start text-start gap-[40px] w-[33%]">
          <Link href="/restaurants" className="text-[15px] text-white font-marcellus font-normal leading-[26px] tracking-[0.6px] uppercase ">
            Cuisine
            </Link>
            <ul className="text-lagoGray2 font-jost text-[16px] font-normal leading-[20px] space-y-6">
            <li className="hover:text-white cursor-pointer">
             <Link href="/restaurants/mainrestaurant"> Main Restaurant</Link>
              </li>
             
              <li className="hover:text-white cursor-pointer"><Link href="/restaurants/bellaazura">Bella Azura</Link> </li>
              <li className="hover:text-white cursor-pointer"><Link href="/restaurants/ottomanrestaurant">Ottoman A'la Carte</Link></li>
              
            </ul>
          </div>

          {/* COMPANY */}
          <div className="flex flex-col items-start justify-start text-start gap-[40px] w-[33%]">
            <h4 className="text-[15px] text-white font-marcellus font-normal leading-[26px] tracking-[0.6px] uppercase ">
              Activities
            </h4>
            <ul className="text-lagoGray2 font-jost text-[16px] font-normal leading-[20px] space-y-6">
              <li className="hover:text-white cursor-pointer"><Link href="/spor">Spor</Link></li>
              <li className="hover:text-white cursor-pointer">
                <Link href="/kidsclub">Kidsclub</Link>
              </li>
              <li className="hover:text-white cursor-pointer">
              <Link href="/spa">Spa</Link>
              </li>
             
            </ul>
          </div>
        </div>

        <div className="flex w-[92%] items-center justify-center gap-[80px] py-[15px]">
          {/* Sosyal ikonlar */}
          <div className="flex items-center gap-[32px]">
          <Link
              href="https://www.instagram.com/azuradeluxeresort/"
              target="_blank"
              rel="norefferer nofollower"
            >
              {" "}
              <FaInstagram className="w-[30px] h-[32px]" />
            </Link>
            <Link
              href="https://www.facebook.com/AzuraDeluxeResort/"
              target="_blank"
              rel="norefferer nofollower"
            >
              {" "}
              <FaFacebook className="w-[30px] h-[32px]" />
            </Link>
           
            <Link
              href="https://www.youtube.com/channel/UC3Z23WuWOhmpFnbw9fLI1-g"
              target="_blank"
              rel="norefferer nofollower"
            >
              {" "}
              <FaYoutube className="w-[30px] h-[32px]" />
            </Link>
           
          </div>

          {/* Alt linkler */}
          <div className="flex items-center gap-6 font-jost whitespace-nowrap font-normal leading-[20px] text-[16px] text-lagoGray2">
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <a href="#" className="hover:underline">
              Privacy Notice
            </a>
            <a href="#" className="hover:underline">
              Sustainability
            </a>
            <li className="hover:text-white cursor-pointer">
                  <Link href="/news">Blog</Link>
                </li>
          </div>
        </div>
      </div>

      <div className="flex md:hidden bg-lagoBlack w-screen h-full pt-[29px] pb-[35px] items-center justify-center">
        <div className="flex flex-col gap-[35px] items-center justify-center w-[92%]">
          <Image
            src={logosvg}
            alt="Logo"
            width={167}
            height={66}
            className="object-contain items-center justify-center"
          />

          <div className="grid grid-cols-2 gap-[25px] items-start justify-start font-jost text-[12px] font-normal leading-[24px] w-full ">
            <div className="flex gap-[15px] items-center justify-center">
              <Phone className="flex" width={25} height={25} color="#A6A6A6" />
              <div className="flex flex-col gap-[10px] items-start justify-start">
                <span className="text-[#A6A6A6] leading-[32.53px] capsizedText6 tracking-[0.3px]">
                  Hotel Line
                </span>
                <div className="flex h-[1px] w-full bg-[#D9D9D9]/50"></div>
                <p className="text-[#FBFBFB] leading-[32.53px] capsizedText6">
                  + 90 242 756 99 00
                </p>
              </div>
            </div>

            <div className="flex gap-[15px] items-center justify-center">
              <Phone className="flex" width={25} height={25} color="#A6A6A6" />
              <div className="flex flex-col gap-[10px] items-start justify-start">
                <span className="text-[#A6A6A6] leading-[32.53px] capsizedText6 tracking-[0.3px]">
                  Call Center
                </span>
                <div className="flex h-[1px] w-full bg-[#D9D9D9]/50"></div>
                <p className="text-[#FBFBFB] leading-[32.53px] capsizedText6">
                  + 90 242 524 57 87
                </p>
              </div>
            </div>

            <div className="flex gap-[15px] items-center justify-center">
              <LocationSvg
                className="flex"
                width={26}
                height={26}
                color="#A6A6A6"
              />
              <div className="flex flex-col gap-[10px] items-start justify-start">
                <span className="text-[#A6A6A6] leading-[32.53px] capsizedText6 tracking-[0.3px]">
                  Adress
                </span>
                <div className="flex h-[1px] w-full bg-[#D9D9D9]/50"></div>
                <p className="text-[#FBFBFB] leading-[32.53px] capsizedText6 tracking-[0.3px] whitespace-nowrap">
                  Manavgat/Antalya, TR
                </p>
              </div>
            </div>

            <div className="flex gap-[15px] items-center justify-center">
              <MessageSvg
                className="flex"
                width={26}
                height={26}
                color="#A6A6A6"
              />
              <div className="flex flex-col gap-[10px] items-start justify-start">
                <span className="text-[#A6A6A6] leading-[32.53px] capsizedText6 tracking-[0.3px]">
                  E-mail
                </span>
                <div className="flex h-[1px] w-full bg-[#D9D9D9]/50"></div>
                <p className="text-[#FBFBFB] leading-[32.53px] capsizedText6 tracking-[0.3px]">
                info@azuradeluxe.com
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full items-center justify-center font-jost font-normal text-[14px]">
            <div
              onClick={() => setIsRoomsOpen(!isRoomsOpen)}
              className="flex w-[98%] p-[10px] md:max-w-[306px] items-center justify-between border border-white leading-[26.667px]"
            >
              ACCOMODATION <ArrawDown className="flex" width={25} height={25} />
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isRoomsOpen ? "max-h-[200px] opacity-100 w-[90%]" : "max-h-0 opacity-0 w-[90%]"
              }`}
            >
              <div className="mt-2 space-y-2 pl-4 border-l border-white/30 font-jost">
              <Link
                  href="/rooms/"
                  className="block text-[14px] text-[#A6A6A6] leading-[29.639px] uppercase"
                >
                  All Rooms
                </Link>
                <Link
                  href="/rooms/familyroom"
                  className="block text-[14px] text-[#A6A6A6] leading-[29.639px] uppercase"
                >
                  Family Room
                </Link>
                <Link
                  href="/rooms/deluxeroom"
                  className="block text-[14px] text-[#A6A6A6] leading-[29.639px] uppercase"
                >
                  Deluxe Room
                </Link>
                <Link
                  href="/rooms/fantasyroom"
                  className="block text-[14px] text-[#A6A6A6] leading-[29.639px] uppercase"
                >
                  Fantasy Room
                </Link>
              </div>
            </div>

            <Link
              href="/restaurants"
              className="flex w-[98%] p-[10px] md:max-w-[306px] mt-[15px] items-center justify-between border border-white leading-[26.667px]"
            >
             CUISINE
            </Link>
            <Link
              href="/connect"
              className="flex w-[98%] p-[10px] md:max-w-[306px] mt-[15px] items-center justify-between border border-white leading-[26.667px]"
            >
              CONTACT US{" "}
            </Link>
            <div
                onClick={() => setIsMoreOpen(!isMoreOpen)}
              className="flex w-[98%] p-[10px] md:max-w-[306px] mt-[15px] items-center justify-between border border-white leading-[26.667px]"
            >
              MORE <ArrawDown className="flex" width={25} height={25} />
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isMoreOpen ? "max-h-[200px] opacity-100 w-[90%]" : "max-h-0 opacity-0 w-[90%]"
              }`}
            >
              <div className="mt-2 space-y-2 pl-4 border-l border-white/30 font-jost">
                <Link
                  href="/special"
                  className="block text-[14px] text-[#A6A6A6] leading-[29.639px] uppercase"
                >
                  Special
                </Link>
                <Link
                  href="/kidsclub"
                  className="block text-[14px] text-[#A6A6A6] leading-[29.639px] uppercase"
                >
                  Kids
                </Link>
                <Link
                  href="/gallery/"
                  className="block text-[14px] text-[#A6A6A6] leading-[29.639px] uppercase"
                >
                  Gallery
                </Link>
                
              
              </div>
            </div>
          </div>
          <Link
              href="https://www.instagram.com/azuradeluxeresort/"
              target="_blank"
              rel="norefferer nofollower"
              className="hidden md:flex"
            >
              {" "}
              <FaInstagram className="w-[30px] hidden md:flex h-[32px]" />
            </Link>
            <Link
            className="hidden md:flex"
              href="https://www.facebook.com/AzuraDeluxeResort/"
              target="_blank"
              rel="norefferer nofollower"
            >
              {" "}
              <FaFacebook className="hidden md:flex w-[30px] h-[32px]" />
            </Link>
           
            <Link
            className="hidden md:flex"
              href="https://www.youtube.com/channel/UC3Z23WuWOhmpFnbw9fLI1-g"
              target="_blank"
              rel="norefferer nofollower"
            >
              {" "}
              <FaYoutube className="w-[30px] hidden md:flex h-[32px] " color="#A7ABAD" />
            </Link>
          <div className="flex w-full items-center justify-center gap-[10px]">
            <div className="flex bg-white rounded-[4px] shadow-divCustom w-[42.412px] h-[42.412px] items-center justify-center "><Link
              href="https://www.tripadvisor.com.tr/Hotel_Review-g609052-d7391617-Reviews-Azura_Deluxe_Resort_Spa-Avsallar_Alanya_Turkish_Mediterranean_Coast.html"
              target="_blank"
              rel="norefferer nofollower"
            >
              {" "}
              <FaTripadvisor className="w-[30px] h-[32px]" />
            </Link></div>
            <div className="flex bg-white rounded-[4px] shadow-divCustom w-[42.412px] h-[42.412px] items-center justify-center "> <BSvg className="flex" width={70} height={63}/></div>
            <div className="flex bg-white rounded-[4px] shadow-divCustom w-[42.412px] h-[42.412px] items-center justify-center "><Link
              href="https://www.facebook.com/AzuraDeluxeResort/"
              target="_blank"
              rel="norefferer nofollower"
            >
              {" "}
              <FaFacebook className="w-[30px] h-[32px]" />
            </Link></div>
            <div className="flex bg-white rounded-[4px] shadow-divCustom w-[42.412px] h-[42.412px] items-center justify-center "> <Link
              href="https://www.youtube.com/channel/UC3Z23WuWOhmpFnbw9fLI1-g"
              target="_blank"
              rel="norefferer nofollower"
            >
              {" "}
              <FaYoutube className="w-[30px] h-[32px]" />
            </Link></div>
            <div className="flex bg-white rounded-[4px] shadow-divCustom w-[42.412px] h-[42.412px] items-center justify-center"><Link
              href="https://www.instagram.com/azuradeluxeresort/"
              target="_blank"
              rel="norefferer nofollower"
            >
              {" "}
              <FaInstagram className="w-[30px] h-[32px]" />
            </Link></div>
          </div>
        </div>
      </div>

      {/* Alt ince çizgi */}
      <div className="md:flex hidden w-full h-[1px] bg-gray-400 mt-[60px]" />
      <Link href="https://dgtlface.com"   rel="norefferer nofollower"
                  target="_blank" className="flex w-full text-[14px] font-normal leading-normal font-jost tracking-[0.56px] mb-2 pb-[80px] md:py-[1.8%] text-center justify-center items-center gap-[9.13px] text-[#A6A6A6]">
            Powered by <DgtlfaceSvg className="flex" width={104} height={27} />
      </Link>
    </footer>
  );
}
