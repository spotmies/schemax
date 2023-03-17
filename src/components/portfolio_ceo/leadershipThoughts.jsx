'use client';
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const ThoughtLeadershipSlide = () => {
  const thoughtLeadership = [
    {
      id: 1,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst.",
      author: "John Doe",
      title: "CEO, Company A",
    },
    {
      id: 2,
      quote:
        "Vivamus euismod enim nec risus lacinia, ut rhoncus lorem tristique. In vestibulum malesuada nibh, a rhoncus justo maximus eu.",
      author: "Jane Smith",
      title: "CTO, Company B",
    },
    {
      id: 3,
      quote:
        "Proin vel mauris quis velit accumsan tristique. Nulla a luctus nibh, id fermentum felis.",
      author: "Bob Johnson",
      title: "COO, Company C",
    },
  ];

  const [activeSlide, setActiveSlide] = React.useState(0);

  const nextSlide = () => {
    setActiveSlide(
      activeSlide === thoughtLeadership.length - 1 ? 0 : activeSlide + 1
    );
  };

  const prevSlide = () => {
    setActiveSlide(
      activeSlide === 0 ? thoughtLeadership.length - 1 : activeSlide - 1
    );
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Thought Leadership
          </h2>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-3xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-400 shadow-lg transform skew-x-12 sm:skew-x-0 sm:-rotate-6 sm:rounded-lg"></div>
              <div className="relative bg-white shadow-lg sm:rounded-lg px-8 pt-8 pb-6">
                <div className="max-w-md mx-auto text-center">
                  <div className="h-12 w-12 rounded-full bg-primary inline-flex items-center justify-center">
                    <FaQuoteLeft className="text-white" />
                  </div>
                  <p className="mt-5 text-lg text-gray-500">
                    {thoughtLeadership[activeSlide].quote}
                  </p>
                  <div className="mt-8">
                    <div className="text-2xl font-semibold text-primary">
                      {thoughtLeadership[activeSlide].author}
                    </div>
                    <div className="text-gray-500">
                      {thoughtLeadership[activeSlide].title}
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <button
                    onClick={prevSlide}
                    className="mx-2 text-gray-500 hover:text-primary focus:outline-none"
                  >
                    <span className="sr-only">Previous</span>
                    <IoMdArrowDropleft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="mx-2 text-gray-500 hover:text-primary focus:outline-none"
                  >
                    <span className="sr-only">Next</span>
                    <IoMdArrowDropright className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThoughtLeadershipSlide;
