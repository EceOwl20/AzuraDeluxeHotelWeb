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
        className="absolute top-0 left-0 w-full h-full object-cover z-[30] lg:hidden flex"
      >
           <source 
        className=''
          src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1188089547498931215/5cf317e854d2baebcdcc1a4bfa1b4d9189132e8b?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Qm65Z4ShBwegzuc-dP0jEHH3OSFkQ~DjzSYFA2g2qMqdn4Nu-nnFeR3P7OsBYv6I0O-8dv2xBJuWBgM13cAFLTp12dLw8PxCqJhaV5GRpcyGnhCbExz74blOKdb2CKdOSasxCpVKRscqxOQ6oEKsGhmuUwhefrhFq~9JGWjaPWeYnsug1BGOUN-EUtNDHXjs-aMHLMT8N-68vbIAfRJeZZrzmPwOe-HNJQSOEKrip7NCE7hfCWy9fPoDFeAoPr-cxTxWBn71n8yZaYaM~XNOz2bFTaIQSn-jbKo6SaJTXdaOePZwG5rXMJzDnPzaXl5bHTyK7K87hxgitiqxO0bC7w__"
          type="video/mp4"
        />

        Tarayıcınız bu videoyu desteklemiyor.
      </video>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[30] hidden lg:flex"
      >
        <source 
        className=''
           src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1188089547498931215/d14ec0b26d588b30438bb381795405ab39e1cb18?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LpxhtgSt3eYx1HqkEGnWi8e-vtjlAW3aJ2Xa9e8zGunS3JUL7EpDTN8i9JfJKjkTgfgrBdcwhjV0JEqoXkVy5SOAVUhFDY1u3UQ9BlH1b7xHaZKW-F2XGLOMcp6Zqpk3TaIIBXhsElC8ScN-jm-ZmrAbthj0jGkRw~U~CX1x3mBeJihEXuaR5GG3W4qa9hUf0UqvY1IXogWJp~43OYLJzolmjvZ6plSp8vSn~CxZ9qFD1BOpXWx~7i97612Ftu599QL2xqZnywkDsrBsCJgXD1ccZe3OE9N0GS5SJpbW12VylvIASYY3TVPyzRI05mKpr-FpuMp38h4TtOaTFSS3yw__"
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
