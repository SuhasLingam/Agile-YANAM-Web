import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Logo from "../assets/logo.png";

const navbar = () => {
  const [navStatus, setNavStatus] = useState(false);

  const Lists = [
    { name: "HOME", link: "/" },
    { name: "ABOUT US", link: "/" },
    { name: "OUR SERVICES", link: "/" },
  ];

  return (
    <div
      className={`flex fixed z-50 bg-white top-0 font-poppins md:p-3 md:w-full p-4 md:h-max md:text-2xl justify-between items-center`}
    >
      {/** Logo */}

      <div className="md:font-extrabold md:ml-11 ml-4 text-2xl font-extrabold">
        <img
          className="aspect-auto"
          width={50}
          height={50}
          src={Logo}
          alt="Logo"
        />
      </div>

      {/** Nav Items */}

      <div
        className={`md:flex md:items-center md:visible ${
          navStatus
            ? "flex flex-col visible items-center justify-center"
            : "hidden"
        }  md:justify-between`}
      >
        <ul className={`md:flex md:gap-11 md:font-medium `}>
          {Lists.map((items) => (
            <li>
              <a href={items.link}>{items.name}</a>
            </li>
          ))}
        </ul>

        {/** Contact Us Button */}
        <div>
          <button
            className={`text-white md:ml-[340px] md:flex md:visible ${
              navStatus ? "block" : "hidden"
            } text-[20px] md:p-2 p-1 rounded-3xl px-4 md:rounded-3xl md:px-6 md:mr-6 bg-[#000]`}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/** Responsive Nav Menu*/}

      <div className="md:hidden items-centers- flex justify-center">
        <button
          className="mr-2"
          onClick={() => {
            setNavStatus(!navStatus);
          }}
        >
          {navStatus ? (
            <IoClose className="md:hidden text-black" size={40} />
          ) : (
            <HiMenu className="md:hidden text-black" size={40} />
          )}
        </button>
      </div>
    </div>
  );
};

export default navbar;
