import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function AboutNITR({ data = "About NITR", img, description }) {
  return (
    <Fade direction="up" triggerOnce="true" delay="50">
      <div className=" lg:flex lg:flex-row flex   md:flex-row flex-col-reverse ">
        <div className="flex flex-col  justify-center items-start md:w-[50vw] lg:w-[50%] mt-[06rem]  py-[2rem] md:p-[1.2rem] lg:p-[1rem] lg:mt-[2.5rem]  lg:pb-4  lg:pl-2.5 lg:pr-12 lg:mt-[-14rem] max-lg:h-[30vh] max-sm:mt-[3.5rem] md:max-lg:mt-[-1.75rem]">
          <h1 className="transition ease-in-out delay-150  font-[500] xl:text-[2rem] max-xl:text-[1.5rem] tracking-wide pb-[1rem] md:pl-6 ">
            {data}
          </h1>
          <div className="xl:text-[1.2rem] max-xl:text-[0.83rem] md:pl-6">{description}</div>
        </div>
        <div>
          <img
            src={img}
            alt="FAQ"
            className="w-[100vw]  clip-your-needful-style-down md:w-[50vw] h-[100%] md:clip-your-needful-style-right object-cover lg:h-[60vh] "
          />
        </div>
      </div>
    </Fade>
  );
}
