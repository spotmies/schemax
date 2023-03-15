"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React from "react";
import { AiOutlineRead } from "react-icons/ai";
const strategy = "/assets/images/strategy3.jpg";
const product = "/assets/images/design.jpg";
const web = "/assets/images/web-designs.jpg";
const mobile = "/assets/images/mobile2.jpg";
const support = "/assets/images/support.jpg";
const augmentation = "/assets/images/augmentation.jpg";
const industry = "/assets/images/industry.jpg";

export default function Services() {
  const services = [
    {
      title: "It strategy & Technology consultancy",
      image: strategy,
    },
    {
      title: "Custom Product Development",
      image: product,
    },
    {
      title: "Web Application Development",
      image: web,
    },
    {
      title: "Mobile Application Development",
      image: mobile,
    },
    {
      title: "Custom Industrial IOT Solutions",
      image: industry,
    },
    {
      title: "Application / Product Maintenance & Support",
      image: support,
    },
    {
      title: "IT Infrastructure Management",
      image: strategy,
    },
    {
      title: "Resource Augmentation",
      image: augmentation,
    },
  ];

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

  return (
    <div className="w-[100vw] h-fit md:h-[100vh] bg-slate-200">
      <div className="pt-10 m-auto w-[95%] md:w-[90%]">
        <p className="text-3xl md:text-5xl gil-bold pb-4 text-primary">
          {" "}
          Our services
        </p>
        <p
          className="text-base md:text-lg opacity-60 pb-5 w-full md:w-[60%] text-primary"
          id="services"
        >
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non
          lorem et augue porta aliquet.lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Duis non lorem et augue porta aliquet.
        </p>
        <div className="md:block hidden">
          <Carousel responsive={responsive} partialVisible={true}>
            {services.map((service) => (
              <div className="relative industry-card md:mb-0 mb-6">
                <div className="absolute inset-0 bg-primary opacity-40 w-full h-full md:w-[330px] rounded-md "></div>
                <div
                  className="h-[200px] md:h-[500px] text-white w-full md:w-[330px] rounded-md cursor-pointer flex flex-col items-center justify-end p-4 "
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="z-50">
                    <p className="text-base md:text-4xl gil-med">
                      {service.title}
                    </p>
                    <p className="text-xs md:text-base opacity-60 pt-4">
                      We work closely with our clients to formulate an effective
                      approach
                    </p>
                    <div className="flex flex-row items-center w-full justify-start pt-4">
                      <AiOutlineRead />
                      <p className="pl-2 opacity-60"> Learn More</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="md:hidden block">
          {services.map((service) => (
            <div className="relative industry-card md:mb-0 mb-6">
              <div className="absolute inset-0 bg-primary opacity-40 w-full h-full md:w-[330px] rounded-md "></div>
              <div
                className="h-[200px] md:h-[500px] text-white w-full md:w-[330px] rounded-md cursor-pointer flex flex-col items-center justify-end p-4 "
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="z-50">
                  <p className="text-base md:text-4xl gil-med">
                    {service.title}
                  </p>
                  <p className="text-xs md:text-base opacity-60 pt-4">
                    We work closely with our clients to formulate an effective
                    approach
                  </p>
                  <div className="flex flex-row items-center w-full justify-start pt-4">
                    <AiOutlineRead />
                    <p className="pl-2 opacity-60"> Learn More</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
