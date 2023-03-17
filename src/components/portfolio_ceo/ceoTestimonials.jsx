"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ceoTestimonials } from "../../constants";
import { motion } from "framer-motion";
import styles from "../../styles";
import { staggerContainer, fadeIn } from "../../utils/motion";
export default function CeoTestimonials() {
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
      items: 4,
      partialVisibilityGutter: 70,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      partialVisibilityGutter: 0,
    },
  };

  return (
    <section
      className={`${styles.paddings} h-fit  relative z-10 bg-primary`}
      id="testimonials"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} h-fit min-h-[70vh] mx-auto flex flex-col`}
      >
        <p className="w-[100%] md:w-[70%] gil-bold text-3xl md:text-5xl text-white">
          What our clients say
        </p>

        <p className="gil-reg text-md opacity-60 w-full md:w-[50%] text-white pt-4">
          Our commitment to delivering high-quality software solutions within a
          quick turnaround time helps our clients achieve success faster. By
          leveraging the latest technologies and innovative approaches, we
          enable our clients to stay ahead of the competition and achieve their
          business objectives.
        </p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`w-[90vw] m-auto mt-[50px]`}
        >
          <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
            {/* <div className="w-[90vw] m-auto"> */}
            <Carousel responsive={responsive} partialVisible={true}>
              {ceoTestimonials.map((testimonial, index) =>
                testimonialCard({ ...testimonial, key: index })
              )}
            </Carousel>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );

  function testimonialCard({ text, image, name, position, when, key }) {
    return (
      <div
        key={key}
        className="bg-gradient-to-r to-slate-100 from-slate-300 flex flex-col justify-between w-[80vw] min-h-[300px] max-h-[350px] md:max-h-[350px] md:min-h-[300px] md:w-[500px] gradient-05 rounded-md m-2 md:p-6 p-4 shadow-sm"
      >
        {/* <div className="flex flex-col h-full justify-between"> */}
        <p className="text-primary opacity-80 text-md  md:text-xl  text-justify text-ellipsis">
          "{text}"
        </p>

        <div className="flex flex-row w-full justify-between items-center ">
          <div className="flex flex-row mt-[10px]">
            <img
              src={image}
              alt=""
              className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] object-cover rounded-full"
            />
            <div className="flex flex-col ml-1 md:ml-4">
              <p className="text-primary font-bold text-md md:text-xl">
                {name}
              </p>
              <p className="text-primary opacity-50 text-xs md:text-md">
                {position}
              </p>
            </div>
          </div>
          <p className="text-primary opacity-20 text-[9px] md:text-xs">
            {when}
          </p>
        </div>
        {/* </div> */}
      </div>
    );
  }
}
