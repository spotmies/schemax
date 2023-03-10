import React from "react";
import IndustriesList from "./industriesList";
import NavBar from "./navBar";
import ContactUs from "./contactUs";

export default function HomePage() {
  const space = () => {
    return <div className="w-[100vw] h-[40px]" />;
  };

  return (
    <div className="bg-slate-100 ">
      <NavBar />
      <IndustriesList />
      {space()}
      <ContactUs />
      {space()}
    </div>
  );
}
