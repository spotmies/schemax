"use client";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import {
  FaBuilding,
  FaIndustry,
  FaGlobe,
  FaUsers,
  FaLaptop,
  FaCogs,
} from "react-icons/fa";

const manufacturing = "/assets/images/manufacturing.jpg";
const retail = "/assets/images/retail2.jpg";
const healthcare = "/assets/images/health.jpg";
const logistics = "/assets/images/logistics3.jpg";
// const government = "/assets/images/government.jpg";
const edutech = "/assets/images/edu.jpg";

const IndustriesSection = () => {
  const industries = [
    {
      icon: <FaBuilding />,
      title: "Manufacturing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in finibus nulla. Integer convallis tortor vitae elit faucibus, at sagittis erat facilisis.",
      image: manufacturing,
      // image:
      //   "https://images.unsplash.com/photo-1511454493857-0a29f2c023c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      icon: <FaIndustry />,
      title: "Retail",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in finibus nulla. Integer convallis tortor vitae elit faucibus, at sagittis erat facilisis.",
      image: retail,
      // image:
      //   "https://images.unsplash.com/photo-1557232651-49a0b560fea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      icon: <FaGlobe />,
      title: "Health Care",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in finibus nulla. Integer convallis tortor vitae elit faucibus, at sagittis erat facilisis.",
      image: healthcare,
    },
    {
      icon: <FaUsers />,
      title: "Logistics & Warehouse",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in finibus nulla. Integer convallis tortor vitae elit faucibus, at sagittis erat facilisis.",
      image: logistics,
    },
    {
      icon: <FaLaptop />,
      title: "Government",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in finibus nulla. Integer convallis tortor vitae elit faucibus, at sagittis erat facilisis.",
      image:
        "https://images.unsplash.com/photo-1557232651-49a0b560fea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      icon: <FaCogs />,
      title: "EduTech",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in finibus nulla. Integer convallis tortor vitae elit faucibus, at sagittis erat facilisis.",
      image: edutech,
    },
  ];

  return (
    <div className="w-[100vw] bg-white">
      <section className="bg-white py-12 m-auto w-[90%] md:block hidden">
        <div className="container mx-auto w-full">
          <h2 className="text-5xl gil-bold text-primary mb-8 ml-4">
            Industries We Serve
          </h2>
          <p className="text-primary opacity-60 text-justify ml-4 w-[60%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptas, quod, quia, voluptate quae voluptates quibusdam
            voluptatibus quos quas quidem quia voluptates quibusdam
          </p>
          <div className="flex flex-wrap">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 p-6 flex flex-col"
                // whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex-2 bg-white  rounded-b-none overflow-hidden shadow-sm hover:shadow-md relative industry-card">
                  <div className="absolute inset-0 bg-primary opacity-20 hover:opacity-70 opacity-layer"></div>
                  <div className="absolute inset-0 w-full h-full p-6 flex flex-col">
                    <p className="text-white gil-med text-4xl">
                      {industry.title}
                    </p>
                    <p className="opacity-70 text-white text-sm onHoverShow text-justify pt-4">
                      {industry.description}
                    </p>
                    <BsArrowRight
                      size="2rem"
                      color="white"
                      className="absolute bottom-[20px] right-[30px]  onHoverShow"
                    />
                  </div>

                  <a href="#">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-[350px] object-cover mypic"
                    />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-12 px-4 sm:px-8 lg:px-16 xl:px-32 md:hidden block">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-4xl sm:text-5xl gil-bold text-primary mb-8 ml-4">
            Industries We Serve
          </h2>
          <p className="text-primary opacity-60 text-justify ml-4 md:ml-0 md:w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptas, quod, quia, voluptate quae voluptates quibusdam
            voluptatibus quos quas quidem quia voluptates quibusdam
          </p>
          <div className="flex flex-wrap mt-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 p-4 sm:p-6 flex flex-col"
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex-2 bg-white rounded-b-none overflow-hidden shadow-sm hover:shadow-md relative industry-card">
                  <div className="absolute inset-0 bg-primary opacity-20 hover:opacity-70 opacity-layer"></div>
                  <div className="absolute inset-0 w-full h-full p-6 flex flex-col">
                    <p className="text-white gil-med text-3xl sm:text-4xl">
                      {industry.title}
                    </p>
                    <p className="opacity-70 text-white text-sm onHoverShow text-justify pt-4">
                      {industry.description}
                    </p>
                    <BsArrowRight
                      size="2rem"
                      color="white"
                      className="absolute bottom-4 right-4 onHoverShow"
                    />
                  </div>

                  <a href="#">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-52 md:h-60 object-cover mypic"
                    />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesSection;
