import React, { useState } from "react";

const serviceCard = ({ name, logo, text }) => {
  const [onHover, setOnHover] = useState(false);
  const setMouseEnter = () => {
    setOnHover(true);
  };
  const setMouseLeave = () => {
    setOnHover(false);
  };

  return (
    <div
      className={`flex w-[350px] p-4 rounded-3xl h-[350px] bg-[#FFFFFF33] bg-opacity-10`}
    >
      <div className="flex flex-col justify-between text-white">
        <div
          onMouseEnter={setMouseEnter}
          onMouseLeave={setMouseLeave}
          className="w-max h-max cursor-pointer"
        >
          <p className="underline-offset-4 w-max decoration-8 font-bold underline">
            {logo}
          </p>
        </div>
        <b className=" flex items-center justify-center text-5xl">{name}</b>
        <p className="text-justify">{text}</p>
      </div>
    </div>
  );
};

export default serviceCard;
