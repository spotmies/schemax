import React from "react";
import IndustriesList from "./industriesList";
import NavBar from "./navBar";
import ContactUs from "./contactUs";
import Testimonials from "./testimonials";
import FeatureCards from "./featureCards";
import Services from "./services";

export default function HomePage() {
  const space = () => {
    return <div className="w-[100vw] h-[40px]" />;
  };

  return (
    <div className="bg-slate-100 gil-reg">
      <NavBar />
      <IndustriesList />
      {space()}
      <ContactUs />
      {space()}
      <Testimonials />
      {space()}
      <FeatureCards />
      {space()}
      <Services />
      {space()}
    </div>
  );
}
