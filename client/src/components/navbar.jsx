import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const navbar = () => {
  const [navStatus, setNavStatus] = useState(false);

  const Lists = [
    { name: "HOME", link: "/" },
    { name: "ABOUT US", link: "/" },
    { name: "OUR SERVICES", link: "/" },
  ];

  return (
    <div className="flex font-poppins md:p-3 w-full h-max  md:text-2xl md:justify-between md:items-center">
      <div className="md:font-extrabold md:ml-11">LOGO</div>
      <div>
        <ul className="flex md:gap-11 md:font-medium">
          {Lists.map((items) => (
            <li>
              <a href={items.link}>{items.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button className="text-white text-[20px] md:p-2 md:rounded-3xl md:px-6 md:mr-6 bg-[#000]">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default navbar;
