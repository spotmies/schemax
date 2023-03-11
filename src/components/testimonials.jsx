import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { CgQuote } from "react-icons/cg";
import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";
export default function Testimonials() {
  return (
    <div className="w-[100vw] h-[80vh] bg-sky-100 p-6">
      <div className="w-[80%] h-full m-auto flex flex-row items-center justify-between">
        <div className="w-[50%] h-full flex flex-col items-start">
          <div className="text-4xl gil-bold">
            What our clients say <br /> About us
          </div>
          <div className="w-full h-[250px] flex flex-row rounded-sm bg-white mt-4 items-start justify-between gil-reg p-6">
            <div className="w-[20%]">
              {" "}
              <CgQuote color="#4ac8ed" size="5rem" />
            </div>
            <div className="flex flex-col items-end w-[80%]">
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus consequuntur fugiat, voluptatem ut incidunt fuga
                inventore quis quae voluptatibus alias ipsam voluptates debitis
                dolorum minima accusantium et eum velit necessitatibus!
              </p>
              <div className="flex flex-row pt-6">
                <img
                  className="w-[50px] h-[50px] rounded-sm object-cover"
                  src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI="
                />
                <div className="flex flex-col items-start ml-4">
                  <p className="text-xl gil-med">Sekhar javvadi</p>
                  <p className="text-xs opacity-60">CTO, Spotmies</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-6 flex flex-row items-center w-full justify-end align-right">
            <BsArrowLeft color="grey" size="2rem" />
            <BsArrowRight color="#4ac8ed" size="4rem" />
          </div>
        </div>
      </div>
    </div>
  );
}
