
import Link from 'next/link'
import React from 'react'

const Connect3 = () => {
  return (
    <div className="flex flex-col items-center w-full px-4 py-8">
      {/* Üst Çizgi kaldırıldı veya başka yerde kullanılabilir */}

      {/* Başlık */}
      <h2 className="text-[32px] lg:text-[40px] font-marcellus font-normal text-center mt-5 mb-5">
        Address
      </h2>

      {/* Yatay çizgi: Başlığın hemen altında */}
      <hr className="w-full max-w-4xl border-gray-300 mb-6 mx-auto" />

      {/* Adres Metni */}
      <Link href="https://maps.app.goo.gl/usJ9fRr3Po35C3bw8"   rel="norefferer nofollower"
                  target="_blank"  className="text-center text-lagoBlack font-normal font-jost text-[14px] lg:text-[16px] leading-[24px] mb-12 underline">
      Avsallar Mah. İncekum Cad. No:76 Alanya / Turkey
      </Link>

      {/* Harita Alanı */}
      <div className="w-full max-w-[1106px] h-[620px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.2838216078544!2d31.76600607593326!3d36.61955427786161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dcafb246cf65f9%3A0xdb5e32db1f07e8b0!2sAzura%20Deluxe%20Resort%20%26%20Spa!5e0!3m2!1sen!2str!4v1741618787539!5m2!1sen!2str"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
    </div>
  )
}

export default Connect3
