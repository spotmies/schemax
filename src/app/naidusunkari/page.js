import ContactUs from "@/components/contactUs";
import FooterBar from "@/components/footer";
import AboutMe from "@/components/portfolio_ceo/aboutme";
import AwardsSection from "@/components/portfolio_ceo/awards";
import BoardPositions from "@/components/portfolio_ceo/boardPosition";
import CeoTestimonials from "@/components/portfolio_ceo/ceoTestimonials";
import ContactUsCeo from "@/components/portfolio_ceo/contactUs";
import IndustryExpertise from "@/components/portfolio_ceo/industryExpertise";
import ThoughtLeadershipSlide from "@/components/portfolio_ceo/leadershipThoughts";
import PersonalInterests from "@/components/portfolio_ceo/personalInterest";
import Philosophy from "@/components/portfolio_ceo/philosophy";
import SlideWithCards from "@/components/portfolio_ceo/singlePagePortfolio";
import Slide1 from "@/components/portfolio_ceo/slide1";

import React from "react";

const Portfolio = () => {
  return (
    <div className="w-[100vw] min-h-[100vh] h-fit gil-reg">
      <SlideWithCards />
      {/* <Slide1 />
      <AboutMe />
      <Philosophy />
      <AwardsSection />
      <BoardPositions />
      <CeoTestimonials />
      <PersonalInterests />
      <ContactUsCeo />
      <FooterBar /> */}
    </div>
  );
};

export default Portfolio;
