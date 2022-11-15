import React from "react";

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
  return (
    <div
      className={`w-full h-screen bg-[#4040404D] ${display} top-0 fixed grid place-content-center`}
    >
      <div className="bg-white rounded-[16px]">
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
      </div>
    </div>
  );
};

export default ConnectWallets;
