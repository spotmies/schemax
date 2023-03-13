import React from "react";
import IndustriesList from "./industriesList";
import NavBar from "./navBar";
import ContactUs from "./contactUs";
import Testimonials from "./testimonials";
import FeatureCards from "./featureCards";
import Services from "./services";
import Benefits from "./benefits";
import Traction from "./traction";
import FooterBar from "./footer";
import VisionMissionSection from "./visionMission";
import LandingSlide, { Navbarr } from "./landing_slide";
import Faq from "./faq";
import Career from "./careers";
import TermsAndConditionsPage from "./termsConditions";
import AboutUs from "./aboutUs";
import TeamSlide from "./team";
import AboutUsSlide from "./stuff";
import Testimonials2 from "./testimonials2";
import IndustriesSection from "./industries";

export default function HomePage() {
  const space = () => {
    return <div className="w-[100vw] h-[40px]" />;
  };

  return (
    <div className="bg-slate-100 gil-reg">
      {/* <NavBar /> */}
      {/* <Navbarr /> */}

      <LandingSlide />
      {space()}
      <IndustriesList />

      {/* {space()}
      <Testimonials /> */}
      {/* {space()}
      <FeatureCards /> */}
      {space()}
      <Services />
      {space()}
      <Benefits />
      {space()}
      <Traction />
      {space()}
      <VisionMissionSection />
      {space()}
      <ContactUs />
      {space()}
      <AboutUs />
      {space()}
      <Faq />

      {space()}

      <Career />
      {space()}

      <TermsAndConditionsPage />
      {space()}

      <TeamSlide />
      {space()}

      <AboutUsSlide />
      {space()}

      <Testimonials2 />
      {space()}

      <IndustriesSection />
      {space()}

      <FooterBar />
    </div>
  );
}
