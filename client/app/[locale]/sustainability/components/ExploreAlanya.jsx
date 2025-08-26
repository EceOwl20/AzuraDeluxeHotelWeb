'use client';

import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function GeziRehberiPage() {
    const t = useTranslations('Explore');

  const geziVerileri = Array.from({ length: 20 }, (_, i) => ({
  baslik: t(`title${i + 1}`),
  aciklama: t(`description${i + 1}`),
  resim: resimler[i],
  mesafe: mesafeler[i],
}));
      
  return (
    <main className="w-[87.79%] md:w-[90%] lg:w-[76.8%] max-w-[1440px] mx-auto py-8 space-y-10 lg:py-12 lg:space-y-20">
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
            <span className="block mt-2 text-sm md:text-base font-jost text-lagoGray font-medium capitalize">{t("distance")} {yer.mesafe}</span>
          </div>
        </section>
      ))}
    </main>
  );
}
