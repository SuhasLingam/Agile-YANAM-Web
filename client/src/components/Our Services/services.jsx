import React from "react";
import ServiceCard from "./serviceCard";

const ourServices = () => {
  const ServiceList = [
    {
      name: "UI/UX",
      logo: "LOGO",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab et,consectetur maiores neque incidunt ea, dolorem quidem dolorum quisquam,dolores nemo cupiditate corporis. Molestiae rerum atque labore voluptateut?",
    },
    {
      name: "Graphic Design",
      logo: "LOGO",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab et,consectetur maiores neque incidunt ea, dolorem quidem dolorum quisquam,dolores nemo cupiditate corporis. Molestiae rerum atque labore voluptateut?",
    },
    {
      name: "Video Editing",
      logo: "LOGO",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab et,consectetur maiores neque incidunt ea, dolorem quidem dolorum quisquam,dolores nemo cupiditate corporis. Molestiae rerum atque labore voluptateut?",
    },
    {
      name: "Web Dev",
      logo: "LOGO",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab et,consectetur maiores neque incidunt ea, dolorem quidem dolorum quisquam,dolores nemo cupiditate corporis. Molestiae rerum atque labore voluptateut?",
    },
    {
      name: "App Dev",
      logo: "LOGO",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab et,consectetur maiores neque incidunt ea, dolorem quidem dolorum quisquam,dolores nemo cupiditate corporis. Molestiae rerum atque labore voluptateut?",
    },
    {
      name: "Software Dev",
      logo: "LOGO",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab et,consectetur maiores neque incidunt ea, dolorem quidem dolorum quisquam,dolores nemo cupiditate corporis. Molestiae rerum atque labore voluptateut?",
    },
    {
      name: "Blockchain Dev",
      logo: "LOGO",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab et,consectetur maiores neque incidunt ea, dolorem quidem dolorum quisquam,dolores nemo cupiditate corporis. Molestiae rerum atque labore voluptateut?",
    },
    {
      name: "AI Chatbot",
      logo: "LOGO",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab et,consectetur maiores neque incidunt ea, dolorem quidem dolorum quisquam,dolores nemo cupiditate corporis. Molestiae rerum atque labore voluptateut?",
    },
    {
      name: "Smart Contracts",
      logo: "LOGO",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab et,consectetur maiores neque incidunt ea, dolorem quidem dolorum quisquam,dolores nemo cupiditate corporis. Molestiae rerum atque labore voluptateut?",
    },
    {
      name: "Digital Marketing",
      logo: "LOGO",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab et,consectetur maiores neque incidunt ea, dolorem quidem dolorum quisquam,dolores nemo cupiditate corporis. Molestiae rerum atque labore voluptateut?",
    },
    {
      name: "Social Media Management",
      logo: "LOGO",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab et,consectetur maiores neque incidunt ea, dolorem quidem dolorum quisquam,dolores nemo cupiditate corporis. Molestiae rerum atque labore voluptateut?",
    },
    {
      name: "Accounting & Auditing",
      logo: "LOGO",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab et,consectetur maiores neque incidunt ea, dolorem quidem dolorum quisquam,dolores nemo cupiditate corporis. Molestiae rerum atque labore voluptateut?",
    },
    {
      name: "Housing & Mapping",
      logo: "LOGO",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab et,consectetur maiores neque incidunt ea, dolorem quidem dolorum quisquam,dolores nemo cupiditate corporis. Molestiae rerum atque labore voluptateut?",
    },
    {
      name: "Interior Designing",
      logo: "LOGO",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab et,consectetur maiores neque incidunt ea, dolorem quidem dolorum quisquam,dolores nemo cupiditate corporis. Molestiae rerum atque labore voluptateut?",
    },
  ];

  return (
    <div className="w-full h-full font-poppins items-center justify-center flex flex-col bg-[#000000]">
      <div className="flex my-[70px] items-center justify-center text-white">
        <b className="text-5xl">OUR SERVICES</b>
      </div>

      <div className="mb-[100px] grid items-center justify-center grid-flow-row grid-cols-3 gap-10">
        {ServiceList.map((items) => (
          <ServiceCard
            name={items.name}
            logo={items.logo}
            text={items.content}
          />
        ))}
      </div>
    </div>
  );
};

export default ourServices;
