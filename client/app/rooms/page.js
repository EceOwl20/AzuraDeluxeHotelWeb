import React from "react";
import RoomsBanner from "./components/RoomsBanner";
import RoomsInfoSection from "./components/RoomsInfoSection";
import RoomsSection from "./components/RoomsSection";
import RoomsSectionReverse from "./components/RoomsSectionReverse";
import RoomsParallaxSection from "./components/RoomsParallaxSection";

import imgFamily from "./images/odalar2-1.webp";
import imgFamily2 from "./images/oda2-2.webp";
import imgSuperior from "./images/superiorRooms.png";
import imgSuperior2 from "./images/oda1-2.webp";

import imgSwim from "./images/oda3-1.webp";
import imgSwim2 from "./images/oda3-2.webp";

import imgFamilySwim from "./images/oda4-1.webp";
import imgFamilySwim2 from "./images/oda4-2.webp";

import imgTinyvilla from "./images/oda5-1.webp";
import imgTinyvilla2 from "./images/oda5-2.webp";

import imgDuplex from "./images/oda6-1.webp";
import imgDuplex2 from "./images/odalar6-2.webp";
import ContactSection2 from "../GeneralComponents/Contact/ContactSection2";

const page = () => {
  return (
    <div className="overflow-hidden flex flex-col items-center justify-center gap-[50px] lg:gap-[100px] bg-[#fbfbfb]">
      <RoomsBanner />
      <RoomsInfoSection />
      <RoomsSection
      id="superiorroom"
        img={imgSuperior}
        img2={imgSuperior2}
        header=" Deluxe Room"
        text=" Deluxe rooms (30-32 m²) are located from the first to the seventh floor in the main building, 4 of which are handicapped rooms on the ground floor with all necessary equipment."
        span="30-32 m2"
        span2="Land/Sea View"
        link="/rooms/deluxestandardroom" 
      />
      <RoomsSectionReverse
      id="familyroom"
        img={imgFamily}
        img2={imgFamily2}
        header="Family Room"
        text=" Maximum accommodation is 2 adults and 2 children, 3 adults and 1 child and 4 adults and 1 child.Our rooms; 2 bedrooms (with connecting door, 1 double bed and 2 single beds)"
        span=" 50 m2"
        span2="Land/Sea View"
        link="/rooms/familyroom" 
      />

      <RoomsSection
        img={imgFamilySwim}
        img2={imgFamilySwim2}
        header="Fantasy Room"
        text="  All specially designed rooms with sea views have a Jacuzzi on the terrace.
1 Bedroom (1 double bed), 1, 25 m2 terrace, sunbed on the terrace.
Only 2 people (couples) can stay in Fantasy Sea View Rooms."
        span=" 58 m2"
        span2="Sea View"
        link="/rooms/fantasyroom" 
      />



      <RoomsParallaxSection />
      <ContactSection2/>
    </div>
  );
};

export default page;
