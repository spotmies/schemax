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
import LandingSlide from "./landing_slide";

export default function HomePage() {
  const space = () => {
    return <div className="w-[100vw] h-[40px]" />;
  };

  return (
    <div className="bg-slate-100 gil-reg">
      <NavBar />

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
     

      <FooterBar />
    </div>
  );
}
