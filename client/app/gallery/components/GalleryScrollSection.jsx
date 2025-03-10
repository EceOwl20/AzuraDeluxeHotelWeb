"use client"
import React, { useState } from "react"
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


// Kategorilere göre resimler
const imageCategories = {
  "GENERAL": [img4,img9,img25,img6, img28, img19, img22, img11, img13, img5, img1, img7, img16, img10, img20, img23, img26, img12, img14, img27, img2, img8, img18, img3, img21, img24, img29, img15, img17],
  ROOMS: [img2,img3,img6,img11,img12,img23,img27],
  RESTAURANT: [img13,img17],
  BARS: [],
  "POOL & BEACH": [img8,img9,img16,img21,img22,img24,img28],
  ENTERTAINMENT: [],
  "KIDS": [],
  "SPA": [img10,img20,img26],
  MEETING:[]
}

const categories = Object.keys(imageCategories)

const GalleryScrollSection = () => {
  // Seçili kategori (başlangıçta "GENERAL VIEW")
  const [selectedCategory, setSelectedCategory] = useState("GENERAL")
  const [modalImage, setModalImage] = useState(null) // Seçilen resmi tutacak state

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
                  onClick={() => setModalImage(imgSrc)} // Resme tıklandığında modal açılır
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
            <div className="relative w-[80%] max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <Image src={modalImage} alt="Enlarged gallery" className="w-full h-auto object-contain" />
              <button
                className="absolute top-4 right-4 text-white text-2xl"
                onClick={() => setModalImage(null)}
              >
                &times;
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default GalleryScrollSection
