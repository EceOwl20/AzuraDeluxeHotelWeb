"use client"
import React, { useState, useEffect } from "react"
import {useTranslations} from 'next-intl';
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Image from "next/image"
import img1 from "../images/Image-1.jpg"
import img2 from "../images/Image-2.jpg"
import img3 from "../images/Image-3.jpg"
import img4 from "../images/Image-4.jpg"
import img5 from "../images/Image-5.jpg"
import img6 from "../images/Image-6.jpg"
import img7 from "../images/Image-7.jpg"
import img8 from "../images/Image-8.jpg"
import img9 from "../images/Image-9.jpg"
import img10 from "../images/Image-10.jpg"
import img11 from "../images/Image-11.jpg"
import img12 from "../images/Image-12.jpg"
import img13 from "../images/Image-13.jpg"
import img14 from "../images/Image-14.jpg"
import img15 from "../images/Image-15.jpg"
import img16 from "../images/Image-16.jpg"
import img17 from "../images/Image-17.jpg"
import img18 from "../images/Image-18.jpg"
import img19 from "../images/Image-19.jpg"
import img20 from "../images/Image-20.jpg"
import img21 from "../images/Image-21.jpg"
import img22 from "../images/Image-22.jpg"
import img23 from "../images/Image-23.jpg"
import img24 from "../images/Image-24.jpg"
import img25 from "../images/Image-25.jpg"
import img26 from "../images/Image-26.jpg"
import img27 from "../images/Image-27.jpg"
import img28 from "../images/Image-28.jpg"
import img29 from "../images/Image-29.jpg"

import img30 from "../../restaurants/bellaazura/images/bellaazura.webp"
import img31 from "../../restaurants/images/blok222.webp"
import img32 from "../../restaurants/images/Banner.jpg"
import img33 from "../../restaurants/images/ottoman.webp"
import img34 from "../../restaurants/images/LYRIC.jpg"
import img35 from "../../restaurants/images/MAZURKA.jpg"
import img36 from "../../restaurants/images/blok2.jpg"
import img37 from "../../restaurants/images/blok21.jpg"
import img38 from "../../restaurants/images/blok22.jpg"

import img39 from "../../restaurants/images/discoverbarsparallax.jpg"
import img40 from "../../restaurants/images/Patisserie.webp"
import img41 from "../../bars/images/Pierbar.png"
import img42 from "../../bars/images/discobar.png"
import img43 from "../../bars/images/Chacha.png"
import img44 from "../../bars/images/POOL.png"
import img45 from "../../bars/images/blok2.png"

import img46 from "../images/entertainment/1.jpg"
import img47 from "../images/entertainment/2.jpg"
import img48 from "../images/entertainment/500.jpg"
import img49 from "../images/entertainment/5042.jpg"
import img50 from "../images/entertainment/2150407949.jpg"
import img51 from "../images/entertainment/ent_ban.jpg"
import img52 from "../images/entertainment/FITNESS CENTER.jpg"
import img53 from "../images/entertainment/Screenshot16.jpg"
import img54 from "../images/entertainment/Screenshot57.jpg"
import img55 from "../images/entertainment/Screenshot59.jpg"
import img56 from "../images/entertainment/Screenshot00.jpg"
import img57 from "../images/entertainment/Screenshot05.jpg"

import img58 from "../images/spa/indoor.webp"
import img59 from "../images/spa/spa1.webp"
import img60 from "../images/spa/spa10.webp"
import img61 from "../images/spa/spa2.webp"
import img62 from "../images/spa/spa3.webp"
import img63 from "../images/spa/spa4.webp"
import img64 from "../images/spa/spa5.webp"
import img65 from "../images/spa/spa6.webp"
import img66 from "../images/spa/spa7.webp"
import img67 from "../images/spa/spa8.jpg"
import img68 from "../images/spa/spa9.webp"
import img69 from "../images/spa/spa10.webp"
import img70 from "../images/spa/SPAcopy.webp"


import img83 from "../../kidsclub/images/1.jpg"
import img71 from "../../kidsclub/images/kids1.webp"
import img72 from "../../kidsclub/images/KIDS2.webp"
import img73 from "../../kidsclub/images/2149046677.jpg"
import img75 from "../../kidsclub/images/kids3.webp"
import img76 from "../../kidsclub/images/kids4.webp"
import img77 from "../../kidsclub/images/kids5.webp"
import img78 from "../../kidsclub/images/kids6.webp"
import img79 from "../../kidsclub/images/kids7.jpg"
import img80 from "../../kidsclub/images/kids8.jpg"
import img81 from "../../kidsclub/images/kids9.jpg"


