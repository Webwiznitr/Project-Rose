import React from "react";
import ContactCard from "./ContactCard";

const SocietyContactCard = ({
  societyTitle,
  color1,
  color2,
  color3,
  stroke,
}) => {
  const representative1 = [
    {
      officialsImage:
        "https://res.cloudinary.com/webwiznitr/image/upload/v1679067314/SacOfficials/_SMX0028_cenbfl.jpg",
      name: "Prof. Poonam Singh",
      designation: "President",
      email: "psingh@nitrkl.ac.in",
    },
  ];
  const representative2 = [
    {
      officialsImage:
        "https://res.cloudinary.com/webwiznitr/image/upload/v1679067307/SacOfficials/_SMX0005_zusai0.jpg",
      name: "Kaustav Chaudhury",
      designation: "Vice-President, Technical Society",
      email: "chaudhuryk@nitrkl.ac.in",
    },
    {
      officialsImage:
        "https://res.cloudinary.com/webwiznitr/image/upload/v1679067310/SacOfficials/_SMX0008_olkbzm.jpg",
      name: "Prasun Chongder",
      designation: "Vice-President, Technical Society",
      email: "chongderp@nitrkl.ac.in",
    },
    {
      officialsImage:
        "https://res.cloudinary.com/webwiznitr/image/upload/v1679067300/SacOfficials/_SMX0031_d5jege.jpg",
      name: "Ramesh Kumar Mohapatra",
      designation: "Vice-President, Games and Sports Society",
      email: "mohapatrark@nitrkl.ac.in",
    },
    {
      officialsImage:
        "https://res.cloudinary.com/webwiznitr/image/upload/v1679067309/SacOfficials/_SMX0058_zr1azz.jpg",
      name: "Mayank Yadav",
      designation: "Vice-President, Games and Sports Society",
      email: "adavm@nitrkl.ac.in",
    },
    {
      officialsImage:
        "https://res.cloudinary.com/webwiznitr/image/upload/v1679067300/SacOfficials/_SMX0025_tkytpq.jpg",
      name: "Winny Routray",
      designation: "Vice-President, Literary and Cultural Society",
      email: "routrayw@nitrkl.ac.in",
    },
    {
      officialsImage:
        "https://res.cloudinary.com/webwiznitr/image/upload/v1679067300/SacOfficials/_SMX0024_faohbx.jpg",
      name: "Sivaraman J.",
      designation: "Vice-President, Literary and Cultural Society",
      email: "jsiva@nitrkl.ac.in",
    },

    {
      officialsImage:
        "https://res.cloudinary.com/webwiznitr/image/upload/v1679067308/SacOfficials/_SMX0013_aoss2e.jpg",
      name: "Balaji P.S.",
      designation: "Vice-President, Film and Music Society",
      email: "psbalaji@nitrkl.ac.in",
    },
    {
      officialsImage:
        "https://res.cloudinary.com/webwiznitr/image/upload/v1679067310/SacOfficials/_SMX0019_enah3a.jpg",
      name: "Binod Bihari Sahu",
      designation: "Vice-President, Film and Music Society",
      email: "sahub@nitrkl.ac.in",
    },
  ];

  const representative3 = [
    {
      officialsImage:
        "https://ik.imagekit.io/gourab18/ps.jpg?updatedAt=1678788056792",
      name: "Rajendra Kar",
      designation: "SAS Officer",
      email: "sahub@nitrkl.ac.in",
    },
    {
      officialsImage:
        "https://ik.imagekit.io/gourab18/ps.jpg?updatedAt=1678788056792",
      name: "Nalini Nihar Nayak",
      designation: "SAS Officer",
      email: "sahub@nitrkl.ac.in",
    },
    {
      officialsImage:
        "https://ik.imagekit.io/gourab18/ps.jpg?updatedAt=1678788056792",
      name: "T R Pattnaik",
      designation: "SAS Officer",
      email: "sahub@nitrkl.ac.in",
    },
  ];

  return (
    <div>
      <div
        className=" text-center text-4xl font-semibold pb-[8vh] md:pb-[10vh]"
        style={{ color: color1 }}
      >
        {societyTitle}
      </div>
      <div className="flex items-center justify-center mb-24 lg:mb-32">
        {representative1.map((data, idx) => {
          return (
            <ContactCard
              index={idx}
              name={data.name}
              designation={data.designation}
              email={data.email}
              color1={color1}
              color2={color2}
              color3={color3}
              stroke={stroke}
              image={data.officialsImage}
            />
          );
        })}
      </div>
      <div className="flex items-center justify-center">
        <div className="md:grid md:grid-cols-4 place-content-center md:gap-x-4 gap-y-24 lg:gap-y-32 max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
          {representative2.map((data, idx) => {
            return (
              <ContactCard
                index={idx}
                name={data.name}
                designation={data.designation}
                email={data.email}
                color1={color1}
                color2={color2}
                color3={color3}
                stroke={stroke}
                image={data.officialsImage}
              />
            );
          })}
        </div>
      </div>

      <div className=" grid grid-cols-[25vw_25vw_25vw]  place-content-center  gap-x-[5vw] max-[767px]:grid-cols-[80vw]  max-[767px]:place-content-center ml-10">
        {representative3.map((data, idx) => {
          return (
            <div className="flex items-center mt-[10vh] ">
              <ContactCard
                index={idx}
                name={data.name}
                designation={data.designation}
                email={data.email}
                color1={color1}
                color2={color2}
                color3={color3}
                stroke={stroke}
                image={data.officialsImage}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SocietyContactCard;
