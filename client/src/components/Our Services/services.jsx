import React from "react";
import ServiceCard from "./serviceCard";
import {
  FaPenNib,
  FaRegPlayCircle,
  FaCode,
  FaMicrosoft,
  FaCubes,
} from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { RiChatSmileLine } from "react-icons/ri";
import { SiMaterialdesignicons, SiSolidity } from "react-icons/si";
import { TfiRulerPencil } from "react-icons/tfi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { DiAndroid } from "react-icons/di";
import { TbPhotoCheck, TbDeviceDesktopCheck } from "react-icons/tb";
import { LiaSitemapSolid } from "react-icons/lia";

const ourServices = () => {
  const ServiceList = [
    {
      name: "UI/UX",
      logo: <FaPenNib size={25} />,
      DarkerColor: "#FF0000",
      LighterColor: "#FF8E8E",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab et,consectetur maiores neque incidunt ea, dolorem quidem dolorum quisquam,dolores nemo cupiditate corporis. Molestiae rerum atque labore voluptateut?",
    },
    {
      name: "Graphic Design",
      logo: <SiMaterialdesignicons size={25} />,
      DarkerColor: "#FF008A",
      LighterColor: "#FF8EC4",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab et,consectetur maiores neque incidunt ea, dolorem quidem dolorum quisquam,dolores nemo cupiditate corporis. Molestiae rerum atque labore voluptateut?",
    },
    {
      name: "Video Editing",
      logo: <FaRegPlayCircle size={25} />,
      DarkerColor: "#FF00F5",
      LighterColor: "#FD8EFF",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab et,consectetur maiores neque incidunt ea, dolorem quidem dolorum quisquam,dolores nemo cupiditate corporis. Molestiae rerum atque labore voluptateut?",
    },
    {
      name: "Web Dev",
      logo: <FaCode size={25} />,
      DarkerColor: "#FF8A00",
      LighterColor: "#FFBD8E",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab et,consectetur maiores neque incidunt ea, dolorem quidem dolorum quisquam,dolores nemo cupiditate corporis. Molestiae rerum atque labore voluptateut?",
    },
    {
      name: "App Dev",
      logo: <DiAndroid size={25} />,
      DarkerColor: "#FFD600",
      LighterColor: "#FFF48E",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab et,consectetur maiores neque incidunt ea, dolorem quidem dolorum quisquam,dolores nemo cupiditate corporis. Molestiae rerum atque labore voluptateut?",
    },
    {
      name: "Software Dev",
      logo: <FaMicrosoft size={25} />,
      DarkerColor: "#EBFF00",
      LighterColor: "#EFFF8E",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab et,consectetur maiores neque incidunt ea, dolorem quidem dolorum quisquam,dolores nemo cupiditate corporis. Molestiae rerum atque labore voluptateut?",
    },
    {
      name: "Blockchain Dev",
      logo: <FaCubes size={25} />,
      DarkerColor: "#CCFF00",
      LighterColor: "#DBFF8E",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab et,consectetur maiores neque incidunt ea, dolorem quidem dolorum quisquam,dolores nemo cupiditate corporis. Molestiae rerum atque labore voluptateut?",
    },
    {
      name: "AI Chatbot",
      logo: <RiChatSmileLine size={25} />,
      DarkerColor: "#61FF00",
      LighterColor: "#97FF8E",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab et,consectetur maiores neque incidunt ea, dolorem quidem dolorum quisquam,dolores nemo cupiditate corporis. Molestiae rerum atque labore voluptateut?",
    },
    {
      name: "Smart Contracts",
      logo: <SiSolidity size={25} />,
      DarkerColor: "#00FF94",
      LighterColor: "#8EFFB4",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab et,consectetur maiores neque incidunt ea, dolorem quidem dolorum quisquam,dolores nemo cupiditate corporis. Molestiae rerum atque labore voluptateut?",
    },
    {
      name: "Digital Marketing",
      logo: <HiOutlineSpeakerphone size={25} />,
      DarkerColor: "#00EAF9",
      LighterColor: "#8EF8FF",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab et,consectetur maiores neque incidunt ea, dolorem quidem dolorum quisquam,dolores nemo cupiditate corporis. Molestiae rerum atque labore voluptateut?",
    },
    {
      name: "Social Media Management",
      logo: <TbPhotoCheck size={25} />,
      DarkerColor: "#0075FF",
      LighterColor: "#8EBBFF",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab et,consectetur maiores neque incidunt ea, dolorem quidem dolorum quisquam,dolores nemo cupiditate corporis. Molestiae rerum atque labore voluptateut?",
    },
    {
      name: "Accounting & Auditing",
      logo: <TbDeviceDesktopCheck size={25} />,
      DarkerColor: "#8000FF",
      LighterColor: "#9E8EFF",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab et,consectetur maiores neque incidunt ea, dolorem quidem dolorum quisquam,dolores nemo cupiditate corporis. Molestiae rerum atque labore voluptateut?",
    },
    {
      name: "Housing & Mapping",
      logo: <LiaSitemapSolid size={25} />,
      DarkerColor: "#BA00FC",
      LighterColor: "#D48EFF",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab et,consectetur maiores neque incidunt ea, dolorem quidem dolorum quisquam,dolores nemo cupiditate corporis. Molestiae rerum atque labore voluptateut?",
    },
    {
      name: "Interior Designing",
      logo: <TfiRulerPencil size={25} />,
      DarkerColor: "#FFB800",
      LighterColor: "#FFD88E",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab et,consectetur maiores neque incidunt ea, dolorem quidem dolorum quisquam,dolores nemo cupiditate corporis. Molestiae rerum atque labore voluptateut?",
    },
  ];

  return (
    <div className="w-full h-full font-poppins items-center justify-center flex flex-col bg-[#000000]">
      <div className="flex my-[40px] md:my-[70px] items-center justify-center text-white">
        <b className="md:text-5xl text-3xl">OUR SERVICES</b>
      </div>

      <div className="md:mb-[100px] mb-[80px] grid items-center justify-center grid-flow-row md:grid-cols-3 grid-cols-1 gap-11 md:gap-10">
        {ServiceList.map((items) => (
          <ServiceCard
            name={items.name}
            logo={items.logo}
            text={items.content}
            DarkerColor={items.DarkerColor}
            LighterColor={items.LighterColor}
          />
        ))}
      </div>
      <div className="flex items-center md:mb-[80px] mb-[40px] justify-center text-white">
        <b className="md:text-5xl md:flex-row flex flex-col text-3xl">
          Looking for something else ?
          <span className=" md:pl-2 underline-offset-4 flex flex-row items-center justify-center underline cursor-pointer">
            Contact Us <MdOutlineArrowOutward />
          </span>
        </b>
      </div>
    </div>
  );
};

export default ourServices;
