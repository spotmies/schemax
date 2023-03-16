import AboutMe from "@/components/portfolio_ceo/aboutme";
import Philosophy from "@/components/portfolio_ceo/philosophy";
import Slide1 from "@/components/portfolio_ceo/slide1";

import React from "react";

const Portfolio = () => {
  return (
    <div className="w-[100vw] min-h-[100vh] h-fit gil-reg">
      <Slide1 />
      <AboutMe />
      <Philosophy />
    </div>
  );
};

export default Portfolio;
