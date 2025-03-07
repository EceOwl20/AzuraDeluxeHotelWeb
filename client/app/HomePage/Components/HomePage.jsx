import React from 'react'
import Reservation from './Reservation'
import Image from 'next/image'
import sembol from "./Icons/sembol2.svg"

export default function HomePage() {
  return (
    <div className="relative w-screen min-h-screen overflow-hidden ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[30]"
      >
        <source 
          src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1188089547498931215/d14ec0b26d588b30438bb381795405ab39e1cb18?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FIMG8GahJSMnvRPrQ6iVHFfIuxYH0ev98~SGohP4eCPAAyDFC6TdjeHN2L6h-sRM-wVr7HIyGNIRQMivp2809-aZmQgcslF~mAf67kqUac3TA4xI51voyQTKDkeLQy1iNWOExNdKy14VGleHKqp2TK~ey5xa8gPdS90BNSEl-SGYeZMJdSlmcX2J0GU23v9S0uCfdyMAEcuQzDS04YYDJ~KCpV8CqWiXIquPFEb1a~sCXG6HS~BUVbis3NDHwpXJ8k9nU9ben-4aG2LtKNjZUDL-mYlOgd~cU-I3JAOSPgD8CnXiSfaHhcKtQbdBT1w~k3z4qjWJfxoSmo3jRFzutw__"
          type="video/mp4"
        />
        Tarayıcınız bu videoyu desteklemiyor.
      </video>
      <Image
      alt='logo'
      src={sembol}
      width={454.81}
      height={647}
      className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[40] w-[40vh] lg:w-[50vh] 2xl:w-[45vh] h-auto mix-blend-overlay'
      />
      

      <Reservation/>
      
    </div>
  )
}
