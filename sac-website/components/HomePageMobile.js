import React from "react";
import { ParallaxLayer, Parallax } from "@react-spring/parallax";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import react, { useState } from "react";
import Link from "next/link";
import { justify } from "@cloudinary/url-gen/qualifiers/textAlignment";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HomePageMobile = () => {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const modal = () => {
    setShowModal(!showModal);
    setIsOpen(!isOpen);
    // console.log(showModal);
  };
  return (
    <>
      <div className="h-screen mobile-hide ">
        

       
          
            <div className="bg-[url('https://ik.imagekit.io/tvfucug8t/image_766.png?updatedAt=1678715230940')] bg-cover bg-center w-full h-screen  ">
              <div
                style={{ height: "100vh" }}
                className="pb-10 flex flex-col justify-around items-center sticky top-0  bg-[#A4161A]/70 "
              >
                <div className="heading-div">
                  <div className="w-11/12 text-center text-white pl-6 mb-1 text-4xl">
                    Welcome to Student Activity Center
                  </div>
                  {/* <div className="text-white text-4xl text-center font-medium">
                    Creative Caliber <br /> at its best
                  </div> */}
                  <div className="text-white text-center w-4/5 m-auto text-sm mt-2">
                    Explore the plethora of thrilling events, exciting fests,
                    diverse clubs and other activities in the beautiful campus
                    of NIT Rourkela.
                  </div>
                </div>

                
              </div>
            </div>

          {/* <ParallaxLayer offset={0.9999999} speed={1.94}>
            <div className="cate h-fill relative ">
              <div>
                <LazyLoadImage
                  style={{
                    width: "100%",
                    height: "15.5vh",
                    objectFit: "cover",
                  }}
                  className="hover:w-9/12 cursor-pointer overflow-scroll"
                  src="https://ik.imagekit.io/tvfucug8t/fms_3.png?updatedAt=1678715231100"
                  alt=""
                />
                
              </div>
              <div
                className="absolute top-0 bottom-0 left-0 right-0 bg-black hover:text-red-500"
                style={{ opacity: "0.6" }}
              ></div>
              <h3
                className="parallax-card"
                style={{
                  position: "absolute",
                  top: "12%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  color: "white",
                  textShadow: "1px 1px 5px red",
                  textAlign: "center",
                }}
              >
                Film & Music Society
              </h3>

              <div>
                <h3
                  className="parallax-card"
                  style={{
                    position: "absolute",
                    top: "36%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    color: "white",

                    textShadow: "1px 1px 5px red",
                    textAlign: "center",
                  }}
                >
                  Technical Society
                </h3>
                <LazyLoadImage
                  style={{
                    width: "100%",
                    height: "15.5vh",
                    objectFit: "cover",
                  }}
                  src="https://ik.imagekit.io/tvfucug8t/315944295_683489136672980_8046188745263207622_n_1.png?updatedAt=1678715474291"
                  alt=""
                />
                
              </div>
              <div>
                <h3
                  className="parallax-card"
                  style={{
                    position: "absolute",
                    top: "60%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    color: "white",

                    textShadow: "1px 1px 5px red",
                    textAlign: "center",
                  }}
                >
                  Literary & Culture Society
                </h3>
                <LazyLoadImage
                  style={{
                    width: "100%",
                    height: "15.5vh",
                    objectFit: "cover",
                  }}
                  src="https://ik.imagekit.io/tvfucug8t/299931819_5474832855928681_3837718550837062886_n_2.png?updatedAt=1678715222688"
                  alt=""
                />
                
              </div>
              <div>
                <h3
                  className="parallax-card"
                  style={{
                    position: "absolute",
                    top: "85%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    color: "white",

                    textShadow: "1px 1px 5px red",
                    textAlign: "center",
                  }}
                >
                  Games & Sports
                </h3>
                <LazyLoadImage
                  style={{
                    width: "100%",
                    height: "15.5vh",
                    objectFit: "cover",
                  }}
                  src="https://ik.imagekit.io/gourab18/sports.png?updatedAt=1678795149858"
                  alt=""
                />
                
              </div>
            </div>
          </ParallaxLayer> */}

      </div>
    </>
  );
};

export default HomePageMobile;
