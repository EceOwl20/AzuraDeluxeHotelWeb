'use client';

import Image from 'next/image';
import {useTranslations} from 'next-intl';
import img1 from "../images/dimmagarasi.jpg"
import img2 from "../images/alanyateleferik.jpeg"
import img3 from "../images/sapaderekanyonu.jpg"
import img4 from "../images/selcuklutershanesi.jpg"
import img5 from "../images/alayaAtaturkevi.webp"
import img6 from "../images/Antalya-Kleopatra-Plaji.jpg"
import img7 from "../images/denizfeneri.webp"
import img8 from "../images/damlatasplaji.jpg"
import img9 from "../images/alanyakalesi.jpg"
import img10 from "../images/kizilkule.webp"
import img11 from "../images/damlatasmagarasi.jpg"
import img12 from "../images/alanyamuzesi.jpg"
import img13 from "../images/syedra-antik.webp"
import img14 from "../images/portakalplaji.webp"
import img15 from "../images/suleymaniyecamii.webp"
import img16 from "../images/dejavubar.jpeg"
import img17 from "../images/greenbody.webp"
import img18 from "../images/asiklarmagarasi.jpg"
import img19 from "../images/benlidere.webp"
import img20 from "../images/kediparki.jpeg"

const resimler = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20]

export default function GeziRehberiPage() {
    const t = useTranslations('ExploreAlanya');

  const geziVerileri = Array.from({ length: 20 }, (_, i) => ({
  baslik: t(`title${i + 1}`),
  aciklama: t(`description${i + 1}`),
  resim: resimler[i],
  // mesafe: mesafeler[i],
}));
      
  return (
    <main className="w-[87.79%] md:w-[90%] lg:w-[76.8%] max-w-[1440px] mx-auto py-8 space-y-10 lg:py-12 lg:space-y-20 overflow-x-hidden">
      {/* <a href="/documents/Azura Hotel Sürdürülebilirlik Raporu 2023-2024.pdf" target="_blank"  rel="noopener noreferrer" className="hover:underline">
            {t("sustainability")}
            </a> */}
      <h2 className="text-[28px] md:text-[32px] lg:text-[44px] font-marcellus text-lagoBlack">{t("header")}</h2>

      {geziVerileri.map((yer, i) => (
        <section
          key={i}
          className={`flex h-full flex-col-reverse lg:flex-row ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''} items-center gap-6 md:gap-10 lg:gap-[8%] justify-center`}
        >
          <div className="w-full lg:w-[46%]">
            <Image
              src={yer.resim}
              alt={yer.baslik}
              width={600}
              height={400}
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>
          <div className="w-full lg:w-[46%] text-lagoGray items-center justify-center h-full">
            <h3 className="text-[28px] md:text-[32px] lg:text-[36px] font-marcellus text-lagoBlack2 mb-2">{yer.baslik}</h3>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] font-jost">{yer.aciklama}</p>
            {/* <span className="block mt-2 text-sm md:text-base font-jost text-lagoGray font-medium capitalize">{t("distance")} {yer.mesafe}</span> */}
          </div>
        </section>
      ))}
    </main>
  );
}
