import AboutMe from "@/components/portfolio_ceo/aboutme";
import AwardsSection from "@/components/portfolio_ceo/awards";
import BoardPositions from "@/components/portfolio_ceo/boardPosition";
import CeoTestimonials from "@/components/portfolio_ceo/ceoTestimonials";
import IndustryExpertise from "@/components/portfolio_ceo/industryExpertise";
import ThoughtLeadershipSlide from "@/components/portfolio_ceo/leadershipThoughts";
import PersonalInterests from "@/components/portfolio_ceo/personalInterest";
import Philosophy from "@/components/portfolio_ceo/philosophy";
import Slide1 from "@/components/portfolio_ceo/slide1";

import React from "react";

const Portfolio = () => {
  return (
    <div className="w-[100vw] min-h-[100vh] h-fit gil-reg">
      <Slide1 />
      <AboutMe />
      <Philosophy />
      <AwardsSection />
      <BoardPositions />

      {/* <ThoughtLeadershipSlide />
      <IndustryExpertise /> */}
      <CeoTestimonials />
      <PersonalInterests />
    </div>
  );
};

export default Portfolio;
