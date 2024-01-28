import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import Cart from "../../assets/cart.webp";

const projects = () => {
  return (
    <div className="bg-[#000000]  w-full h-screen flex flex-col justify-center space-y-12 items-center">
      <div className="w-[60%] h-[350px] bg-[#FFFFFF]  bg-opacity-20 rounded-3xl text-white flex">
        <div className="flex flex-col p-11 justify-center items-stretch w-full h-full rounded-3xl">
          <b className="text-5xl uppercase">e - commerce website</b>
          <p className="font-semibold text-gray-300">20/20/2024</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, iure
            deserunt. Quas, ipsa quibusdam recusandae voluptatum, doloribus
            beatae repellendus voluptas ullam provident, ea eius magnam
            asperiores nulla. Enim, harum iusto.
          </p>
        </div>
        <div className="flex relative justify-centerrounded-3xl items-center w-[50%] h-full">
          <a>
            <BsArrowUpRightCircle
              className="absolute z-20 text-white right-11 top-11 "
              size={50}
            />
          </a>
          <img src={Cart} alt="" className="w-full h-full rounded-3xl" />
        </div>
      </div>
      <div className="w-[60%] h-[350px] bg-[#FFFFFF]  bg-opacity-20 rounded-3xl text-white flex">
        <div className="flex flex-col p-11 justify-center items-stretch w-full h-full rounded-3xl">
          <b className="text-5xl uppercase">e - commerce website</b>
          <p className="font-semibold text-gray-300">20/20/2024</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, iure
            deserunt. Quas, ipsa quibusdam recusandae voluptatum, doloribus
            beatae repellendus voluptas ullam provident, ea eius magnam
            asperiores nulla. Enim, harum iusto.
          </p>
        </div>
        <div className="flex relative justify-centerrounded-3xl items-center w-[50%] h-full">
          <a>
            <BsArrowUpRightCircle
              className="absolute z-20 text-white right-11 top-11 "
              size={50}
            />
          </a>
          <img src={Cart} alt="" className="w-full h-full rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default projects;
