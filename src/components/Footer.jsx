import React from "react";
import LogoNoColor from "../icons/Logo-No-Color.svg";
import FooterFB from "../icons/Footer-FB.svg";
import FooterInsta from "../icons/Footer-Insta.svg";
import FooterTwitter from "../icons/Footer-Twitter.svg";
import CopyRight from "../icons/copyright.svg";

const Footer = () => {
  const footerData = [
    {
      id: 1,
      title: "Community",
      p1: "NFT",
      p2: "Tokens",
      p3: "Landlords",
      p4: "Discord",
    },
    {
      id: 2,
      title: "Places",
      p1: "Castle",
      p2: "Farms",
      p3: "Beach",
      p4: "Learn more",
    },
    {
      id: 3,
      title: "About us",
      p1: "Raod map",
      p2: "Creators",
      p3: "Career",
      p4: "Contact us",
    },
  ];
  return (
    <footer className="w-full bg-FooterBgColor p-6 px-20 flex justify-between TabletIN:px-16 NotLaptop:flex-col NotLaptop:gap-6 AllPhones:px-8">
      <div className="flex flex-col gap-12 NotLaptop:gap-6">
        <img className="w-60 NotLaptop:inline-block" src={LogoNoColor} alt="" />
        <div className="flex items-center gap-10 mt-6">
          <img src={FooterFB} alt="" />
          <img src={FooterInsta} alt="" />
          <img src={FooterTwitter} alt="" />
        </div>
        <div className="flex items-center gap-2">
          <img src={CopyRight} alt="" />
          <p className="text-md text-[#F7F7F7]">2022 Metabnb</p>
        </div>
      </div>

      {/* <div className="flex flex-col gap-3">
        <h3 className="font-bold text-[#FFFFFF] text-[18px]">Community</h3>
        <div className="flex flex-col gap-[6px] text-FooterTextColor text-[16px] font-normal">
          <p>NFT</p>
          <p>Tokens</p>
          <p>Landlords</p>
          <p>Discord</p>
        </div>
      </div> */}
      {footerData.map((item) => (
        <div
          key={item.id}
          className={`flex flex-col gap-3 ${
            item.id === 3 && "pr-24 NotLaptop:pr-0"
          }`}
        >
          <h3 className="font-bold text-[#FFFFFF] text-[18px]">{item.title}</h3>
          <div className="flex flex-col gap-[6px] text-FooterTextColor text-[14px] font-normal NotLaptop:flex-row NotLaptop:gap-8 AllPhones:break-words">
            <p>{item.p1}</p>
            <p>{item.p2}</p>
            <p>{item.p3}</p>
            <p>{item.p4}</p>
          </div>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
