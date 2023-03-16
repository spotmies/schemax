import React from "react";
import HoverButton from "./reusableComponent/hoverButton";
import { AiOutlineArrowRight } from "react-icons/ai";

const video =
  "https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/video.mp4?alt=media&token=e5bab7cd-0077-4974-a2b2-88dd82358a02";

const LandingSlide = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center relative">
      <div className="absolute top-0 left-0 h-full w-full z-10">
        <Navbarr />
      </div>
      <video
        src={video}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 h-full w-full object-cover z-0"
      />
      <div className="relative z-10 text-center text-white animated">
        <h1 className="text-4xl md:text-6xl lg:text-7xl gil-bold mb-4">
          Creative solutions for better business
        </h1>
        <p className="text-sm md:text-lg lg:text-xl mb-8">
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
    <nav className="bg-transparent py-4 w-[100vw] px-[5%]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/assets/images/schemax_logo.png"
            alt="Logo"
            className="h-10 cursor-pointer"
          />
        </div>
        <div className="flex items-center md:hidden">
          <button
            className="text-white hover:text-secundary focus:outline-none"
            aria-label="Menu">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="menu w-6 h-6">
              <path
                fillRule="evenodd"
                d="M2 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm1 4a1 1 0 100 2h14a1 1 0 100-2H3z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center">
          <a
            href="/"
            className="text-white  mx-4 border-b-2 border-transparent hover:border-secundary">
            Services
          </a>
          <a
            href="/"
            className="text-white  mx-4 border-b-2 border-transparent hover:border-secundary">
            Industries
          </a>
          <a
            href="/"
            className="text-white  mx-4 border-b-2 border-transparent hover:border-secundary">
            Career
          </a>
          <a
            href="/"
            className="text-white  mx-4 border-b-2 border-transparent hover:border-secundary">
            Blogs
          </a>
          <a
            href="/"
            className="text-white  mx-4 border-b-2 border-transparent hover:border-secundary">
            About Us
          </a>
          <a
            href="/"
            className="text-white  mx-4 border-b-2 border-transparent hover:border-secundary">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default LandingSlide;
