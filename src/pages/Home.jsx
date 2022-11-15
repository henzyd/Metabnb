import React from "react";

// Images
import image1 from "../images/home-first-section-imgs/image 1.png";
import image2 from "../images/home-first-section-imgs/image 2.png";
import image3 from "../images/home-first-section-imgs/image 3.png";
import image4 from "../images/home-first-section-imgs/image 4.png";
import SImage1 from "../images/home-second-section-imgs/S - image 1.png";
import SImage2 from "../images/home-second-section-imgs/S - image 2.png";
import SImage3 from "../images/home-second-section-imgs/S - image 3.png";
import SImage4 from "../images/home-second-section-imgs/S - image 4.png";
import SImage5 from "../images/home-second-section-imgs/S - image 5.png";
import SImage6 from "../images/home-second-section-imgs/S - image 6.png";
import SImage7 from "../images/home-second-section-imgs/S - image 7.png";
import SImage8 from "../images/home-second-section-imgs/S - image 8.png";
// import FImage1 from "../images/home-third-section-imgs/F - image 1.png";
// import FImage2 from "../images/home-third-section-imgs/F - image 2.png";
// import FImage3 from "../images/home-third-section-imgs/F - image 3.png";
import FCombo from "../images/home-third-section-imgs/F - Combo.png";

// Icons
import HomeFirstSection1 from "../icons/HomeFirstSection-1.svg";
import HomeFirstSection2 from "../icons/HomeFirstSection-2.svg";
import HomeFirstSection22 from "../icons/HomeFirstSection-2-2.svg";
import HomeFirstSection3 from "../icons/HomeFirstSection-3.svg";
import NFTCard from "../components/NFTCard";

const Home = () => {
  const NFTData = [
    {
      id: 1,
      image: SImage1,
    },
    {
      id: 2,
      image: SImage2,
    },
    {
      id: 3,
      image: SImage3,
    },
    {
      id: 4,
      image: SImage4,
    },
    {
      id: 5,
      image: SImage5,
    },
    {
      id: 6,
      image: SImage6,
    },
    {
      id: 7,
      image: SImage7,
    },
    {
      id: 8,
      image: SImage8,
    },
  ];
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
      <div
        // style={{ backgroundColor: "black" }}
        id="third-section"
        className="flex flex-col gap-8 items-center w-full mb-[3.2rem]"
      >
        <h1 className="text-[40px] font-bold">
          Inspiration for your next adventure
        </h1>
        <div className="grid grid-cols-4 gap-6">
          {NFTData.map((item) => (
            <NFTCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div
        id="forth-section"
        className="w-full bg-ButtonBgColor grid p-20 items-center mt-2"
        style={{ gridTemplateColumns: "1.5fr 2.5fr" }}
      >
        <div className=" flex flex-col gap-8">
          <h1 className="text-4xl font-bold text-white">Metabnb NFTs</h1>
          <p
            style={
              {
                // background:
                //   "-webkit-linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)",
                // WebkitBackgroundClip: "text",
                // WebkitTextFillColor: "transparent",
                // backgroundClip: "text",
                // textFillColor: "transparent",
              }
            }
            className="text-md text-white leading-9"
          >
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <button className="p-8 py-3 w-fit bg-white rounded-[8px] text-TextPink">
            Learn more
          </button>
        </div>
        <div className="w-full flex items-center justify-center">
          {/* <figure className="w-[200px] h-[150px] absolute rotate-[17.76deg]">
            <img className="w-full h-full object-cover" src={FImage1} alt="" />
          </figure>
          <figure
            className="w-[200px] h-[150px] absolute rotate-[-26.02deg]"
            style={{ left: "0px", top: "333.13px" }}
          >
            <img className="w-full h-full object-cover" src={FImage2} alt="" />
          </figure>
          <figure className="w-[200px] h-[150px] absolute rotate-[-8.76deg]">
            <img className="w-full h-full object-cover" src={FImage3} alt="" />
          </figure> */}
          <figure className="w-[500px]">
            <img className="w-full" src={FCombo} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Home;
