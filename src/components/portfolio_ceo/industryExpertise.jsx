"use client";
import React from "react";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

const IndustryExpertise = () => {
  const expertiseList = [
    {
      name: "Industry Trend Analysis",
      description:
        "Expertise in analyzing industry trends and staying ahead of the curve.",
      icon: "trend",
    },
    {
      name: "Market Research",
      description:
        "Ability to conduct thorough market research and identify new opportunities for growth.",
      icon: "research",
    },
    {
      name: "Competitive Analysis",
      description:
        "Experience in conducting competitive analysis and developing strategies to stay ahead of the competition.",
      icon: "analysis",
    },
    {
      name: "Industry Networking",
      description:
        "Strong industry network and ability to leverage it for business development.",
      icon: "network",
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? expertiseList.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === expertiseList.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-gray-100 py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center font-bold text-gray-800 mb-8">
          Industry Expertise
        </h2>
        <div className="flex justify-between items-center mb-10">
          <button
            className="p-1 rounded-full hover:bg-gray-200 transition ease-in-out duration-150"
            onClick={handlePrev}
          >
            <MdArrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <div className="flex items-center space-x-4">
            {expertiseList.map((expertise, index) => (
              <button
                key={expertise.icon}
                className={`h-8 w-8 rounded-full ${
                  index === currentIndex
                    ? "bg-blue-500"
                    : "bg-gray-300 hover:bg-gray-400 transition ease-in-out duration-150"
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <span className="sr-only">{expertise.name}</span>
              </button>
            ))}
          </div>
          <button
            className="p-1 rounded-full hover:bg-gray-200 transition ease-in-out duration-150"
            onClick={handleNext}
          >
            <MdArrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex-shrink-0 h-20 w-20 rounded-full bg-blue-500 text-white flex items-center justify-center">
            {expertiseList[currentIndex].icon}
          </div>
          <div className="ml-6">
            <h3 className="text-lg font-medium text-gray-900">
              {expertiseList[currentIndex].name}
            </h3>
            <p className="text-gray-700">
              {expertiseList[currentIndex].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryExpertise;
