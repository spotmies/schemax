import React from "react";
import HoverButton from "./reusableComponent/hoverButton";
import { AiOutlineArrowRight } from "react-icons/ai";

const LandingSlide = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center relative">
      <div className="absolute top-0 left-0 h-full w-full z-10">
        <Navbarr />
      </div>
      <video
        src="https://player.vimeo.com/external/428425058.sd.mp4?s=a1b35b8cda28e107f6bfdbf893bbc5d150af2fdb&profile_id=164&oauth2_token_id=57447761"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 h-full w-full object-cover z-0"
      />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-7xl gil-bold mb-4">
          Creative solutions for better business
        </h1>
        <p className="text-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non
          lorem et augue porta aliquet.
        </p>
        <div className="w-full flex flex-row items-center justify-center">
          <HoverButton
            text="Read More"
            className="bg-transparent  border hover:text-primary hover:bg-white border-white hover:border-white"
            icon={<AiOutlineArrowRight className="ml-2" />}
          />
        </div>
      </div>
    </section>
  );
};

export const Navbarr = () => {
  return (
    <nav className="bg-transparent py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/assets/images/schemax_logo.png"
            alt="Logo"
            className="h-10 cursor-pointer"
          />
        </div>
        <div className="flex items-center">
          <a
            href="/"
            className="text-white  mx-4 border-b-2 border-transparent hover:border-secundary"
          >
            Services
          </a>
          <a
            href="/"
            className="text-white  mx-4 border-b-2 border-transparent hover:border-secundary"
          >
            Industries
          </a>
          <a
            href="/"
            className="text-white  mx-4 border-b-2 border-transparent hover:border-secundary"
          >
            Career
          </a>
          <a
            href="/"
            className="text-white  mx-4 border-b-2 border-transparent hover:border-secundary"
          >
            Blogs
          </a>
          <a
            href="/"
            className="text-white  mx-4 border-b-2 border-transparent hover:border-secundary"
          >
            About Us
          </a>
          <a
            href="/"
            className="text-white  mx-4 border-b-2 border-transparent hover:border-secundary"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default LandingSlide;
