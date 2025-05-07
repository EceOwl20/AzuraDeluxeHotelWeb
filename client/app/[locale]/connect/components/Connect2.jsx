import React from 'react'
import Image from 'next/image'
import image from '../Image/contact1.jpg'
import {useTranslations} from 'next-intl';

const Connect2 = () => {
  const t = useTranslations('ContactPage');

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Arka plan resmi container'ı: genişlik 978px, yükseklik 744px, solda kaydırılmış */}
      <div className="relative w-full lg:w-[978px] lg:h-[744px] lg:-ml-[15%]">
        <Image
          src={image}
          alt="Resim"
        
          width={image.width}
          height={image.height}
          className="object-cover w-full min-h-[650px]"
          priority
        />
      </div>
      
      {/* Form overlay */}
      <div className="absolute flex flex-col min-w-[350px] w-[78vw] max-w-[480px] min-h-[30vh] md:min-h-[40vh] lg:w-[480px] lg:h-[684px] top-1/2  -translate-y-1/2 lg:-translate-y-0 lg:translate-x-0  lg:top-[4%] xl:left-[55%] bg-white shadow-lg p-[18px] lg:p-[22px] z-10 text-center items-center justify-center">
        <h2 className="lg:text-[42px] md:text-[32px] text-[24px] font-normal text-center font-marcellus text-lagoBlack leading-normal lg:leading-[50px] lg:mt-2 w-full capsizedText2 whitespace-pre-line mb-[15px] lg:mb-[25px] lg:hidden">
        {t.rich('dropMessage', {
    br: () => <br />
  })}
        </h2>

        <h2 className="lg:text-[42px] hidden lg:flex md:text-[32px] text-[24px] font-normal text-center font-marcellus text-lagoBlack leading-normal lg:leading-[50px] lg:mt-2 w-full capsizedText2 whitespace-pre-line mb-[15px] lg:mb-[25px]">
        {t('dropMessage2')}
        </h2>

        <p className="text-lagoGray text-[14px] lg:text-[16px] font-normal font-jost leading-[18px] lg:leading-[26px] w-[100%] lg:w-[95%] capsizedText4 mb-[15px] md:mb-[25px]">
        {t("connectPrompt")}
        </p>
        {/* Yatay çizgi */}
        <hr className=" border-black w-1/2 mx-auto mb-[20px] md:mb-[25px]" />

        <form className="flex flex-col w-full h-auto">
          {/* Full Name */}
          <div className="mb-[10px] lg:mb-[17px]">
            <input
              id="fullName"
              type="text"
              placeholder= {t("yourFullName")}
              className="block w-full border border-gray-300 px-3 py-2 lg:px-[24px] lg:py-[18px] placeholder:text-[14px] placeholder:lg:text-[16px] placeholder:font-jost"
            />
          </div>
          {/* Email Address */}
          <div className="mb-[10px] lg:mb-[17px]">
            <input
              id="email"
              type="email"
              placeholder= {t("yourEmailAddress")}
              className="block w-full border border-gray-300 px-3 py-2 lg:px-[24px] lg:py-[18px] placeholder:text-[14px] placeholder:lg:text-[16px] placeholder:font-jost"
            />
          </div>
          {/* Your Message */}
          <div className="">
            <textarea
              id="message"
              rows="4"
              placeholder= {t("yourMessage")}
              className="block w-full border border-gray-300  px-3 py-2 lg:px-[24px] lg:py-[18px] placeholder:text-[14px] placeholder:lg:text-[16px] max-h-[137px] placeholder:font-jost"
            ></textarea>
          </div>
          {/* Checkbox */}
          <div className="flex w-[90%] items-center justify-center">
            <input
              id="saveInfo"
              type="checkbox"
              className="h-4 w-4 border border-gray-300 rounded mr-2 mt-4"
            />
            <label htmlFor="saveInfo" className="text-[12px] lg:text-[14px] text-gray-600 mt-[18px] lg:mt-[24px] font-jost">
            {t("saveDetails")}
            </label>
          </div>
          {/* Send Message Button (Outline Style) */}
          <button
            type="submit"
            className="
            
              mx-auto
              border
              border-[#472C10]
              bg-transparent
              px-6
              py-3
              lg:mt-[18px]
              hover:bg-black
              hover:text-white
              transition-colors
              text-[14px] lg:text-[16px]
              uppercase
              leading-[18px] lg:leading-[26px]
              font-jost text-lagoBlack whitespace-nowrap
              w-auto items-center justify-center mt-2
              
            "
          >
              {t("sendMessage")}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Connect2
