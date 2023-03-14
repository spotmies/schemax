"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React from "react";
import { AiOutlineRead } from "react-icons/ai";

export default function Services() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 70,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 70,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 0,
    },
  };
  const items = (
    <div
      className="h-[500px] text-white w-[330px] rounded-md cursor-pointer flex flex-col items-center justify-end p-4 "
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <p className="text-4xl gil-med">
        It strategy & <br /> Technology consultancy
      </p>
      <p className="text-xs opacity-60 pt-4">
        We work closely with our clients to formulate an effective approach
      </p>
      <div className="flex flex-row items-center w-full justify-start pt-4">
        <AiOutlineRead />
        <p className="pl-2 opacity-60"> Learn More</p>
      </div>
    </div>
  );
  return (
    <div className="w-[100vw] h-[100vh] bg-slate-200">
      <div className="pt-10 m-auto w-[90%]">
        <p className="text-5xl gil-bold pb-4"> Our services</p>
        <p className="text-lg opacity-60 pb-5 w-[60%]">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non
          lorem et augue porta aliquet.lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Duis non lorem et augue porta aliquet.
        </p>
        <Carousel responsive={responsive} partialVisible={true}>
          {items}
          {items}
          {items}
          {items}
          {items}
          {items}
        </Carousel>
      </div>
    </div>
  );
}
