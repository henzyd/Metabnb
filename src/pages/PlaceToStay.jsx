import React from "react";

// COMPONENTS
import NFTCard from "../components/NFTCard";

// ICON
import Setting from "../icons/setting.svg";
// import { HiMenuAlt2 } from "react-icons/hi";

// IMAGES
import SImage1 from "../images/home-second-section-imgs/S - image 1.png";
import SImage2 from "../images/home-second-section-imgs/S - image 2.png";
import SImage3 from "../images/home-second-section-imgs/S - image 3.png";
import SImage4 from "../images/home-second-section-imgs/S - image 4.png";
import SImage5 from "../images/home-second-section-imgs/S - image 5.png";
import SImage6 from "../images/home-second-section-imgs/S - image 6.png";
import SImage7 from "../images/home-second-section-imgs/S - image 7.png";
import SImage8 from "../images/home-second-section-imgs/S - image 8.png";
import PImage1 from "../images/place-to-stay/PTS - 1.png";
import PImage2 from "../images/place-to-stay/PTS - 2.png";
import PImage3 from "../images/place-to-stay/PTS - 3.png";
import PImage4 from "../images/place-to-stay/PTS - 4.png";
import PImage5 from "../images/place-to-stay/PTS - 5.png";
import PImage6 from "../images/place-to-stay/PTS - 6.png";
import PImage7 from "../images/place-to-stay/PTS - 7.png";
import PImage8 from "../images/place-to-stay/PTS - 8.png";

const PlaceToStay = () => {
  const NFTData = [
    {
      id: 1,
      image: SImage5,
    },
    {
      id: 2,
      image: SImage6,
    },
    {
      id: 3,
      image: SImage7,
    },
    {
      id: 4,
      image: SImage8,
    },
    {
      id: 5,
      image: SImage1,
    },
    {
      id: 6,
      image: SImage2,
    },
    {
      id: 7,
      image: SImage3,
    },
    {
      id: 8,
      image: SImage4,
    },
    {
      id: 9,
      image: PImage1,
    },
    {
      id: 10,
      image: PImage2,
    },
    {
      id: 11,
      image: PImage3,
    },
    {
      id: 12,
      image: PImage4,
    },
    {
      id: 13,
      image: PImage5,
    },
    {
      id: 14,
      image: PImage6,
    },
    {
      id: 15,
      image: PImage7,
    },
    {
      id: 16,
      image: PImage8,
    },
  ];
  return (
    <div style={{ width: "100%" }} className="flex flex-col items-center">
      <div className="flex items-center justify-between px-12 w-full Tablet:px-24 AllPhones:px-8 NotLaptop:sticky NotLaptop:z-10 NotLaptop:top-0 NotLaptop:bg-white NotPhonesOrTablet:hidden border-t border-b py-2">
        {/* <button className="outline-0 NotPhonesOrTablet:hidden">
          <HiMenuAlt2
            className="w-[2.2rem] h-[2.2rem] VerySmallPhones:w-[1.6rem] VerySmallPhones:h-[1.6rem] fill-TextBlack"
            stroke="#434343"
          />
        </button> */}
        <div className="flex w-full items-center gap-14 font-normal text-[12px] overflow-x-scroll shadow-[20px 20px 50px 10px pink inset]">
          <p>Resturant</p>
          <p>Cottage</p>
          <p>Castle</p>
          <p>fantast city</p>
          <p>beach</p>
          <p>Carbins</p>
          <p>Off-grid</p>
          <p>Farm</p>
          <div className="flex items-center gap-8 p-3 pr-8 border border-[#B4B4B4] rounded-[8px]">
            <p>Location</p>
            <img className="" src={Setting} alt="" />
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-start gap-14 p-12 py-4 mt-7 text-[16px] text-TextBlack LaptopButINB:gap-8 LaptopButINB:text-[14px] Laptop:gap-10 NotLaptop:hidden">
        <p>Resturant</p>
        <p>Cottage</p>
        <p>Castle</p>
        <p>fantast city</p>
        <p>beach</p>
        <p>Carbins</p>
        <p>Off-grid</p>
        <p>Farm</p>
        <div className="flex items-center gap-8 p-3 border border-[#B4B4B4] rounded-[8px]">
          <p>Location</p>
          <img src={Setting} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-4 place-content-center gap-6 mb-9 py-9 AllPhones:grid-cols-1 Tablet:grid-cols-2">
        {" "}
        {/* p-24 py-9*/} {/* p-[7.45%] */}
        {NFTData.map((item) => (
          <NFTCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PlaceToStay;
