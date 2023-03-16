"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React from "react";
import { AiOutlineRead } from "react-icons/ai";
const strategy =
  "https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/strategy3-min.jpg?alt=media&token=4a534055-3433-461a-83e6-fc3c993151ee";
// https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/strategy-min.jpg?alt=media&token=2d7ccd17-c1dd-47e8-8e72-c163c2d7df9c
// https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/strategy2-min.jpg?alt=media&token=bc14141b-31dd-4245-802d-269b8204e4c2
const product =
  "https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/design-min.jpg?alt=media&token=01369911-648e-4edb-b4fe-d4a14702da92";
// https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/product-design-min.jpg?alt=media&token=cdd082fd-4412-475b-8b19-eeba196cac31
// https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/product-design2-min.jpg?alt=media&token=e9f1baa2-7ec1-437b-b473-63bf2b44010b
const web =
  "https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/web-design2-min.jpg?alt=media&token=1190e422-13af-4b9f-ba24-eb33a07af3a1";
// https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/web-designs-min.jpg?alt=media&token=9710104e-ffe1-4d7b-84be-456c31ef8ec7
const mobile =
  "https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/mobile2-min.jpg?alt=media&token=7213ea1b-0931-4084-b6aa-951a234a1470";
// https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/mobile-min.jpg?alt=media&token=949bd70e-a498-4e10-971a-8d55248693bb
const support =
  "https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/support-min.jpg?alt=media&token=99571f68-bcbe-4559-87cb-46622966bf5a";
const augmentation =
  "https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/augmentation.jpg?alt=media&token=3360e789-2665-43ee-96b1-2796298a85d8";
const industry =
  "https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/industry-min.jpg?alt=media&token=dc2fe118-aea0-4824-8f94-d554d91ea0a5";

export default function Services() {
  const services = [
    {
      title: "It strategy & Technology consultancy",
      image: strategy,
      description:
        "Our IT strategy and consultancy services help businesses develop and implement effective technology solutions to drive growth and success.",
    },
    {
      title: "Custom Product Development",
      image: product,
      description:
        "We specialize in custom product development, delivering innovative and unique solutions that meet the specific needs of each client.",
    },
    {
      title: "Web Application Development",
      image: web,
      description:
        "We craft high-performing websites that engage users, drive conversions, and elevate brands to new heights.",
    },
    {
      title: "Mobile Application Development",
      image: mobile,
      description:
        "We build cutting-edge mobile applications that provide exceptional user experiences and deliver tangible business results.",
    },
    {
      title: "Custom Industrial IOT Solutions",
      image: industry,
      description:
        "Our IoT solutions enable businesses to optimize their operations, increase efficiency, and gain valuable insights through advanced data analytics and automation.",
    },
    {
      title: "Application / Product Maintenance & Support",
      image: support,
      description:
        "We provide expert product maintenance and support services to ensure that businesses can focus on growth and success while we take care of their technology needs.",
    },
    {
      title: "IT Infrastructure Management",
      image: strategy,
      description:
        "Our comprehensive IT infrastructure services help businesses optimize their technology resources, increase productivity, and minimize downtime through proactive monitoring.",
    },
    {
      title: "Resource Augmentation",
      image: augmentation,
      description:
        "Our resource augmentation services provide businesses with the specialized talent they need to accelerate their technology projects and achieve their goals.",
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
          className="text-sm md:text-lg opacity-60 pb-5 w-full md:w-[60%] text-primary"
          id="services">
          Our solutions are designed to meet the unique needs of each client,
          providing a tailored approach to software development and
          implementation.
        </p>
        <div className="md:block hidden">
          <Carousel
            responsive={responsive}
            partialVisible={true}
            infinite={false}
            autoPlay={true}>
            {services.map((service, key) => (
              <div className="relative industry-card md:mb-0 mb-6" key={key}>
                <div className="absolute inset-0 bg-primary opacity-40 w-full h-full md:w-[330px] rounded-md "></div>
                <div
                  className="h-[200px] md:h-[500px] text-white w-full md:w-[330px] rounded-md cursor-pointer flex flex-col items-center justify-end p-4 "
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}>
                  <div className="z-50">
                    <p className="text-base md:text-4xl gil-med">
                      {service.title}
                    </p>
                    <p className="text-xs md:text-base opacity-60 pt-4">
                      {service.description}
                    </p>
                    {/* <div className="flex flex-row items-center w-full justify-start pt-4">
                      <AiOutlineRead />
                      <p className="pl-2 opacity-60"> Learn More</p>
                    </div> */}
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
                }}>
                <div className="z-50">
                  <p className="text-base md:text-4xl gil-med">
                    {service.title}
                  </p>
                  {/* <p className="text-xs md:text-base opacity-60 pt-4">
                    We work closely with our clients to formulate an effective
                    approach
                  </p> */}
                  {/* <div className="flex flex-row items-center w-full justify-start pt-4">
                    <AiOutlineRead />
                    <p className="pl-2 opacity-60"> Learn More</p>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
