'use client';
import React from "react";
import HoverButton from "../reusableComponent/hoverButton";
import { AiOutlineArrowRight } from "react-icons/ai";

function IntroductionSlide() {
  return (
    <div className="w-full h-full relative">
      <div
        className="w-full h-[100vh] "
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // sticky background image on scroll
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-md"></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center ">
        <p className="text-3xl text-white gil-reg opacity-80 animated">
          Hi There
        </p>
        <p className="text-6xl text-white gil-bold animated">
          I'm <span className="text-white">Naidu Sunkari</span>
        </p>
        <p className="text-2xl text-white gil-reg w-[70%] text-center opacity-50 animated">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quo
          distinctio tenetur perspiciatis aut, consectetur vel sapiente
          inventore esse tempore minus repellat aliquid quaerat, reiciendis quos
          pariatur cupiditate maxime totam.
        </p>
        <HoverButton
          onClick={() => {
            window.document.getElementById("naiduAbout").scrollIntoView({
              behavior: "smooth",
            });
          }}
          text="Know More"
          className="bg-transparent animated border hover:text-primary hover:bg-white border-white hover:border-white"
          icon={<AiOutlineArrowRight className="ml-2" />}
        />
      </div>
    </div>
  );
}

export default IntroductionSlide;
