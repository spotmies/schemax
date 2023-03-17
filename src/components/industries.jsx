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

const manufacturing =
  "https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/manufacturing-min.jpg?alt=media&token=72964973-72e0-4cc5-81d0-653be963043e";
const retail =
  "https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/retail2-min.jpg?alt=media&token=c16c9fcb-eb34-4793-8d06-cc4e311d5503";
// https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/retail-min.jpg?alt=media&token=8178a760-7959-4e00-ada5-af47509104ca
const healthcare =
  "https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/health-min.jpg?alt=media&token=22b2b4a6-e12b-4ec8-9b40-e95084205816";
// https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/health2-min.jpg?alt=media&token=4119cfbe-ef09-4648-8e2f-09492d660b2f
// https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/health3-min.jpg?alt=media&token=3c573c10-8e0d-4361-9d88-6f304409a4c4
const logistics =
  "https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/logistics3-min.jpg?alt=media&token=d0600f58-2cb4-40b6-85df-960c951098cd";
// https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/logistics2-min.jpg?alt=media&token=9af193a5-e86d-492a-9e9a-93fb8a9a68b3
// https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/logistics-min.jpg?alt=media&token=8006139f-9bd0-40b8-bdd4-9ec07ce1922f
// const government = "/assets/images/government.jpg";
const edutech =
  "https://firebasestorage.googleapis.com/v0/b/schemax-875a7.appspot.com/o/edu-min.jpg?alt=media&token=54d58c5b-24bf-4d6a-819d-460b378f8951";

const IndustriesSection = () => {
  const industries = [
    {
      icon: <FaBuilding />,
      title: "Manufacturing",
      description:
        "As manufacturing evolves to embrace the digital age, we help businesses thrive in the Industry 4.0 era with innovative technology solutions and unparalleled expertise.",
      image: manufacturing,
      // image:
      //   "https://images.unsplash.com/photo-1511454493857-0a29f2c023c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      icon: <FaIndustry />,
      title: "Retail",
      description:
        "We help retail stores stay ahead of the curve with technology-driven solutions that enhance customer experiences and streamline operations.",
      image: retail,
      // image:
      //   "https://images.unsplash.com/photo-1557232651-49a0b560fea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      icon: <FaGlobe />,
      title: "Health Care",
      description:
        "We empower healthcare providers with technology solutions that improve patient care, optimize workflows, and enhance operational efficiency.",
      image: healthcare,
    },
    {
      icon: <FaUsers />,
      title: "Logistics & Warehouse",
      description:
        "Our logistics and warehouse solutions leverage the latest technology to optimize supply chain operations, reduce costs, and enhance overall efficiency.",
      image: logistics,
    },
    {
      icon: <FaLaptop />,
      title: "Government",
      description:
        "We partner with government agencies to deliver secure, scalable, and cost-effective technology solutions that enable streamlined operations, increased transparency, and improved citizen services.",
      image:
        "https://images.unsplash.com/photo-1557232651-49a0b560fea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      icon: <FaCogs />,
      title: "EduTech",
      description:
        "Our innovative edutech solutions help educational institutions transform the way they teach and engage students, creating immersive and effective learning experiences.",
      image: edutech,
    },
  ];

  return (
    <div className="w-[100vw] bg-white" id="industries">
      <section className="bg-white py-12 m-auto w-[90%] md:block hidden">
        <div className="container mx-auto w-full">
          <h2 className="text-5xl gil-bold text-primary mb-8 ml-4">
            Industries We Serve
          </h2>
          <p className="text-sm md:text-lg text-primary opacity-60 text-justify ml-4 w-[60%]">
            Our expertise across various industries will help you to bridge the
            gaps with our innovative solutions
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
