import React from "react";

// Images
import image1 from "../images/home-first-section-imgs/image 1.png";
import image2 from "../images/home-first-section-imgs/image 2.png";
import image3 from "../images/home-first-section-imgs/image 3.png";
import image4 from "../images/home-first-section-imgs/image 4.png";

// Icons
import HomeFirstSection1 from "../icons/HomeFirstSection-1.svg";
import HomeFirstSection2 from "../icons/HomeFirstSection-2.svg";
import HomeFirstSection22 from "../icons/HomeFirstSection-2-2.svg";
import HomeFirstSection3 from "../icons/HomeFirstSection-3.svg";

const Home = () => {
  return (
    <div className="">
      <div id="first-section" className="w-full py-12 pt-10 px-12">
        <div className="w-full grid grid-cols-2 items-center">
          <div className="flex flex-col gap-7">
            <h1 className="text-TextBlack font-normal text-[44px]">
              Rent a <p className="inline text-TextPink font-bold">Place</p>{" "}
              away from
              <br /> <p className="inline text-TextPink font-bold">Home</p> in
              the <p className="inline text-TextPink font-bold">Metaverse</p>
            </h1>
            <p className="text-[20px]">
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
            <form
              method="get"
              className="w-full items-center grid"
              style={{ gridTemplateColumns: "1.8fr 1fr" }}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Search for location"
                style={{ borderRightWidth: "0px" }}
                className="w-full bg-[#F7F7F71A] border border-[#A3A3A3] rounded-tl-xl rounded-bl-xl outline-0 p-[12px] placeholder:text-[#B8B8B8]"
              />
              <button
                type="submit"
                className="w-full bg-ButtonBgColor h-full text-white rounded-tr-xl rounded-br-xl p-[12px]"
              >
                Search
              </button>
            </form>
          </div>
          <div className="flex gap-3 justify-center">
            <div className="flex flex-col gap-3 mt-[60px]">
              <figure className="w-[200px] h-[150px] rounded-[15px]">
                <img
                  className="w-full h-full object-cover rounded-[inherit]"
                  src={image1}
                  alt=""
                />
              </figure>
              <figure className="w-[200px] h-[150px] rounded-[15px]">
                <img
                  className="w-full h-full object-cover rounded-[inherit]"
                  src={image2}
                  alt=""
                />
              </figure>
            </div>
            <div className="flex flex-col gap-3">
              <figure className="w-[200px] h-[150px] rounded-[15px]">
                <img
                  className="w-full h-full object-cover rounded-[inherit]"
                  src={image3}
                  alt=""
                />
              </figure>
              <figure className="w-[200px] h-[150px] rounded-[15px]">
                <img
                  className="w-full h-full object-cover rounded-[inherit]"
                  src={image4}
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full bg-ButtonBgColor p-2 px-20 flex items-center justify-between mb-14 mt-4"
        id="second-section"
      >
        <div className="flex items-center gap-0">
          <img src={HomeFirstSection1} alt="" className="absolute" />
          <p
            style={{ fontFamily: "AirbnbCereal_W_Bd" }}
            className="text-white pl-[44px] text-[32px]"
          >
            MBToken
          </p>
        </div>
        <div className="flex items-center gap-2 ">
          <img className="w-[36px]" src={HomeFirstSection2} alt="" />
          <img className="h-[22px]" src={HomeFirstSection22} alt="" />
        </div>
        <div className="flex items-center gap-2">
          <img src={HomeFirstSection3} alt="" />
          <p
            style={{ fontFamily: "Poppins" }}
            className="text-white text-[28px]"
          >
            OpenSea
          </p>
        </div>
      </div>
      <div id="third-section"></div>
      <div id="forth-section"></div>
    </div>
  );
};

export default Home;
