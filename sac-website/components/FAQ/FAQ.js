import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import QnA from "./QnA";

const FAQ = () => {
  {
    /* quesion is the question and ans is the answer to the question itself*/
  }
  {
    /* Similarly more and more can be added and removed*/
  }
  const questions = [
    {
      question: "Who is SAC?",
      answer:
        "Along with academic excellence, NIT Rourkela promotes extra-curricular activities to ensure all-round development of personality. The Student Activity Centre (SAC) is the central hub for student activities, student organizations, programming, events, sports, recreation and fun at the institute campus. The Student Activity Centre is organized into four primary societies and a host of satellite clubs. Besides, every society has satellite clubs that have their management under the overall supervision of SAC. The facility is devoted to student recreation and socialization to serve students, faculty, staff, alumni, and guests.",
    },
    {
      question: "What SAC does?",
      answer:
        `To promote a spirit of brotherhood among all students of the Institute, bridging
        differences in state origin, academic programme, branch of study, hall of
        residence, gender and cultural preferences. `,
    },
    {
      question: "Why do we need SAC?",
      answer:
        `To promote extra curricular activities – sports, cultural, artistic and technical,
        among all students of the Institute.`,
    },
    {
      question: "What are the societies under SAC ?",
      answer:
        `The activities of SAC are organized under four societies, each society focusing on one
        major aspect of campus life. The societies are:
        1. Technical Society (TS)
        2. Sports and Games Society (SG)
        3. Literary and Cultural Society (LC)
        4. Film and Music Society (FM)`,
    },
    {
      question: "What are SAPs ",
      answer:
        `Contribution to SAC activity, whether through one of the 4 main societies or through a
        satellite society, as a player or as a volunteer is quantified in terms of Student Activity
        Points, SAPs in short. Every activity, watching a game to serving as the captain, being a
        volunteer to being the main organizer draws SAPs which accumulate in the career of a
        student. The average contribution expressed in terms of SAPs per year server as an index
        of involvement in SAC activities. The SAP value of different activities is published by
        Dean(SW) from time to time on receiving approval of the Senate. `,
    },
    
  ];

  return (
    <Fade direction="up" triggerOnce="true" delay="50">
      <div className="flex flex-col-reverse justify-between md:flex-row overflow-hidden w-full">
        <div className="flex flex-col justify-center items-center w-full ">
          <h1 className="text-3xl font-bold flex items-center md:p-2 md:pt-4">
            FAQs
          </h1>

          <div className="w-full md:w-3/5 ">
            {questions.map((q, index) => (
              <QnA question={q.question} answer={q.answer} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default FAQ;
