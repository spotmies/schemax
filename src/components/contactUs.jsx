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
    <div className="w-[100vw] h-fit md:h-[550px] text-black" id="contactUs">
      <div className="m-auto w-[90%] bg-white h-full flex flex-col md:flex-row items-center justify-center rounded-sm">
        <div
          className="relative h-[300px] md:h-full w-full md:w-[30%] z-20"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-primary rounded-sm bg-opacity-50 z-10"></div>
          <div className="absolute h-full md:h-full flex flex-row items-end z-20">
            <div className="flex flex-col pl-6 text-white pb-4">
              <div className="text-2xl md:text-3xl gil-med text">Schemax experts techno crafts pvt ltd</div>
              <p className="gil-light text-xs opacity-70 w-[70%]">
                {/* AU incubation centre, Andhra university, Visakhapatnam - 530003, */}
                3rd floor, VUDA Building, Seethammadhara, TPT Colony, Balayya Sastri Layout, Visakhapatnam, Andhra Pradesh-530013, India
                <br />
                +91 9030069351
                <br />
                info@schemaxtech.com
                <br />
                <br />
                Flat No.302, Venkateswara Nilayam, MVP colony, Visakhapatnam, Andhra Pradesh-530017, India
                <br />
                +91 9945612838
              </p>
              <div className="flex flex-row w-[50%] pt-4 justify-between">
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
        <div className="h-fit md:h-full w-full md:w-[70%] gil-reg">
          <div className="h-full w-full m-auto p-4 md:p-8">
            <div className="flex flex-col items-center justify-between">
              <div className="flex flex-col items-start w-[90%] md:w-[90%]">
                <p className="gil-reg text-2xl text-primary">
                  GET IN <span className="gil-bold">TOUCH</span>
                </p>
                <p className="opacity-30 text-sm text-primary">
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
                    className="h-[50px] outline-none bg-transparent border border-gray-300 text-gray-900 text-sm rounded-none block w-full pl-10 p-2.5 "
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
                    className="h-[50px] outline-none bg-transparent border border-gray-300 text-gray-900 text-sm rounded-none block w-full pl-10 p-2.5 "
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
                  className="h-[50px] outline-none bg-transparent border border-gray-300 text-gray-900 text-sm rounded-none block w-full pl-10 p-2.5 "
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
                  className="h-[50px] outline-none bg-transparent border border-gray-300 text-gray-900 text-sm rounded-none block w-full pl-10 p-2.5 "
                  placeholder="9876543210"
                />
              </div>
              <div className="relative mb-6 w-[90%]">
                <textarea
                  rows={5}
                  type="text"
                  id="input-group-1"
                  className="outline-none bg-transparent border border-gray-300 text-gray-900 text-sm rounded-none block w-full p-2.5 "
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
