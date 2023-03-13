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

const IndustriesSection = () => {
  const industries = [
    {
      icon: <FaBuilding />,
      title: "Real Estate",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in finibus nulla. Integer convallis tortor vitae elit faucibus, at sagittis erat facilisis.",
      image:
        "https://images.unsplash.com/photo-1511454493857-0a29f2c023c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      icon: <FaIndustry />,
      title: "Manufacturing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in finibus nulla. Integer convallis tortor vitae elit faucibus, at sagittis erat facilisis.",
      image:
        "https://images.unsplash.com/photo-1557232651-49a0b560fea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      icon: <FaGlobe />,
      title: "Information Technology",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in finibus nulla. Integer convallis tortor vitae elit faucibus, at sagittis erat facilisis.",
      image:
        "https://images.unsplash.com/photo-1557232651-49a0b560fea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      icon: <FaUsers />,
      title: "Human Resources",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in finibus nulla. Integer convallis tortor vitae elit faucibus, at sagittis erat facilisis.",
      image:
        "https://images.unsplash.com/photo-1557232651-49a0b560fea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      icon: <FaLaptop />,
      title: "Software Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in finibus nulla. Integer convallis tortor vitae elit faucibus, at sagittis erat facilisis.",
      image:
        "https://images.unsplash.com/photo-1557232651-49a0b560fea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      icon: <FaCogs />,
      title: "Engineering",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in finibus nulla. Integer convallis tortor vitae elit faucibus, at sagittis erat facilisis.",
      image:
        "https://images.unsplash.com/photo-1557232651-49a0b560fea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
  ];

  return (
    <div className="w-[100vw] bg-white">
      <section className="bg-white py-12 m-auto w-[90%]">
        <div className="container mx-auto">
          <h2 className="text-4xl gil-bold text-gray-800 mb-8 ml-4">
            Industries We Serve
          </h2>
          <p className="text-gray-600 text-justify ml-4 w-[60%]">
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
                    <p className="text-white gil-med text-4xl">Manufacturing</p>
                    <p className="opacity-70 text-white text-sm onHoverShow text-justify pt-4">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quas deleniti mollitia, nostrum perferendis cumque minus
                      nobis, id possimus iusto animi recusandae autem quo
                      expedita explicabo ad ullam, dignissimos eos quia.
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
    </div>
  );
};

export default IndustriesSection;
