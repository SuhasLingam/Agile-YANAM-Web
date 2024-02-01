import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import Cart from "../../assets/cart.webp";

const projects = () => {
  return (
    <>
      <div className="bg-[#000000]  py-[100px] w-full h-full   flex  flex-col justify-center space-y-12 items-center">
        <p className="md:text-9xl text-6xl text-white font-bold">UI UX</p>
        <div className="md:w-[60%] md:flex-row flex-col md:h-[350px] w-[70%] bg-[#FFFFFF]  bg-opacity-20 rounded-3xl text-white flex ">
          <div className="flex flex-col p-11 justify-center items-stretch w-full h-full rounded-3xl">
            <b className="md:text-5xl text-3xl uppercase">
              e - commerce website
            </b>
            <p className="font-semibold text-gray-300">20/20/2024</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              iure deserunt. Quas, ipsa quibusdam recusandae voluptatum,
              doloribus beatae repellendus voluptas ullam provident, ea eius
              magnam asperiores nulla. Enim, harum iusto.
            </p>
          </div>
          <div className="flex relative justify-center  rounded-3xl items-center md:w-[50%] md:h-full w-full h-[70%]">
            <a>
              <BsArrowUpRightCircle
                className="absolute z-20 text-white right-11 top-11 "
                size={50}
              />
            </a>
            <img
              src={Cart}
              alt=""
              className="md:w-full md:h-full w-full h-[280px] rounded-3xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default projects;
