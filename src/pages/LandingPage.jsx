import React from "react";

/**
 * Components imports
 */
import Navbar from "../components/Navbar";
import FooterPage from "../components/FooterPage";
import Display from "../components/Display";

const LandingPage = () => {
  return (
    <div className="w-screen h-screen bg-black">
      <Navbar />
      <Display />
      <FooterPage />
    </div>
  );
};

export default LandingPage;
