import React from "react";
import ArticlesList from "./articlesList";
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
import ProductsListSlide from "./productsList";

export default function HomePage() {
  const space = () => {
    return <div className="w-[100vw] h-[40px]" />;
  };

  return (
    <div className="bg-slate-100 gil-reg">
      <LandingSlide />
      {/* {space()} */}
      <Services />
      {/* {space()} */}
      <IndustriesSection />
      {space()}
      <AboutUsSlide />
      {space()}
      <VisionMissionSection />
      {space()}
      <ProductsListSlide />
      {space()}
      <Benefits />
      {space()}
      <Traction />
      {space()}

      {/* <AboutUs />
      {space()} */}
      {/* <TermsAndConditionsPage />
      {space()} */}
      <TeamSlide />
      {space()}
      <Testimonials2 />
      {space()}
      <ArticlesList />
      {space()}
      <Career />
      {space()}
      <Faq />
      {space()}
      <ContactUs />

      {space()}
      <FooterBar />
    </div>
  );
}
