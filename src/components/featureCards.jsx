import React from "react";
import { AiFillSecurityScan, AiOutlineSecurityScan } from "react-icons/ai";
import { MdSecurityUpdateGood } from "react-icons/md";

export default function FeatureCards() {
  return (
    <div className="w-full h-[30vh] bg-slate-200">
      <div className="w-[80%] h-full m-auto flex flex-col items-center justify-center">
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row  bg-white items-center p-2 h-[90px] w-[270px] rounded-none">
            <div className="w-[20%]">
              <AiFillSecurityScan size="3rem" color="green" />
            </div>
            <div className="flex flex-col justify-center items-start">
              <p className="text-2xl gil-reg">Security</p>
              <p className="text-xs opacity-50">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="flex flex-row  bg-white items-center p-2 h-[90px] w-[270px] rounded-md">
            <div className="w-[20%]">
              <AiOutlineSecurityScan size="3rem" color="green" />
            </div>
            <div className="flex flex-col justify-center items-start">
              <p className="text-2xl gil-reg">Security</p>
              <p className="text-xs opacity-50">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="flex flex-row  bg-white items-center p-2 h-[90px] w-[270px] rounded-md">
            <div className="w-[20%]">
              <AiOutlineSecurityScan size="3rem" color="green" />
            </div>
            <div className="flex flex-col justify-center items-start">
              <p className="text-2xl gil-reg">Security</p>
              <p className="text-xs opacity-50">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
