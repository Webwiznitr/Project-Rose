import React from "react";
import { Target } from "react-feather";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
const FestCarousel = ({ name, category, desc, link, img }) => {
  return (
    <div>
      <div className=" w-[100vw] h-[100vh] rounded-lg shadow-lg flex justify-center text-white  ">
        <div className=" bg-black lg:flex flex-cols-2 xl:max-w-full xl:h-full ">
          <div className="  lg:mx-4 p-[1.5rem] w-full md:my-0 flex flex-col justify-center h-[50vh] lg:w-2/6 lg:h-[96vh] md:h-[45vh] sm:h-[50vh]  pt-12   md:pt-16 lg:pt-8">
            {/* <div className=" title font-normal text-xl md:text-3xl tracking-wide lg:my-1 lg:text-xl md:my-1 my-1 ">
              Fests
            </div> */}
            <div className="category font-bold text-2xl md:text-4xl lg:text-3xl tracking-wide my-0 md:my-2 lg:my-0">
              {name}
            </div>
            <div className="category text-lg md:text-2xl lg:text-xl font-semibold lg:my-2 md:my-2 my-1">
              {category}
            </div>

            <div className="w-full flex justify-center pb-6 text-sm lg:text-lg xl:text-xl my-0 md:my-2 lg:my-0 md:text-3xl relative ">
              {desc}
            </div>
          </div>
          <div className="xl:w-[92vw] lg:w-4/6 md:w-[98vw] lg:h-[90vh] md:h-[55vh] h-[50vh] mx-auto md:my-8 flex mt-[1.4rem] justify-center items-center ">
            <div>
              <LazyLoadImage
                className="xl:h-full sm:h-[50vh]  md:h-full sm:w-[98vw]  object-cover  h-[50vh] "
                src={img}
                alt="img"
              />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FestCarousel;
