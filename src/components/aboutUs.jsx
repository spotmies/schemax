"use client";
import React from "react";

const AboutUsSection = () => {
  const handleParallax = (e) => {
    const speed = 5;
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;
    document.getElementById(
      "aboutUsImg"
    ).style.transform = `translate(${x}px, ${y}px)`;
  };

  return (
    <div className="w-[100vw]">
      <section className="relative w-[90%] m-auto">
        <img
          id="aboutUsImg"
          className="absolute w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80"
          alt="About Us"
          onMouseMove={handleParallax}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="relative flex justify-center items-center h-screen">
          <div className="text-center text-white z-10">
            <h1 className="text-4xl gil-bold mb-4">About Us</h1>
            <p className="text-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
              odio ac sapien rhoncus auctor sed vel mi. Pellentesque dictum
              augue a purus maximus ultrices.
            </p>
            <a
              href="#"
              className="bg-white text-black px-8 py-3 rounded-sm hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsSection;
