import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import ConnectWallets from "../components/ConnectWallets";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const LandingPage = () => {
  const [modalVisible, setModalVisible] = useState("hidden");
  console.log(modalVisible);

  return (
    <div className="">
      <NavBar setModalVisible={setModalVisible} modalVisible={modalVisible} />
      <Outlet />
      <Footer />
      <ConnectWallets
        display={modalVisible}
        setModalVisible={setModalVisible}
      />
    </div>
  );
};

export default LandingPage;
