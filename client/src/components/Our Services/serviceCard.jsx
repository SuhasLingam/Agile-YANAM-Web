import React, { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const ServiceCard = ({ name, logo, text, color }) => {
  const [onHover, setOnHover] = useState(false);

  const setMouseEnter = () => {
    setOnHover(true);
  };

  const setMouseLeave = () => {
    setOnHover(false);
  };

  return (
    <div
      className={`flex w-[350px] p-4 rounded-3xl h-[350px] bg-[#FFFFFF33] bg-opacity-10 overflow-hidden relative`}
    >
      <div className="flex flex-col justify-between text-white">
        <div
          onMouseEnter={setMouseEnter}
          onMouseLeave={setMouseLeave}
          className="w-max h-max relative cursor-pointer"
        >
          {/* Outer Div Color*/}
          <div
            style={
              onHover
                ? {
                    transform: "scale(1) translate(-50%, -50%)",
                    width: "200px",
                    height: "200px",
                    opacity: 1,
                    borderRadius: "50%",
                    backgroundColor: "#FFD700",
                    zIndex: 2,
                  }
                : {
                    transform: "scale(0)",
                    width: "0",
                    height: "0",
                    opacity: 0,
                  }
            }
            className={`absolute top-0 left-0 rounded-3xl transition-all duration-300 ease-in-out`}
          >
            {/* Display text on hover */}
            <div className="bottom-[30px] right-[-70px] absolute text-center ">
              <a className="underline-offset-4 decoration-4 flex flex-row items-center justify-center text-2xl text-white underline cursor-pointer">
                See Projects <MdOutlineArrowOutward size={20} />
              </a>
            </div>
          </div>

          {/* Inder Div color */}
          <div
            style={
              onHover
                ? {
                    transform: "scale(1.3) translate(-50%, -50%)",
                    width: "450px",
                    height: "450px",
                    opacity: 1,
                    borderRadius: "50%",
                    zIndex: 1,
                  }
                : {
                    transform: "scale(0)",
                    width: "0",
                    height: "0",
                    opacity: 0,
                    zIndex: 1,
                  }
            }
            className={`absolute top-0 left-0 rounded-3xl bg-yellow-500 transition-all duration-300 ease-in-out`}
          ></div>

          <div className="z-10 flex items-center justify-center">{logo}</div>
        </div>
        <b className="flex items-center justify-center text-5xl">{name}</b>
        <p className={`text-justify`}>{text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
