import React from "react";
import {
  MdOutlineBook,
  MdOutlineVideogameAsset,
  MdOutlineCamera,
  MdOutlineMovie,
  MdOutlineQueueMusic,
} from "react-icons/md";

const interests = [
  {
    name: "Music",
    icon: <MdOutlineQueueMusic size="3rem" />,
  },
  {
    name: "Gaming",
    icon: <MdOutlineVideogameAsset size="3rem" />,
  },
  {
    name: "Movies",
    icon: <MdOutlineMovie size="3rem" />,
  },
  {
    name: "Reading",
    icon: <MdOutlineBook size="3rem" />,
  },
  {
    name: "Photography",
    icon: <MdOutlineCamera size="3rem" />,
  },
];

const PersonalInterests = () => {
  return (
    <div className="w-[100vw]">
      <div className="w-full bg-gray-100 py-16">
        <div className="w-[90%] mx-auto">
          <h2 className="text-5xl gil-bold mb-12 text-primary">
            Personal Interests
          </h2>
          <div className="flex flex-wrap">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="w-1/2 md:w-1/3 lg:w-1/5 flex flex-col items-center mb-8 hover:scale-110 transition duration-300 transform cursor-pointer text-primary opacity-60 hover:opacity-100"
              >
                {interest.icon}
                <h3 className="text-2xl font-bold mt-2">{interest.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInterests;
