import React from "react";

const about = () => {
  return (
    <>
      <div className="font-mainFont md:mt-0 mt-[60px] flex flex-col md:space-y-10 space-y-6 items-center pt-[10%] md:pt-[8%] w-full h-screen">
        <b className="md:text-5xl text-3xl font-extrabold">ABOUT US</b>

        <p className="md:mx-[18%] mx-[8%] md:pb-11 pb-8 text-justify text-lg md:text-xl">
          At the core of our company's mission is the unwavering commitment to
          empowering businesses through innovative solutions. We strive to be
          the catalyst for your success by providing tailored services that
          adapt to your unique needs and challenges. Our goal is to streamline
          your processes, enhance collaboration, and drive growth in an
          ever-evolving digital landscape
        </p>

        <div className="relative flex flex-row items-center justify-center w-full h-screen">
          <div className="absolute flex left-[4%] md:left-[28%] items-center justify-center border-black border-2 top-0 md:top-0 md:w-[25%] w-[50%] md:h-[70%] h-[60%] bg-[#FFB5B5] rounded-3xl">
            <div className="relative w-full h-full">
              <div className="md:-top-[7%] md:text-xl text-sm -top-[6%] rounded-3xl border-2 flex justify-center items-center border-black md:left-[22%] left-[20%] md:w-[60%] w-[65%] md:h-[16%] h-[17%] bg-[#FFD600] absolute">
                What Sets Us Apart
              </div>
            </div>

            <div className="absolute md:left-[11%] left-[5%] z-10 space-y-5 md:space-y-8">
              <p className=" md:text-2xl font-bold">Client-Centric Approach</p>
              <p className=" md:text-2xl font-bold">Versatile</p>
              <p className=" md:text-2xl font-bold">Innovation at the Core</p>
            </div>
          </div>
          <div className="absolute flex items-center justify-center bg-[#FFBD8E] border-black border-2 md:right-[25%] right-[4%] md:bottom-[10%] bottom-[8%] md:w-[25%] w-[50%] md:h-[70%] h-[60%] rounded-3xl">
            <div className="relative w-full h-full">
              <div className="md:-top-[7%] md:text-xl text-sm -top-[6%] rounded-3xl border-2 flex justify-center items-center border-black md:left-[22%] left-[20%] md:w-[60%] w-[65%] md:h-[16%] h-[17%] bg-[#FFD600] absolute">
                Why Choose Us
              </div>
            </div>

            <div className="absolute md:left-[11%] left-[5%] z-10 space-y-5 md:space-y-8">
              <p className=" md:text-2xl font-bold">Reliability</p>
              <p className=" md:text-2xl font-bold">Scalability</p>
              <p className=" md:text-2xl font-bold">Collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
