import React from "react";

import "../App.css";
// ICON
import X from "../icons/modal x.svg";

// IMAGES
import Metamask from "../images/metamask.png";
import Walletconnect from "../images/walletconnect.png";
import Next from "../icons/next.svg";

const ConnectWallets = ({ display, setModalVisible }) => {
  function removeModal() {
    console.log(display);
    setModalVisible("hidden");
  }
  //  w-[500px] h-[300px]
  // absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[50%]
  // w-full h-[100%] fixed top-0 bottom-0 left-0 right-0
  return (
    <div
      // id="parent"
      className={`z-20 bg-[#4040404D] ${display} w-full h-[100vh] fixed place-content-center top-0`}
    >
      {/* <div className="child"></div> */}
      <div className="bg-white rounded-[16px] abolute top-[50%] left-[-50%] ">
        <div
          className="p-8 border-b border-[#CFD8DC] py-4 flex items-center justify-between Phones:p-4 VerySmallPhones:p-4
        "
        >
          <h1 className="font-bold text-xl InbetweenPhone:text-[18px] Phones:text-[16px] VerySmallPhones:text-[16px]">
            Connect Wallet
          </h1>
          <img
            className="w-[22px] cursor-pointer InbetweenPhone:w-[20px]"
            src={X}
            alt=""
            onClick={removeModal}
          />
        </div>
        <div className="flex flex-col p-6 w-[500px] gap-3 pb-7 InbetweenPhone:w-[390px] Phones:w-[310px] Phones:p-4 Phones:pb-5 VerySmallPhones:w-[280px] VerySmallPhones:p-4 VerySmallPhones:pb-5 ">
          <p className=" InbetweenPhone:text-[14px] Phones:text-[12px] VerySmallPhones:text-[12px]">
            Choose your preferred wallet:
          </p>
          <div className="border-[#CFD8DC] border rounded-[12px] bg-[#F8F9FA] p-4 flex items-center py-[11px] w-full">
            <img
              className="w-[45px] mr-3 InbetweenPhone:w-[30px] Phones:w-[26px] VerySmallPhones:w-[26px]"
              src={Metamask}
              alt=""
            />
            <h3
              className="font-bold InbetweenPhone:font-semibold InbetweenPhone:text-[14px] VerySmallPhones:text-[14px] "
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Metamask
            </h3>
            <img className="ml-auto" src={Next} alt="" />
          </div>
          <div className="border-[#CFD8DC] border rounded-[12px] bg-[#F8F9FA] p-4 flex items-center py-[11px] w-full">
            <img
              className="w-[45px] mr-3 InbetweenPhone:w-[30px] Phones:w-[26px] VerySmallPhones:w-[26px]"
              src={Walletconnect}
              alt=""
            />
            <h3
              className="font-bold InbetweenPhone:font-semibold InbetweenPhone:text-[14px] VerySmallPhones:text-[14px]"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              WalletConnect
            </h3>
            <img className="ml-auto" src={Next} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallets;
