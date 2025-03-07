import React from 'react'
import Slider from "../../HomePage/Components/Slider/Slider2"
import Slide1 from '../Images/Slide/swim.png'
import Slide2 from '../Images/Slide/beachbar.png'
import Slide3 from '../Images/Slide/watersport.png'
import Slide4 from '../Images/Slide/celebration.png'

const Beach3 = () => {
    const slides = [
        { src: Slide1, title: "Swimming & Lounging", span:"all day round" },
        { src: Slide2, title: "Refresh at the Beach Bar", span:"Cocktaıls & snacks" },
        { src: Slide3, title: "Water Sports", span:"all day round" },
        { src: Slide4, title: "Celebrate  at the Beach", span:"DURATION: 60 MIN" },
      ]
  return (
    <div className='flex flex-col w-full gap-[30px] lg:gap-[50px] items-center justify-center'>
        <div className='flex flex-col gap-[20px] md:gap-[25px] lg:gap-[35px] w-[87.79%] md:w-[91.4%] lg:w-[76.8%] ml-[6.1%] md:ml-0 items-start justify-center text-start'>
          <p className='font-jost text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase'>RELAX AND FORGET</p>
          <h3 className='font-marcellus text-[28px] md:text-[32px] lg:text-[48px] font-normal leading-[120%] lg:leading-[57.6px] capsizedText2'>Activities at the Beach</h3>
          <p className='font-jost text-[14px] lg:text-[16px] font-normal leading-normal lg:leading-[24px] capsizedText4 w-full md:max-w-[85%] lg:max-w-[727px]'>Lorem ipsum dolor sit amet consectetur. Consectetur lorem nibh ultrices quis sit. Ac amet mollis erat enim. Velit venenatis lectus orci viverra dis turpis. Tempor vehicula risus massa sed vestibulum dui nulla vulputate.</p>
        </div>
        <Slider slides={slides} />
    </div>
  )
}

export default Beach3