"use client";
import React from "react";
import HoverButton from "./reusableComponent/hoverButton";

export default function Traction() {
  const data = [
    { label: "Clients", value: "18" },
    { label: "Projects", value: "30" },
    { label: "Employees", value: "100" },
    { label: "Awards", value: "3" },
  ];

  const Grid = () => {
    return (
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        {data.map((item,key) => (
          <div key={key} className="p-4 text-start">
            <div className="text-3xl md:text-5xl gil-bold text-primary">
              {item.value}+
            </div>
            <div className="text-primary text-sm opacity-60">{item.label}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-[100vw] h-fit md:h-[40vh]" id="traction">
      <div className="w-[90%] h-full flex flex-col md:flex-row justify-between m-auto items-center">
        <div className="w-full md:w-[60%]">
          <p className="gil-bold text-3xl md:text-5xl text-primary">
            We Are Spread All <br />
            Over The World
          </p>
          <p className="gil-reg text-sm opacity-60 pt-4 w-full md:w-[60%] text-primary">
            With a global presence, our company brings a diverse range of
            perspectives and experiences to every project, delivering software
            solutions that meet the unique needs of clients from all corners of
            the world.
          </p>
          {/* <button className="gil-reg text-sm bg-sky-400 text-white rounded-sm w-[100px] h-[40px] mt-4">
            Contact Us
          </button> */}

          {/* <button className="gil-reg text-sm bg-[#142440] text-white rounded-sm w-[100px] h-[40px] mt-4 hover:bg-white hover:text-[#142440] hover:border hover:border-[#142440]">
            Contact Us
          </button> */}
          <HoverButton
            onClick={() => {
              window.document.getElementById("contactUs").scrollIntoView({
                behavior: "smooth",
              });
            }}
            text="Contact Us"
          />
        </div>
        <div className="w-full md:w-[40%] pt-4 md:p-4 bg-slate-100 rounded-sm">
          {Grid()}
        </div>
      </div>
    </div>
  );
}
