"use client";
import React, { useRef } from "react";
import { Transition } from "@headlessui/react";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const positions = [
  {
    id: 1,
    title: "Chairman",
    name: "John Doe",
    image:
      "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
    description:
      "Responsible for leading the board and ensuring that the organization achieves its objectives.",
  },
  {
    id: 2,
    title: "CEO",
    name: "Jane Smith",
    image:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    description:
      "Responsible for developing and executing the organization's strategic plans and overseeing its day-to-day operations.",
  },
  {
    id: 3,
    title: "CFO",
    name: "Bob Johnson",
    image:
      "https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?format=jpg&width=960",
    description:
      "Responsible for managing the organization's financial resources and ensuring its long-term financial stability.",
  },
];

const BoardPositionSlider = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const boardRef = useRef(null);

  const prevPosition = () => {
    currentIndex === 0
      ? setCurrentIndex(positions.length - 1)
      : setCurrentIndex(currentIndex - 1);
  };

  const nextPosition = () => {
    currentIndex === positions.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="h-fit min-h-[100vh] w-[100vw] bg-bg2">
      <h2 className="text-5xl gil-bold py-8 text-center">Board positions</h2>
      <div className="relative overflow-hidden">
        <div className="relative h-[65vh]">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              ref={boardRef}
              src={positions[currentIndex].image}
              alt={positions[currentIndex].position}
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>

          <div className=" z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4 md:py-8 absolute inset-0 px-10">
              <button
                className="text-white bg-primary rounded-full p-4 transition duration-300 hover:bg-opacity-90 focus:outline-none"
                onClick={prevPosition}
              >
                <AiOutlineLeft className="h-6 w-6" />
                <span className="sr-only">Previous</span>
              </button>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                  {positions[currentIndex].title}
                </h2>
                <p className="gil-regular text-white text-2xl text-center">
                  {positions[currentIndex].description}
                </p>
              </div>
              <button
                className="text-white bg-primary rounded-full p-4 transition duration-300 hover:bg-opacity-90 focus:outline-none"
                onClick={nextPosition}
              >
                <AiOutlineRight className="h-6 w-6" />
                <span className="sr-only">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Transition
            show={true}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 py-10">
              {positions.map((position, index) => (
                <div
                  key={index}
                  className="relative rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    className="w-full h-48 md:h-56 object-cover"
                    src={position.image}
                    alt={position.position}
                  />
                  <div className="absolute inset-0 bg-black opacity-60"></div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-white">
                        {position.title}
                      </h3>
                      <p className="text-gray-200 text-sm mt-1">
                        {position.description}
                      </p>
                    </div>
                    <div className="mt-6">
                      <button
                        onClick={() => {
                          setCurrentIndex(index);
                          boardRef.current.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }}
                        className="text-white bg-primary rounded    px-4 py-2 transition duration-300 hover:bg-opacity-90 focus:outline-none"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Transition>
        </div>
      </div>
    </div>
  );
};

export default BoardPositionSlider;
