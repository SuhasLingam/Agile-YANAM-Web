import React, { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Logo from "../assets/logo.png";

const navbar = () => {
  const [navStatus, setNavStatus] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const setNavColor = () => {
      if (window.scrollY >= 30) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", setNavColor);
  }, []);

  const Lists = [
    { name: "HOME", link: "/" },
    { name: "ABOUT US", link: "/About" },
    { name: "OUR SERVICES", link: "/Services" },
  ];

  return (
    <div
      className={`flex font-semibold fixed z-50 ${
        scroll
          ? "bg-white bg-opacity-50 backdrop-blur-[6px] transition-all delay-75 ease-in-out"
          : "bg-white"
      } w-full top-0 font-mainFont md:p-3 md:w-full p-4 md:h-max md:text-2xl justify-between items-center`}
    >
      {/** Logo */}

      <div
        className={`md:font-extrabold  md:ml-11 ml-4 text-2xl font-extrabold`}
      >
        <img width={50} height={50} src={Logo} alt="Logo" />
      </div>

      {/** Nav Items */}

      <div
        className={`md:flex md:items-center md:visible ${
          navStatus
            ? "flex flex-col visible space-y-2 items-center justify-center"
            : "hidden"
        }  md:justify-between `}
      >
        <ul
          className={`md:flex md:gap-11 md:font-medium ${
            navStatus
              ? "font-bold text-xl flex flex-col items-center justify-center space-y-2"
              : ""
          }`}
        >
          {Lists.map((items, index) => (
            <li key={index}>
              <a href={items.link}>
                <span className="hover:border-b-4 hover:shadow-xl hover:border-blue-300 hover:transition-all duration-200">
                  {items.name}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/** Contact Us Button */}
        <div className="md:ml-11">
          <button
            className={`text-white  md:flex md:visible ${
              navStatus ? "block" : "hidden"
            } text-[20px] md:p-2 p-1 rounded-3xl  px-4 md:rounded-3xl md:px-6 md:mr-6 bg-[#000]`}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/** Responsive Nav Menu*/}

      <div className="md:hidden items-centers- flex justify-center">
        <a
          href="https://forms.gle/gC14oUFKpQCQS21T7"
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
        </a>
      </div>
    </div>
  );
};

export default navbar;