// Kategorilere göre resimler
const imageCategories = {
  "GENERAL": [img4,img9,img25,img6, img28, img19, img22, img11, img13, img5, img1, img7, img16, img10, img20, img23, img26, img12, img14, img27, img2, img8, img18, img3, img21, img24, img29, img15, img17],
  ROOMS: [img2,img3,img6,img11,img12,img23,img27],
  RESTAURANT: [img13,img17,img30,img31,img32,img33,img34,img35,img36,img37,img38,img40],
  BARS: [img39,img41,img42,img43,img44,img45],
  "POOL & BEACH": [img8,img9,img16,img21,img22,img24,img28],
  ENTERTAINMENT: [img46,img47,img48,img49,img50,img51,img52,img53,img54,img55,img56,img57],
  "KIDS": [img83,img71,img72,img73,img75,img76,img77,img78,img79,img80,img81],
  "SPA": [img10,img20,img26,img58,img59,img60,img63,img64,img65,img66,img67,img68,img70],
  MEETING:[]
}

const categories = Object.keys(imageCategories)

const GalleryScrollSection = () => {
  const [modalIndex, setModalIndex] = useState(null);
  // Seçili kategori (başlangıçta "GENERAL VIEW")
  const [selectedCategory, setSelectedCategory] = useState("GENERAL")
  const [modalImage, setModalImage] = useState(null) // Seçilen resmi tutacak state

  const openModal = (img, index) => {
    setModalImage(img);
    setModalIndex(index);
  };

  const scrollPrev = () => {
    const images = imageCategories[selectedCategory];
    const newIndex = modalIndex === 0 ? images.length - 1 : modalIndex - 1;
    setModalIndex(newIndex);
    setModalImage(images[newIndex]);
  };

  // Sağ ok: index'i artır, wrap-around uygulayarak ilk elemana geçsin
  const scrollNext = () => {
    const images = imageCategories[selectedCategory];
    const newIndex = modalIndex === images.length - 1 ? 0 : modalIndex + 1;
    setModalIndex(newIndex);
    setModalImage(images[newIndex]);
  };

  useEffect(() => {
    if (!modalImage) return; // Modal kapalıysa listener ekleme
    
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        scrollPrev();
      } else if (e.key === "ArrowRight") {
        scrollNext();
      } else if (e.key === "Escape") {
        setModalImage(null);
      }
    };
  
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [modalImage, scrollPrev, scrollNext]);


  return (
    <div className="flex w-screen items-center justify-center mt-[50px] max-w-[1440px]">
      <div className="flex flex-col items-center justify-between w-[87.79%] md:w-[91.4%] lg:w-[76.8%] gap-[40px]">
        
        {/* Butonlar */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:flex items-center justify-center xl:justify-between gap-[10px] w-full max-w-[1008px]">
          {Object.keys(imageCategories).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex border border-lagoGray items-center justify-center whitespace-nowrap py-[12px] px-[16px] lg:py-[16px] lg:px-[20px] lg:w-[140px] text-[12px] lg:text-[14px] font-medium uppercase leading-[125%] -tracking-[0.33px] font-jost ${
                selectedCategory === category ? "bg-lagoGray text-white" : "text-lagoGray"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Resimler */}
        <div className="flex lg:w-[1006px] h-[500px] md:h-[1000px] lg:h-[1700px]">
          <div className="flex flex-col w-full overflow-auto hover:overflow-scroll custom-scroll h-auto">
            <div className="columns-2 lg:columns-3 gap-[16px] lg:gap-[0px] transition-all duration-[350ms] ease-in-out cursor-pointer">
              {imageCategories[selectedCategory].map((imgSrc, index) => (
                <div
                  className="mb-[19.16px] transition-all duration-[350ms] ease-in-out cursor-pointer"
                  key={index}
                  onClick={() => openModal(imgSrc,index)} // Resme tıklandığında modal açılır
                >
                  <Image src={imgSrc} alt="gallery" className="lg:w-[322px] h-full" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal (Lightbox) */}
        {modalImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            onClick={() => setModalImage(null)} // Modal dışına tıklandığında kapanır
          >
            <div className="relative w-[35%] " onClick={(e) => e.stopPropagation()}>
              <Image src={modalImage} alt="Enlarged gallery" className="w-full h-auto object-contain max-h-[720px]" />
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-gray-700 bg-opacity-50 hover:bg-opacity-75 text-white"
                onClick={scrollPrev}
                aria-label="Previous"
              >
                <MdArrowBackIosNew size={32} />
              </button>
              {/* Sağ Ok */}
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-gray-700 bg-opacity-50 hover:bg-opacity-75 text-white"
                onClick={scrollNext}
                aria-label="Next"
              >
                <MdArrowForwardIos size={32} />
              </button> 
            </div>
            <button
                className="absolute top-6 right-4 text-white text-4xl"
                onClick={() => setModalImage(null)}
              >
                &times;
              </button>
          </div>
        )}

      </div>
    </div>
  )
}

export default GalleryScrollSection
