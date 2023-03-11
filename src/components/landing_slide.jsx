import React from "react";
import HoverButton from "./reusableComponent/hoverButton";
import { AiOutlineArrowRight } from "react-icons/ai";

const LandingSlide = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center relative">
      <video
        src="https://player.vimeo.com/external/428425058.sd.mp4?s=a1b35b8cda28e107f6bfdbf893bbc5d150af2fdb&profile_id=164&oauth2_token_id=57447761"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 h-full w-full object-cover z-0"
      />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non
          lorem et augue porta aliquet.
        </p>
        <div className="w-full flex flex-row items-center justify-center">
        <HoverButton text="Read More" className="bg-transparent border border-white"  icon={<AiOutlineArrowRight className="ml-2" />}/>
        </div>
      </div>
    </section>
  );
};

export default LandingSlide;
