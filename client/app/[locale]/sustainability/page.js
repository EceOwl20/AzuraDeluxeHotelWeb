"use client";
import React from "react";
import Banner from "../ourpolicies/components/Banner";
import mainImg2 from "../gallery/images/Banner.jpg";
import Image from "next/image";
import ExploreAlanya from "./components/ExploreAlanya";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("Footer");

  const handleClick = (e) => {
    const ok = window.confirm("Sunumu indirmek istediğinize emin misiniz?");
    if (!ok) {
      e.preventDefault(); // vazgeçerse açılmayı durdur
    }
    // onay verdiyse hiçbir şey yapma; link normal şekilde yeni sekmede açılır
  };

  return (
    <div className="flex flex-col w-screen min-h-screen items-center justify-start">
      <Banner img={mainImg2} span="" header={t("sustainability")} />
      <a
        href="/documents/Azura Hotel Sürdürülebilirlik Raporu 2023-2024.pdf"
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center py-[10px] px-[20px] mt-10 text-[20px] cursor-pointer border-b hover:text-lagoBlack2 hover:border-lagoBlack2 hover:font-medium whitespace-nowrap font-jost"
      >
        Sürdürülebilirlik Raporu 2024-2025
      </a>
      <ExploreAlanya />
    </div>
  );
};

export default Page;
