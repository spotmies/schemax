import React from "react";
import Image from "next/image";
import { FaCode, FaUsers, FaChartLine, FaCog } from "react-icons/fa";
import {
  AiOutlineApi,
  AiOutlineBulb,
  AiOutlineDashboard,
  AiOutlineExperiment,
  AiOutlineLaptop,
  AiOutlineSecurityScan,
  AiOutlineTrophy,
} from "react-icons/ai";

const AboutUsSlide = () => {
  const cardArray = [
    {
      title: "Idea Enhancement",
      description:
        "Transforming your ideas into exceptional software solutions, through collaborative teamwork and user-centered design.",
      icon: <AiOutlineBulb size="3rem" className="text-secundary mb-2" />,
    },
    {
      title: "Best Tech",
      description:
        "Our top-notch tech team delivers innovative solutions with skill and expertise, empowering your business for success.",
      icon: <AiOutlineDashboard size="3rem" className="text-green-400 mb-2" />,
    },
    {
      title: "High Level Testing",
      description:
        "From functional to security and performance testing, our commitment to rigorous testing ensures high-quality, reliable.",
      icon: <AiOutlineExperiment size="3rem" className="text-amber-400 mb-2" />,
    },
    {
      title: "Easy Integration",
      description:
        "Hassle-free integration of your software solutions with existing systems, ensured through our seamless integration approach.",
      icon: <AiOutlineApi size="3rem" className="text-red-400 mb-2" />,
    },
  ];

  const cardComp = (icon, title, description, key) => {
    return (
      <div
        key={key}
        className="p-4 flex flex-row items-start justify-center bg-white rounded-sm shadow-sm w-[300px] cursor-pointer hover:shadow-md"
      >
        <div className="w-[20%]">{icon}</div>
        <div className="flex flex-col items-start justify-center pl-4">
          <h3 className="text-xl gil-med text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-700 opacity-70 text-sm">{description}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="w-[100vw]" id="aboutUs">
      <div className="bg-gray-100 py-16 m-auto w-[90%]">
        <div className="container mx-auto px-2 lg:px-4 flex flex-col items-center">
          <div className="relative w-full mb-10">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1784&q=80"
              alt="About Us Image"
              layout="responsive"
              className="w-full h-[300px] md:h-[600px] object-cover rounded-sm"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-primary rounded-sm bg-opacity-50 z-10"></div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center z-20">
              <h1 className="text-3xl md:text-5xl lg:text-6xl gil-bold text-white mb-2">
                Who We Are
              </h1>
              <p className="text-base md:text-xl lg:text-2xl font-semibold text-white">
                We are a team of experts who are passionate about creating
                solutions for businesses of all sizes.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-wrap justify-center items-center">
            <div className="w-full mb-10">
              <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-between">
                {cardArray.map((item, key) => (
                  <div
                    key={key}
                    className="mb-2 md:mb-0 p-4 flex flex-row items-start justify-center bg-white rounded-sm shadow-sm w-full md:w-[300px]  cursor-pointer hover:shadow-md"
                  >
                    <div className="w-1/4 md:w-[20%]">{item.icon}</div>
                    <div className="flex flex-col items-start justify-center pl-4">
                      <h3 className="text-base md:text-xl gil-med text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 opacity-70 text-sm md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSlide;
