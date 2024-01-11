import React from "react";

const navbar = () => {
  const Lists = [
    { name: "HOME", link: "/" },
    { name: "ABOUT US", link: "/" },
    { name: "OUR SERVICES", link: "/" },
  ];

  return (
    <div className="flex font-poppins bg-slate-500 md:p-3 md:text-2xl md:justify-between md:items-center">
      <div className="">LOGO</div>
      <div>
        <ul className="flex gap-11">
          {Lists.map((items) => (
            <li>
              <a href={items.link}>{items.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button className="text-white text-xl p-2 rounded-3xl px-6 bg-[#000]">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default navbar;
