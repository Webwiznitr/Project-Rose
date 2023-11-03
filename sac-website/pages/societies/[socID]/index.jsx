import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ClubName from "@/components/ClubName/ClubName";
import DeanSpeaks from "@/components/DeanSpeaks/DeanSpeaks";
import SocietyGallery from "@/components/SocietyGallery/SocietyGallery";
// import SocietyRepresentative1 from "@/components/SocietyRepresentative/SocietyContacts";
import { socData } from "../index.jsx";
import Head from "next/head.js";
import clubData from "../../../data/data.js";
import AboutNITR from "@/components/AboutPage/AboutNITR.js";

// import clubData from "../../../data/data.js";

export default function soc() {
  const router = useRouter();
  const { socID } = router.query;
  // console.log(socID);

  let backImg;
  let vcimg1;
  let vcimg2;
  let vc1;
  let vc2;
  if (socID == "Film and Music Society") {
    backImg =
      "https://res.cloudinary.com/dlru9kd0x/image/upload/f_auto,q_70/v1679168254/new%20societies/film1_atasq9.png";
    vcimg1 =
      "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679067310/SacOfficials/_SMX0019_enah3a.jpg";
    vc1="NIT Rourkela is a hub with a diverse set of students from various backgrounds. We have around 15 clubs under the Film and Music Society where the students get a distinct set to choose to pursue their pastimes and stage their talents. The students have been doing an incredible wonderful job, may it be in any club or on an individual basis, and I hope they keep on doing so."
    vcimg2 =
      "https://res.cloudinary.com/du3uvgzdr/image/upload/f_auto,q_70/v1698970848/1201379_vh4wkf.jpg";
    vc2=""   
  } else if (socID == "Technical Society") {
    backImg =
      "https://res.cloudinary.com/dlru9kd0x/image/upload/f_auto,q_70/v1679168250/new%20societies/technical1_lciid6.png";
    vcimg1 =
    "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679067307/SacOfficials/_SMX0005_zusai0.jpg"
    vc1=`Our society is a vibrant hub where students passionate about technology come together to explore, learn, and create. We offer diverse activities, workshops, and events catering to a broad spectrum of technical interests, from robotics to artificial intelligence and coding to engineering marvels. Our society is a community of like-minded individuals who are driven by their curiosity and a thirst for knowledge. We foster an environment that encourages collaboration, problem-solving, and the pursuit of cutting-edge ideas. Our members gain technical skills and develop leadership, teamwork, and communication abilities that are invaluable in the professional world. At the Technical Society, we take pride in the fact that our members are not just students but future innovators, entrepreneurs, and leaders in the world of technology. We look forward to pushing the boundaries of what's possible, breaking new ground, and leaving a lasting impact on our campus and beyond. Together, we strive to be at the forefront of technological advancement and make a positive difference in the world.`
    vcimg2 = 
    "https://res.cloudinary.com/de2s0mcjo/image/upload/v1697713524/PXL_20230925_133534302.MP_jscubn.jpg"
    vc2=`It is a privilege for me to have assumed the position of Vice President, Technical Society of Students Activity Centre, NIT Rourkela, on 3rd July 2023. It gives me immense pleasure to say that the Students Activity Centre is getting its own website after a long drawn effort. Not only the NITian community but beyond, will now be updated with the facts and updates of mesmerizing events of the students’ societies. I would like to thank all the members involved in successfully putting up their collaborative efforts in successfully bringing up the official website. It is highly informative and all clubs of every society will get their due recognition through the same. I would also like to thank the Dean (Students welfare) and the President (SAC) for their insights while developing the website. Wish for a smooth, uninterrupted progress and updation of the website in long run.`
    vc2=``
  } else if (socID == "Literary and Cultural Society") {
    backImg =
      "https://res.cloudinary.com/dlru9kd0x/image/upload/v1679168258/new%20societies/lcs_2_xwljvb.png";
    vcimg1 =
    "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679067300/SacOfficials/_SMX0025_tkytpq.jpg"
    vc1=`Interaction with students at NIT Rourkela provides a view into the interface of different cultural elements currently present in the country. Being a part of SAC allows us to contribute to the transformation of these young people, where they realize their full potential. Each year is new which is always a learning curve for us as well as students, but a new team always keeps it interesting. Literary and cultural society consists of a vibrant consortium of young people, who are individual perfectionists, in a group work hard to achieve wonders. The experience at SAC, I believe gives them a taste of real scenarios, which makes them stronger, confident, and practical. I wish all the best to the graduating batch and welcome the new batch and look forward to working with them.`
    vcimg2 =
    "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679067300/SacOfficials/_SMX0024_faohbx.jpg"
    vc2=`The Literary and Cultural Society provides the students with a platform where they can explore their passion, ranging from poetry and creative writing to debate and art. To a wide variety of students from diverse backgrounds, we have a diverse set of activities to choose from. Our students are consistently performing outstandingly in various competitions, demonstrating their passion and drive for success. I am immensely proud of their achievements, and I am sure that they will continue to excel in the future.`

  } else {
    backImg =
      "https://res.cloudinary.com/dlru9kd0x/image/upload/v1679168252/new%20societies/sport_f8whgf.png";
    vcimg1 =
    "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679067300/SacOfficials/_SMX0031_d5jege.jpg"
    vc1=`Our society serves as a vibrant and inclusive platform where students from diverse backgrounds come together to share their love for sports and games.

    At our core, we believe in fostering not only physical fitness but also camaraderie and teamwork. Our members are committed to both competitive and recreational sports, and we provide ample opportunities for them to hone their skills and showcase their talents.
    
    With dedication and unwavering enthusiasm, our society continues to make a positive impact on the NIT Rourkela community. We conduct Vriddhi every year which is the annual sports fest of NIT Rourkela and sees immense footfall from colleges across India. We strive to uphold the values of sportsmanship, discipline, and fair play. Together, we work towards promoting a healthy and active lifestyle while also creating memories and friendships that last a lifetime.
    
    I look forward to another year of exciting challenges and victories with our society as we strive to achieve new heights and inspire our fellow students to pursue their passions in the realm of games and sports.`

    vcimg2 =
    "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679067309/SacOfficials/_SMX0058_zr1azz.jpg"
    vc2=""

  }

  let socDescription = "";
  for (let index = 0; index < 4; index++) {
    if (socData[index].name == socID)
      socDescription = socData[index].description;
  }
  let socimage = "";
  for (let index = 0; index < 4; index++) {
    if (socData[index].name == socID) socimage = socData[index].aboutImg;
  }
  return (
    <>
      <Head>
        <title>Societies, NIT Rourkela</title>
        {/* <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" href="/favicon.ico" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        {/* *********** Meta SEO***********  */}
        <meta
          property="og:title"
          content="SAC NITR,Explore the plethora of thrilling events, exciting
              fests, diverse clubs and other activities in the
            beautiful campus of NIT Rourkela."
        />
        <meta
          name="keywords"
          content="sacnitr,sacnitrkl,sacnitrourkela, sac, club nitr, club, clubnitr, clubnitrkl, nitr,nitrkl,nitrourkela,nit,rourkela,nit rourkela,societies nitrkl,societiesnitrkl"
        />
        <meta
          name="description"
          content="Official Website of SAC NIT Rourkela"
        />
        {/* *********** Meta Facebook SEO***********  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sacnitr.com/" />
        <meta
          property="og:image"
          content="https://www.vriddhinitr.com/_next/static/media/logoBranding.00987fe3.png"
        />
        <meta property="og:image:width" content="806" />
        <meta property="og:image:height" content="280" />{" "}
        <meta name="description" content="sac 2021" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        className="w-[100vw] h-[100vh] bg-cover  "
        style={{
          backgroundImage: `url(${backImg})`,
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-black "
          style={{ opacity: "0.4" }}
        ></div>
        <div className="   bg-no-repeat w-full bg-cover bg-center min-h-screen">
          <div className=" w-full bg-cover bg-center min-h-screen">
            <div className="flex justify-center items-center min-h-screen">
              <div className=" text-center tracking-wide text-6xl font-bold  text-white  saturate-100 bg-cover top-0 left-0 ">
                {socID}
                <p className="  pt-10 md:text-2xl lg:text-xl text-sm   font-semibold tracking-wide mx-4 ">
                  THE TECHNICAL SOCIETY OF STUDENT ACTIVITY CENTRE, NIT
                  <br />
                  ROURKELA IS PROUD TO PRESENT ITS WORKING AND
                  <br />
                  ENTOURAGE TO ALL THE TECHNOCRATS AND INNOVATORS OF
                  <br />
                  MODERN ERA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DeanSpeaks
        data={`About ${socID}`}
        description={socDescription}
        image={socimage}
      />
      {/* <SocietyRepresentative1 /> */}
      <AboutNITR
        data="Vice President Speaks"
        img={`${vcimg1}`}
        description={ `${vc1}` || "It is a privilege for me to have assumed the position of Vice President, Technical Society of Students Activity Centre, NIT Rourkela, on 3rd July 2023. It gives me immense pleasure to say that the Students Activity Centre is getting its own website after a long drawn effort. Not only the NITian community but beyond, will now be updated with the facts and updates of mesmerizing events of the students’ societies. I would like to thank all the members involved in successfully putting up their collaborative efforts in successfully bringing up the official website."}
      />
      <DeanSpeaks
        data="Vice President Speaks"
        image={`${vcimg2}`}
        description={`${vc2}` || "It is a privilege for me to have assumed the position of Vice President, Technical Society of Students Activity Centre, NIT Rourkela, on 3rd July 2023. It gives me immense pleasure to say that the Students Activity Centre is getting its own website after a long drawn effort. Not only the NITian community but beyond, will now be updated with the facts and updates of mesmerizing events of the students’ societies. I would like to thank all the members involved in successfully putting up their collaborative efforts in successfully bringing up the official website."}
      />

      <ClubName socName={socID} />

      <SocietyGallery title={socID} />
    </>
  );
}

export async function getStaticPaths() {
  const socName = socData;

  const allPaths = socName.map((soc) => {
    return {
      params: {
        socID: soc.name.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const clubName = clubData;
  // console.log(params);
  const data = clubName.filter((club) => {
    return club.clubSociety == params.socID;
  });

  return {
    props: {
      data,
    },
  };
}
