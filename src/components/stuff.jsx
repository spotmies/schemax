import React from "react";
import Image from "next/image";
import { FaCode, FaUsers, FaChartLine, FaCog } from "react-icons/fa";
import { AiOutlineLaptop, AiOutlineSecurityScan, AiOutlineTrophy } from "react-icons/ai";

const AboutUsSlide = () => {
  const cardComp = (
    <div className="p-4 flex flex-row items-start justify-center bg-white rounded-sm shadow-sm w-[300px]">
      {/* <div className="flex flex-row items-center justify-center w-[100px] h-[100px] rounded-sm bg-[#ececec] text-white mb-4"> */}

      {/* </div> */}
      <div className="w-[20%]">
        <AiOutlineLaptop size="3rem" className="text-gray-900 mb-2" />
      </div>
      <div className="flex flex-col items-start justify-center pl-4">
        <h3 className="text-xl gil-med text-gray-900 mb-2">
          Custom Development
        </h3>
        <p className="text-gray-700 opacity-70 text-sm">
          We specialize in building custom web applications to meet your
          business needs.
        </p>
      </div>
    </div>
  );
  return (
    <div className="w-[100vw]">
      <div className="bg-gray-100 py-16 m-auto w-[90%]">
        <div className="container mx-auto px-2 lg:px-4 flex flex-col items-center">
          <div className="relative w-full mb-10">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1784&q=80"
              alt="About Us Image"
              layout="responsive"
              className="w-full h-[600px] object-cover"
            />
            {/* <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-50 z-10"></div> */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center z-20">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                Who We Are
              </h1>
              <p className="text-xl lg:text-2xl font-semibold text-white">
                We are a team of experts who are passionate about creating
                solutions for businesses of all sizes.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-wrap justify-center items-center">
            <div className="w-full mb-10">
              <div className="w-full flex flex-row items-center justify-between">
                {cardComp}
                {cardComp}
                {cardComp}
                {cardComp}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSlide;
