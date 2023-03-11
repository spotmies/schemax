import React from "react";

export default function NavBar() {
  return (
    <div className="w-[100vw] h-[80px] bg-white">
      <div className="w-full flex flex-row justify-between items-center px-10 py-5 shadow-sm">
        <img
          src="https://www.schemaxtech.com/imgs/logo.png"
          alt="logo"
          className="h-10"
        />
        <div className="flex flex-row justify-between items-center text-black gil-reg">
          <p className="text-md mr-16">Home</p>
          <p className="text-md mr-16">About</p>
          <p className="text-md mr-16">Services</p>
          <p className="text-md mr-16">Contact</p>
        </div>
      </div>
    </div>
  );
}
