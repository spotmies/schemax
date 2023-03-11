import React from "react";
import {
  BsArrowRightCircle,
  BsArrowLeftCircle,
  BsArrowRightCircleFill,
} from "react-icons/bs";


export default function IndustriesList() {
  const industryComp = () => {
    return (
      <div className="text-black bg-white flex flex-col items-start  min-h-[430px] w-[350px] rounded-sm  p-3">
        <img
          src="https://wallpaperaccess.com/full/1944457.jpg"
          alt="industry"
          className=" w-full object-cover rounded-sm"
        />
        <div className="flex flex-col items-start justify-center pt-4 pl-2">
          <p className="text-xs text-[#4ac8ed] opacity-70">29 july, 2022</p>
          <p className="text-2xl pb-2 pt-6">Manufacturing</p>
          <p className="opacity-70 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            iusto unde, nemo tempore iusto unde, nemo tempore
          </p>
          <div className="flex flex-row items-center justify-start pt-6">
            <p className="font-bold text-sm text-[#4ac8ed]">READ MORE</p>
            <BsArrowRightCircleFill
              color="#4ac8ed"
              className="inline-block text-xl ml-2"
            />
          </div>
        </div>
      </div>
    );
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 70,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
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
  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 0,
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
    <div className="pt-10 w-full text-black gil-reg">
      <div className="w-[80%] m-auto">
        <div className="flex flex-row justify-between items-center w-full pb-8">
          <p className="gil-bold text-2xl">
            Follow the latest articles & news
          </p>
          <div className="flex flex-row items-center">
            <BsArrowLeftCircle
              color="#4ac8ed"
              className="inline-block text-3xl mr-2 "
            />
            <BsArrowRightCircleFill
              color="#4ac8ed"
              className="inline-block text-3xl"
            />
          </div>
        </div>
        <div className="flex flex-row w-full items-center justify-between">
          {industryComp()}
          {industryComp()}
          {industryComp()}
        </div>
      </div>
    </div>
  );
}
