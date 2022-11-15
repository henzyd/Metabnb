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
    <div id="parent" className={`z-20 bg-[#4040404D] ${display} `}>
      <div className="child"></div>
      {/* <div className="bg-white h-[400px] w-[400px] rounded-[16px] relative left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] border-8 border-[yellow]">
      <div className="p-8 border-b border-[#CFD8DC] py-4 flex items-center justify-between">
        <h1 className="font-bold text-xl">Connect Wallet</h1>
        <img
          className="w-[22px] cursor-pointer"
          src={X}
          alt=""
          onClick={removeModal}
        />
      </div>
      <div className="flex flex-col p-6 w-[500px] gap-3 pb-7">
        <p>Choose your preferred wallet:</p>
        <div className="border-[#CFD8DC] border rounded-[12px] bg-[#F8F9FA] p-4 flex items-center py-[11px]">
          <img className="w-[45px] mr-3" src={Metamask} alt="" />
          <h3
            className="font-bold"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Metamask
          </h3>
          <img className="ml-auto" src={Next} alt="" />
        </div>
        <div className="border-[#CFD8DC] border rounded-[12px] bg-[#F8F9FA] p-4 flex items-center py-[11px]">
          <img className="w-[45px] mr-3" src={Walletconnect} alt="" />
          <h3
            className="font-bold"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            WalletConnect
          </h3>
          <img className="ml-auto" src={Next} alt="" />
        </div>
      </div>
      </div> */}
    </div>
  );
};

export default ConnectWallets;
