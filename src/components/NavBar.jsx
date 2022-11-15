import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../icons/Logo.svg";
import { FiMenu } from "react-icons/fi";
import X from "../icons/modal x.svg";
// import { BsChevronDown } from "react-icons/bs";

const NavBar = ({ setModalVisible, modalVisible }) => {
  const [hidden, setHidden] = useState("hidden");
  const [translate, setTranslate] = useState("translate-x-[-100%]");
  function toggleModal() {
    console.log(modalVisible);

    if (modalVisible === "hidden") {
      setModalVisible("grid");
    } else {
      setModalVisible("hidden");
    }
  }

  function mobileToggleModal() {
    if (hidden === "hidden") {
      setHidden("block");
      setTranslate("");
    } else {
      setHidden("hidden");
      setTranslate("translate-x-[-100%]");
    }
  }
  // modal = modalVisible;
  return (
    <>
      <div className="flex items-center justify-between p-3 px-12 w-full Tablet:px-24 AllPhones:px-8 AllPhones:py-8 NotLaptop:sticky NotLaptop:z-10 NotLaptop:top-0 NotLaptop:bg-white NotLaptop:py-8 ">
        <Link className="VerySmallPhones:w-[120px] w-40 " to={"/"}>
          <img className="w-full" src={Logo} alt="" />
        </Link>
        <ul className="flex items-center gap-9 NotLaptop:hidden">
          <li>
            <Link to={"/"}>
              <p className="text-TextBlack">Home</p>
            </Link>
          </li>
          <li>
            <Link to={"/place-to-stay"}>
              <p className="text-TextBlack">Place to stay</p>
            </Link>
          </li>
          <li>
            <p className="text-TextBlack">NFTs</p>
          </li>
          <li>
            <p className="text-TextBlack">Community</p>
          </li>
        </ul>
        <button
          className="p-3 px-5 text-white rounded-[10px] text-sm bg-ButtonBgColor outline-0 NotLaptop:hidden"
          onClick={toggleModal}
        >
          Connect Wallet
        </button>
        <button
          className="outline-0 NotPhonesOrTablet:hidden"
          onClick={mobileToggleModal}
        >
          <FiMenu
            className="w-[2.2rem] h-[2.2rem] VerySmallPhones:w-[1.6rem] VerySmallPhones:h-[1.6rem] fill-TextBlack"
            stroke="#434343"
          />
        </button>
      </div>

      {/*  */}
      {/*  */}
      {/*  */}

      <div
        className={`NotPhonesOrTablet:hidden bg-[#4040404D] h-[100%] w-full absolute z-20 flex justify-end top-0 ${hidden}`}
      >
        <div
          className={`w-[70%] h-[100vh] bg-white sticky top-0 ${translate} p-16 flex flex-col Phones:p-10 VerySmallPhones:p-10 `}
        >
          <img
            className="mb-16 w-8 h-8 cursor-pointer Phones:w-7 Phones:h-7 VerySmallPhones:w-7 VerySmallPhones:h-7"
            onClick={mobileToggleModal}
            src={X}
            alt=""
          />
          <ul className="flex items-center gap-9 flex-col Phones:text-[14px] VerySmallPhones:text-[14px]">
            <li>
              <Link to={"/"} onClick={mobileToggleModal}>
                <p className="text-TextBlack">Home</p>
              </Link>
            </li>
            <li>
              <Link to={"/place-to-stay"} onClick={mobileToggleModal}>
                <p className="text-TextBlack">Place to stay</p>
              </Link>
            </li>
            <li>
              <p className="text-TextBlack">NFTs</p>
            </li>
            <li>
              <p className="text-TextBlack">Community</p>
            </li>
          </ul>
          <button
            className="p-3 px-5 text-white rounded-[10px] text-sm bg-ButtonBgColor outline-0 w-fit self-center mt-10 Phones:text-[14px] VerySmallPhones:text-[14px]"
            onClick={toggleModal}
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
