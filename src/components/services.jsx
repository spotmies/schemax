"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React from "react";
import { AiOutlineRead } from "react-icons/ai";
const strategy =
  "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
// "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/schemax%2Fstrategy3-min.jpg?alt=media&token=fe44d0dc-6ec3-4af1-b38c-9b0e202f7a75";
// https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/strategy-min.jpg?alt=media&token=2d7ccd17-c1dd-47e8-8e72-c163c2d7df9c
// https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/strategy2-min.jpg?alt=media&token=bc14141b-31dd-4245-802d-269b8204e4c2
const product =
  "https://images.unsplash.com/photo-1571101628768-6bae026844b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
// "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/schemax%2Fdesign-min.jpg?alt=media&token=ba08f334-2427-4255-b940-5adac1d5b978";
// https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/schemax%2Fproduct-design2-min.jpg?alt=media&token=8e4a974b-476f-4a89-9085-4e0dfd2087e0
const web =
  "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80";
// "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/schemax%2Fweb-design2-min.jpg?alt=media&token=91f56a02-e436-4cd2-9133-3908b455bec3";
// https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/schemax%2Fweb-designs-min.jpg?alt=media&token=d1ac1d7f-dd76-444f-9c67-bb497937acd7
// https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/web-designs-min.jpg?alt=media&token=9710104e-ffe1-4d7b-84be-456c31ef8ec7
const mobile =
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80";
// "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/schemax%2Fmobile2-min.jpg?alt=media&token=afd0dc11-1a1e-4d0d-8cd0-46e8d6bd7db8";
// https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/mobile-min.jpg?alt=media&token=949bd70e-a498-4e10-971a-8d55248693bb
const support =
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
// "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/schemax%2Fsupport-min.jpg?alt=media&token=2b12ce62-4405-4615-8d51-bb4b8c5c41cf";
const augmentation =
  "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80";
// "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/schemax%2Faugmentation.jpg?alt=media&token=22423295-1b5e-4b32-afad-c15a6387d8d8";
// "https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/augmentation.jpg?alt=media&token=3360e789-2665-43ee-96b1-2796298a85d8";
const industry =
  "https://images.unsplash.com/photo-1569852573858-03c9e2877792?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80";
// "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/schemax%2Findustry-min.jpg?alt=media&token=6fd76c78-ae43-4a1b-9b1b-421f6c9896d4";

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
    <div className="w-[100vw] h-fit md:h-[100vh] bg-slate-200" id="services">
      <div className="pt-10 m-auto w-[95%] md:w-[90%]">
        <p className="text-3xl md:text-5xl gil-bold pb-4 text-primary">
          {" "}
          Our services
        </p>
        <p
          className="text-sm md:text-lg opacity-60 pb-5 w-full md:w-[60%] text-primary"
          id="services"
        >
          Our solutions are designed to meet the unique needs of each client,
          providing a tailored approach to software development and
          implementation.
        </p>
        <div className="md:block hidden">
          <Carousel
            responsive={responsive}
            partialVisible={true}
            infinite={false}
            autoPlay={true}
          >
            {services.map((service, key) => (
              <div
                className="relative industry-card md:mb-0 mb-6"
                key={key}
                // on hover show description
                onMouseEnter={() => {
                  document.getElementById(`description` + key).style.display =
                    "block";
                }}
                onMouseLeave={() => {
                  document.getElementById(`description` + key).style.display =
                    "none";
                }}
              >
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
                  <div
                    className="z-50 transition-all duration-500 ease-in-out"
                    id={`card1` + key}
                  >
                    <p className="text-base md:text-3xl gil-bold">
                      {service.title}
                    </p>
                    <p
                      className="text-xs md:text-base opacity-60 pt-4 hidden transition-all duration-500 ease-in-out"
                      id={`description` + key}
                    >
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
                }}
              >
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
