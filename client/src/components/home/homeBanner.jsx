import React from "react";
import { FaArrowRight } from "react-icons/fa";

const homeBanner = () => {
  return (
    <div className="h-max flex-col space-y-[100px] mt-[100px] font-[700] flex items-center justify-center font-poppins w-full">
      <div>
        <p className="flex justify-center text-justify items-center text-5xl">
          Crafting Your Digital Destiny with
        </p>
        <p className="flex justify-center text-justify items-center text-5xl">
          Personalized Tech Approaches.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <button className="text-white bg-black p-4 px-8  rounded-3xl">
          Let's Connect <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default homeBanner;
