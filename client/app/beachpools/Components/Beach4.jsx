import React from 'react'

const Beach4 = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full gap-[30px] lg:gap-[50px]'>
        <div className='flex flex-col justify-center items-center gap-[15px] md:gap-[25px] lg:gap-[35px] text-center w-[87.79%] md:w-[91.4%] lg:w-[76.8%]'>
            <p className='font-jost text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase'>Pools Designed for Every Moment</p>
            <h2 className='font-marcellus text-[28px] md:text-[32px] lg:text-[48px] leading-[120%] lg:leading-[57.6px] lg:capsizedText2'>Float Into Relaxation</h2>
            <p className='font-jost text-[14px] lg:text-[16px] leading-normal w-[90%] md:w-[70%] xl:w-[60%]'>Lorem ipsum dolor sit amet consectetur. Diam pharetra ipsum elementum felis. Faucibus  mauris mattis egestas ultricies convallis egestas sodales. Ac neque duis libero vitae  pellentesque ornare ac sem massa. Sit lectus pretium pulvinar cras magna nisi in. Odio sed.</p>
        </div>
        <div className="relative w-screen min-h-[calc(50vh+73px)] overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover object-center"
                loading="lazy"
            >
                <source 
                 src="/videos/azuramob2.mp4"
                type="video/mp4"
               
                />
                Tarayıcınız bu videoyu desteklemiyor.
            </video>
        </div>   
    </div>
  )
}

export default Beach4