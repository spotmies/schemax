import React from "react";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineMan,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineMobile,
} from "react-icons/ai";
import { FaFacebook, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import HoverButton from "./reusableComponent/hoverButton";

export default function ContactUs() {
  return (
    <div className="w-[100vw] h-[550px] text-black">
      <div className="m-auto w-[80%] bg-white h-full flex flex-row items-center justify-center rounded-sm">
        <div
          className="h-full w-[30%]"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* <img
            src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="contact us"
            className="h-[70%] w-full object-cover"
          /> */}
          <div className="h-full flex flex-row items-end">
          <div className="flex flex-col pl-6 text-black pb-4">
            <div className="text-3xl gil-med text">Schemax</div>
            <p className="gil-light text-xs opacity-70 w-[70%]">
              Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit.
              Voluptatibus saepe nostrum accusantium! Labore iure
            </p>
            <div className="flex flex-row w-[60%] pt-4 justify-between">
              <div className="w-[40px] h-[40px] bg-transparent flex flex-col items-center justify-center cursor-pointer ">
                <AiOutlineTwitter size="1.6rem" />
              </div>
              <div className="w-[40px] h-[40px] bg-transparent flex flex-col items-center justify-center cursor-pointer">
                <FaLinkedinIn size="1.4rem" />
              </div>
              <div className="w-[40px] h-[40px] bg-transparent flex flex-col items-center justify-center cursor-pointer">
                <AiFillInstagram size="1.6rem" />
              </div>
              <div className="w-[40px] h-[40px] bg-transparent flex flex-col items-center justify-center cursor-pointer">
                <FaFacebookF size="1.4rem" />
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="h-full w-[70%] gil-reg">
          <div className="h-full w-full m-auto p-8">
            <div className="flex flex-col items-center justify-between">
              <div className="flex flex-col items-start w-[90%]">
            <p className="gil-reg text-2xl">
              GET IN <span className="gil-bold">TOUCH</span>
            </p>
            <p className="opacity-30 text-sm">
              24/7 We will answer your questions & problems
            </p>
            </div>
            <div className="w-[90%] flex flex-row items-center justify-between pt-6">
              <div className="relative mb-6 w-[45%]">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <AiOutlineUser />
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="h-[50px] outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none block w-full pl-10 p-2.5 "
                  placeholder="First name"
                />
              </div>
              <div className="relative mb-6 w-[45%]">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <AiOutlineUser />
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="h-[50px] outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none block w-full pl-10 p-2.5 "
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="relative mb-6 w-[90%]">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <AiOutlineMail />
              </div>
              <input
                type="text"
                id="input-group-1"
                className="h-[50px] outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none block w-full pl-10 p-2.5 "
                placeholder="your@email.com"
              />
            </div>
            <div className="relative mb-6 w-[90%]">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <AiOutlineMobile />
              </div>
              <input
                type="text"
                id="input-group-1"
                className="h-[50px] outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none block w-full pl-10 p-2.5 "
                placeholder="9876543210"
              />
            </div>
            <div className="relative mb-6 w-[90%]">
              <textarea
                rows={5}
                type="text"
                id="input-group-1"
                className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none block w-full p-2.5 "
                placeholder="Description"
              />
            </div>

            <div className="flex flex-row justify-end w-[90%]">
             <HoverButton text="Submit" className="w-full h-12" />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
