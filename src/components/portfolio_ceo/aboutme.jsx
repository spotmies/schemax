import React from "react";
// import ceoImage from './ceo.jpg'; // Replace with your own CEO image

const AboutMeSlide = () => {
  const data = [
    { label: "Clients", value: "20" },
    { label: "Projects", value: "50" },
    { label: "Users", value: "100" },
    { label: "Revenue", value: "190" },
  ];

  const grid = () => {
    return (
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        {data.map((item) => (
          <div key={item.label} className="p-4 text-start">
            <div className="text-3xl md:text-5xl gil-bold text-primary ">
              {item.value}+
            </div>
            <div className="text-primary text-sm opacity-60 ">{item.label}</div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="w-[100vw] h-[100vh] bg-white" id="naiduAbout">
      <div className="w-[90%] m-auto flex flex-col items-center justify-center py-20 bg-white">
        <div className="w-full">
          <h2 className="text-5xl gil-bold text-gray-800 mb-6">About Me</h2>
          <div className="flex flex-col md:flex-row h-full">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt="CEO"
              className="h-[70vh] w-full md:w-1/2 object-cover rounded-lg shadow-lg mb-4 md:mb-0"
            />
            <div className="h-[70vh] w-full flex flex-col justify-between items-start p-10">
              <div className="md:ml-8 flex flex-col justify-center">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Hi, my name is [CEO Name] and I am the CEO of [Company Name].
                  I have been with the company for [number of years] and have
                  played a critical role in [brief description of major
                  accomplishments].
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  My leadership style is focused on [brief description of
                  leadership philosophy]. I believe in [brief description of
                  core values or guiding principles].
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  In my free time, I enjoy [brief description of hobbies or
                  interests]. I also participate in [brief description of
                  community involvement or charity work].
                </p>
              </div>
              <div className="w-[80%] rounded-xl ml-4">
                {grid()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSlide;
