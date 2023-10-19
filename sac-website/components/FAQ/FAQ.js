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
      question:
        "What is the Student Activity Center (SAC) at NIT Rourkela, and what is its primary role?",
      answer:
        "The Student Activity Center (SAC) at NIT Rourkela is a vital student body responsible for overseeing and organizing various events and activities that contribute to the overall development and well-being of the students. Its primary role includes conducting a wide range of events, fests, and initiatives aimed at enhancing technical, cultural, and soft skills aspects of students' lives.",
    },
    {
      question:
        " What are some of the major festivals and events organized by SAC?",
      answer:
        "SAC is known for hosting a variety of festivals and events throughout the year. Some of the major events include:Innovision: NIT Rourkela's annual technical festival, featuring technical competitions, workshops, and guest lectures.NITRUTSAV: The cultural fest that celebrates diversity and creativity through music, dance, drama, and more.NITRIMUN: A Model United Nations (MUN) conference where students engage in debates and diplomacy. Cosmo: Occasional celebrations of various regional and ethnic cultures to promote diversity and harmony.",
    },
    {
      question:
        " How does SAC contribute to students' soft skills development?",
      answer:
        " SAC conducts workshops, seminars, and training sessions aimed at improving students' soft skills. These sessions cover topics like communication, leadership, teamwork, time management, and other important skills that are valuable in both academic and professional settings. Students can attend these sessions to enhance their personal and professional growth.",
    },
    {
      question: "How does SAC ensure the welfare of students at NIT Rourkela?",
      answer:
        "SAC plays a crucial role in ensuring the welfare of students by providing a platform for recreational and extracurricular activities. It also facilitates student engagement, offers mental health support, and promotes a sense of belonging within the NIT Rourkela community. SAC often collaborates with the institute administration to address student concerns and improve their overall experience.",
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
