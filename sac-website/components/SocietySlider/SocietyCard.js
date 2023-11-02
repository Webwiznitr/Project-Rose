import React from "react";
import { Target } from "react-feather";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SocietyCard = ({ name, img }) => {
  return (
    
    <div>
      <div className=" w-[100vw] h-[50vh] rounded-lg shadow-lg flex justify-center text-white  ">

        <div className=" w-[100vw]  lg:flex flex-cols-2 xl:max-w-full xl:h-full shadow-lg bg-cover bg-center bg-no-repeat bg-black/70 " style={{backgroundImage:`url(${img})`,objectFit:'contain'}}>
          <div className="w-[100%]  lg:mx-4 p-[1.5rem] w-full md:my-0 flex flex-col justify-center items-center h-[50vh] lg:w-2/6 lg:h-[96vh] md:h-[45vh] sm:h-[50vh]  pt-12   md:pt-16 lg:pt-8 bg-black/70">
            
            <div className="category  font-bold text-2xl md:text-4xl lg:text-3xl tracking-wide my-0 md:my-2 lg:my-0 relative z-50 text-center " >
            {name}
            </div>
          </div>
        </div>
        
      </div>
    </div>
    
  );
};

export default SocietyCard;
