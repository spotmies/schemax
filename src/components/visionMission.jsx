import React from "react";

const visionImage =
  "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80";
const missionImage =
  "https://images.unsplash.com/photo-1522756890800-ac12d130a43f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";

const VisionMissionSection = () => {
  return (
    <div className="w-[100vw] h-fit md:h-[100vh] bg-white">
      <section className="w-[90%] m-auto h-full flex flex-col items-center justify-between py-8 md:py-16">
        <p className="text-3xl md:text-5xl text-center gil-bold text-primary mb-8 md:mb-16">
          Empowering People to Achieve Their Goals
        </p>
        <div className="container mx-auto px-4 ">
          <div className="flex flex-col md:flex-row md:-mx-4">
            <div className="w-full md:w-1/2 md:px-4 mb-12 md:mb-0">
              <img
                src={visionImage}
                alt="Vision"
                className="object-cover h-[350px] w-full rounded-sm mb-4"
              />
              <h2 className="text-3xl md:text-4xl gil-bold mb-4">Our Vision</h2>
              <p className="text-primary mb-4">
                Our vision is to be a leading software development company,
                recognized for delivering innovative solutions that empower
                businesses and individuals to succeed in a rapidly-evolving
                digital world.
              </p>
              <p className="text-primary mb-4">
                We aim to make a positive impact on society by creating
                high-quality, reliable, and scalable software solutions. Our
                collaborative approach and commitment to rigorous testing ensure
                that we exceed our clients' expectations and build long-lasting
                partnerships.
              </p>
            </div>
            <div className="w-full md:w-1/2 md:px-4">
              <img
                src={missionImage}
                alt="Mission"
                className="object-cover h-[350px] w-full rounded-sm mb-4"
              />
              <h2 className="text-3xl md:text-4xl gil-bold mb-4">
                Our Mission
              </h2>
              <p className="text-primary mb-4">
                We strive to transform ideas into exceptional software
                solutions, through collaborative teamwork, user-centered design,
                and cutting-edge technology. We aim to exceed our clients'
                expectations by delivering high-quality, reliable and scalable
                software solutions, and to foster a culture of innovation and
                continuous improvement in all that we do.
              </p>
              <p className="text-primary mb-4">
                Our ultimate goal is to empower businesses and individuals to
                achieve their full potential through the power of technology.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMissionSection;
