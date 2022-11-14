import React from "react";

// Icon
import Love from "../icons/Love.svg";
import Star from "../icons/Star.svg";

// Image
// import Image1 from "../images/home-second-section-imgs/S - image 1.png";

const NFTCard = ({ item }) => {
  return (
    <div
      style={{ gridTemplateRows: "3fr 1fr" }}
      className="w-[250px] h-[310px] grid rounded-[10px] border p-3 pb-2 border-[#D7D7D7]"
    >
      <div className="w-full relative">
        <figure className="w-full h-full rounded-[10px]">
          <img
            className="w-full object-cover h-full rounded-[10px] border border-[#d7d7d7]"
            src={item.image}
            alt=""
          />
        </figure>
        <img className="absolute top-2 right-2" src={Love} alt="" />
      </div>
      <div className="w-full flex justify-between pt-[14px]">
        <div className=" flex flex-col gap-[6px]">
          <p className=" text-[10.5px]">Desert king</p>
          <p className=" text-[10.5px]">2345km away</p>
          <div className="flex gap-1">
            <img src={Star} alt="Star" />
            <img src={Star} alt="Star" />
            <img src={Star} alt="Star" />
            <img src={Star} alt="Star" />
            <img src={Star} alt="Star" />
          </div>
        </div>
        <div className="flex flex-col gap-[6px]">
          <p className=" text-[10.5px] text-right font-bold">1MBT per night</p>
          <p className=" text-[10.5px] text-right">available for 2weeks stay</p>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
