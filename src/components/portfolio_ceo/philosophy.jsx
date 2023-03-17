import React from "react";

export default function Philosophy() {
  return (
    <div className="w-[100vw] h-[100vh] bg-bg2 hidden md:block">
      <div className="w-[90%] m-auto h-[100vh] flex flex-row items-center justify-center">
        <p className="w-[60%] text-6xl text-primary gil-bold">
          I believe that leadership is about serving others and putting their
          needs above my own.
        </p>
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            // sticky background image on scroll
            backgroundAttachment: "fixed",
          }}
        ></div>
      </div>
    </div>
  );
}
