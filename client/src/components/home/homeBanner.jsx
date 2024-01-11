import React from "react";
import { FaArrowRight } from "react-icons/fa";

const homeBanner = () => {
  return (
    <div>
      <div className="h-full flex-col mt-[80px]  space-y-[100px] font-[700] flex items-center justify-center font-poppins w-full">
        {/** Header */}
        <div>
          <p className="flex justify-center text-justify items-center text-5xl">
            Crafting Your Digital Destiny with
          </p>
          <p className="flex justify-center text-justify items-center text-5xl">
            Personalized Tech Approaches.
          </p>
        </div>
        {/** Button */}
        <div className="flex justify-center items-center ">
          <a className="text-white bg-black p-4 flex-row  gap-3 px-8 flex items-center justify-center rounded-3xl">
            Let's Connect <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default homeBanner;
