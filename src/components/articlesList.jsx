import React from "react";
import {
  BsArrowRightCircle,
  BsArrowLeftCircle,
  BsArrowRightCircleFill,
} from "react-icons/bs";
import HoverButton from "./reusableComponent/hoverButton";

export default function ArticlesList() {
  // const industryComp = () => {
  //   return (

  //   );
  // };
  const article = [
    {
      title: "Manufacturing",
      image:
        "https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/industry3-min.jpg?alt=media&token=e8243cdc-476d-4025-bf57-a8dddf289478",
    },
    {
      title: "City Infrastructure",
      image:
        "https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/factory-min.jpg?alt=media&token=e01d57f9-727e-46a3-a449-2122e28caca2",
    },
    {
      title: "Shippind & Logistics",
      image:
        "https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/ship-min.jpg?alt=media&token=be6a9b01-6735-44e1-92e1-6ca6f3a3409d",
    },
  ];

  const article2 = [
    {
      title: "Shipping Indutry",
      image:
        "https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/ship2-min.jpg?alt=media&token=3601d12e-cc13-4e08-b400-6d2e8624698f",
    },
    {
      title: "City Highlights",
      // https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/city-min.jpg?alt=media&token=845056f6-664a-4535-baad-d7bc6c114782
      image:
        "https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/city2-min.jpg?alt=media&token=c88d0ef0-ad3c-49ec-b410-c1d75864d0b9",
    },
    {
      title: "Stock Market",
      image:
        "https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/factory2-min.jpg?alt=media&token=b2aa7e3f-9b12-4db1-bf87-e2513b411ef9",
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
    <div className="min-h-[100vh] h-fit w-[100vw]">
      <div className="pt-10 w-full text-black gil-reg">
        <div className="w-[90%] m-auto">
          <div className="flex flex-row justify-between items-center w-full pb-8">
            <p className="gil-bold text-3xl md:text-5xl text-primary">
              Follow the latest articles & news
            </p>
            {/* <div className="flex flex-row items-center">
              <BsArrowLeftCircle className="inline-block text-3xl mr-2 text-primary cursor-pointer" />
              <BsArrowRightCircleFill className="inline-block text-3xl text-primary cursor-pointer" />
            </div> */}
          </div>
          <div className="flex flex-col md:flex-row w-full items-center justify-between">
            {article.map((item, index) => (
              <div
                key={index}
                className="text-primary bg-white flex flex-col items-start  h-[430px] w-full md:w-[400px] rounded-sm  p-3 md:m-0 m-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[50%] w-full object-cover rounded-sm"
                />
                <div className="flex flex-col items-start justify-center pt-4 pl-2">
                  <p className="text-xs text-primary opacity-70">
                    29 july, 2022
                  </p>
                  <p className="text-2xl pb-2 pt-6 text-primary">
                    {item.title}
                  </p>
                  <p className="opacity-70 text-sm text-primary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat iusto unde, nemo tempore iusto unde, nemo tempore
                  </p>
                  <div className="flex flex-row items-center justify-start pt-6">
                    <p className="gil-bold text-sm text-primary">READ MORE</p>
                    <BsArrowRightCircleFill className="inline-block text-md ml-2 text-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full m-auto mt-4 md:block hidden">
            <section className="relative w-full m-auto ">
              <img
                id="aboutUsImg"
                className="absolute w-full h-full object-cover rounded-md"
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80"
                alt="About Us"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-md"></div>
              <div className="relative flex justify-center items-center py-2">
                <div className="text-center text-white z-10">
                  <h1 className="text-4xl gil-bold mb-4">About Us</h1>
                  <p className="text-md mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    nec odio ac sapien rhoncus auctor sed vel mi. Pellentesque
                    dictum augue a purus maximus ultrices.
                  </p>
                  <div className="flex flex-row items-center w-full justify-center">
                    <HoverButton
                      text="Learn More"
                      className="bg-transparent  border hover:text-primary hover:bg-white border-white hover:border-white"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
