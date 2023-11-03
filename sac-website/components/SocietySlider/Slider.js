import React, { useState } from "react";
import data from "./data.js"
import FestCarousel from "../FestCarousel/FestCarousel.js";
import SocietyCard from "./SocietyCard.js"
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

export default function Slider() {
  const [carousel, setCarousel] = useState(data);

  return (
    <div className="mobile-hide">

    <Fade direction="up" triggerOnce="true">
      <div className="flex flex-col w-full h-full shadow-2xl	py-2 bg-black " style={{
        WebkitBoxShadow:"0px 0px 187px 20px rgba(0,0,0,0.9) inset",
        MozBoxShadow: "0px 0px 187px 20px rgba(0,0,0,0.9) inset",
        boxShadow: "0px 0px 187px 20px rgba(0,0,0,0.9) inset",
      }}>
      

     <div>
      <FestCarousel>
        {carousel.map((data) => {
          return (
            <Link href={data.link || "#"}>
              <SocietyCard name={data.name} img={data.img}/>
            </Link>
          );
        })}
      </FestCarousel>
      </div>
      </div>
    </Fade>
    </div>
  );
}
