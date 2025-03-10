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
        className='hidden lg:flex'
          src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1188089547498931215/d14ec0b26d588b30438bb381795405ab39e1cb18?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FIMG8GahJSMnvRPrQ6iVHFfIuxYH0ev98~SGohP4eCPAAyDFC6TdjeHN2L6h-sRM-wVr7HIyGNIRQMivp2809-aZmQgcslF~mAf67kqUac3TA4xI51voyQTKDkeLQy1iNWOExNdKy14VGleHKqp2TK~ey5xa8gPdS90BNSEl-SGYeZMJdSlmcX2J0GU23v9S0uCfdyMAEcuQzDS04YYDJ~KCpV8CqWiXIquPFEb1a~sCXG6HS~BUVbis3NDHwpXJ8k9nU9ben-4aG2LtKNjZUDL-mYlOgd~cU-I3JAOSPgD8CnXiSfaHhcKtQbdBT1w~k3z4qjWJfxoSmo3jRFzutw__"
          type="video/mp4"
        />
           <source 
        className='lg:hidden flex'
          src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1188089547498931215/5cf317e854d2baebcdcc1a4bfa1b4d9189132e8b?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=txWDebC-wBturBBPwQUs-eoSqip77IjUhjnWkZpVNn0d-bKvxvb3b7Jv-HQmrQGtoTvSBbdgs7JJrBt6crQG1SKJYTQEMYUnsdT0B4oGULYR9CAhCL9wNZmCGwfV19Q1cFHOR8R6lHRol6eYQTBZ40zPzUEMFQ2~NXExpxt5D~W5ZV78Z3-P-FQ~3FUUFjYJw9FkWBJZ-7ojII1YQo3YDZvu1Jl2URNmHfSnaJrgtuN0vfZoXHA4N8Wdgk59nmiQfFF6svcYZHlma30~S4XkK2CsZMibzm4ywtosOAoZqdSm5J22x6nq~JFh6kXv8MXwDaawQMqadf6k~4eXtn2YYQ__"
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
