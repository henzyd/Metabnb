import React from "react";
import { Link } from "react-router-dom";
import Logo from "../icons/Logo.svg";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-3 px-7 w-full">
      <Link className="w-40" to={"/"}>
        <img className="w-full" src={Logo} alt="" />
      </Link>
      <ul className="flex items-center gap-9">
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
      <button className="p-3 px-5 text-white rounded-[10px] text-sm bg-ButtonBgColor">
        Connect Wallet
      </button>
    </div>
  );
};

export default NavBar;
