"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import { clients, dummyClients } from "@/constants";

export default function Benefits() {
  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 0,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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

  const item = (
    <div className="flex flex-col items-start w-[30%] ">
      <p className="gil-bold text-3xl text-primary">01</p>
      <p className="gil-med text-xl">
        Access to <br /> exclusive projects
      </p>
      <p className="opacity-40 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatem expedita officia
      </p>
    </div>
  );
  return (
    <div className="w-[100vw] min-h-[100vh] h-fit bg-white py-14">
      <p className="text-5xl text-center gil-bold">Benefit of choosing us</p>
      <div className="flex flex-row items-center justify-between w-[90%] m-auto pt-12">
        {item}
        {item}
        {item}
      </div>
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="industry"
        className=" mt-8 w-[90%] h-[500px] object-cover rounded-md m-auto"
      />
      <div className="pt-[70px] m-auto w-[90%]">
        <Carousel
          responsive={responsive2}
          arrows={false}
          infinite={true}
          autoPlay={true}
        >
          {dummyClients.map((testimonial, index) => (
            <div key={index}>
              <img
                src={testimonial.image}
                alt=""
                className="cursor-pointer h-[60px] w-[160px] object-contain m-auto filter grayscale hover:grayscale-0  opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
