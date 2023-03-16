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
      <p className="gil-med text-xl text-primary">Quality and Reliability</p>
      <p className="opacity-40 text-sm text-primary">
        We have a rigorous testing process to ensure that all software solutions
        we deliver are of the highest quality
      </p>
    </div>
  );
  return (
    <div className="min-h-[100vh] w-[100vw] bg-white">
      <div className="w-[90%] m-auto min-h-screen  py-8 sm:py-14">
        <p className="text-4xl md:text-5xl text-center gil-bold text-primary">
          Benefit of choosing us
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between w-90 mx-auto pt-8 sm:pt-12">
          <div className="flex flex-col items-start md:items-start w-full md:w-[30%] mb-6 md:mb-0">
            <p className="gil-bold text-3xl text-primary">01</p>
            <p className="gil-med text-lg md:text-xl text-primary text-left md:text-left">
              Quality and Reliability
            </p>
            <p className="opacity-40 text-sm text-primary text-left md:text-left">
              We have a rigorous testing process to ensure that all software
              solutions we deliver are of the highest quality
            </p>
          </div>{" "}
          <div className="flex flex-col items-start md:items-start w-full md:w-[30%] mb-6 md:mb-0">
            <p className="gil-bold text-3xl text-primary">02</p>
            <p className="gil-med text-lg md:text-xl text-primary text-left md:text-left">
              Innovative Solutions
            </p>
            <p className="opacity-40 text-sm text-primary text-left md:text-left">
              Our team of skilled developers and designers use the latest
              technologies and innovative approaches to create custom software
              solutions
            </p>
          </div>{" "}
          <div className="flex flex-col items-start md:items-start w-full md:w-[30%]">
            <p className="gil-bold text-3xl text-primary">03</p>
            <p className="gil-med text-lg md:text-xl text-primary text-left md:text-left">
              Dedicated support team
            </p>
            <p className="opacity-40 text-sm text-primary text-left md:text-left">
              We believe in building collaborative partnerships with our
              clients, working closely with them throughout the entire software
              development lifecycle.
            </p>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="industry"
          className="mt-8 w-full h-64 md:h-96 object-cover rounded-md mx-auto"
        />
      </div>
    </div>
  );
}

{
  /* <div className="pt-[70px] m-auto w-[90%]">
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
      </div> */
}
