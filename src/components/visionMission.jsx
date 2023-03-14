import React from "react";

const visionImage =
  "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80";
const missionImage =
  "https://images.unsplash.com/photo-1522756890800-ac12d130a43f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";

const VisionMissionSection = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-white">
      <section className="w-[90%] m-auto h-full flex flex-col items-center justify-between py-16">
        <p className="text-5xl text-center gil-bold">
          Empowering People to Achieve Their Goals
        </p>
        <div className="container mx-auto px-4 ">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0">
              <img
                src={visionImage}
                alt="Vision"
                className="object-cover h-[350px] w-full rounded-sm mb-4"
              />
              <h2 className="text-4xl gil-bold mb-4">Our Vision</h2>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                non lorem et augue porta aliquet. Nam ut ornare orci. Nullam ut
                augue eget eros fermentum egestas. Suspendisse vitae mi felis.
                Praesent vel magna ut tortor volutpat eleifend.
              </p>
              <p className="text-gray-700 mb-4">
                Morbi sit amet nibh volutpat, laoreet ipsum a, ornare odio. Sed
                lacinia leo euismod magna molestie, vel rutrum lectus varius.
                Fusce euismod augue eget neque ultrices auctor.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <img
                src={missionImage}
                alt="Mission"
                className="object-cover h-[350px] w-full rounded-sm mb-4"
              />
              <h2 className="text-4xl gil-bold mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                non lorem et augue porta aliquet. Nam ut ornare orci. Nullam ut
                augue eget eros fermentum egestas. Suspendisse vitae mi felis.
                Praesent vel magna ut tortor volutpat eleifend.
              </p>
              <p className="text-gray-700 mb-4">
                Morbi sit amet nibh volutpat, laoreet ipsum a, ornare odio. Sed
                lacinia leo euismod magna molestie, vel rutrum lectus varius.
                Fusce euismod augue eget neque ultrices auctor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMissionSection;
