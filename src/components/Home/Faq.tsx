"use client";

import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqData = [
    {
      question: "What is a Resume?",
      answer: `
        A résumé can be defined as a formal document that acts as a short summary 
        of a candidate’s professional traits, background, experience, and skills. 
        Resumes are crucial because they are typically used by recruiters and hiring 
        managers to evaluate whether applicants are the right fit for a particular 
        role.
      `,
    },
    {
      question: "What should be in a resume?",
      answer: `
        First, you’ll want to include your contact information, including your job title, 
        full name, phone number, and email address. If you have a LinkedIn profile, you 
        can include that information as well. Your resume format should also include a 
        professional summary that details how many years of experience you have, the 
        personal traits that make you suitable for the job, and your achievements.
      `,
    },
    {
      question: "How to make a professional resume?",
      answer: `
        When writing a resume, make sure that you maintain a professional tone, avoiding 
        both industry jargon and casual language. Use strong action verbs and quantify your 
        achievements to convey the impact of your experience.
      `,
    },
    {
      question: "Tips for preparing a resume",
      answer: `
        Your document should be no more than one page in length, unless for federal, 
        academic, or executive positions that require a long history. Additionally, ensure 
        you’re only using up-to-date information and avoid embellishing any of your 
        experience. Finally, check your grammar and spelling before submission.
      `,
    },
    {
      question: "Can I use CVwizard’s resume maker for free?",
      answer: `
        Yes. The resume creator includes both free and paid resume templates to help you 
        craft a professional application. Once you complete the sign-up process, you’ll 
        be able to create unlimited resumes for your job search.
      `,
    },
  ];

  return (
    <section className="bg-white dark:bg-neutral-900">
      <h2 className="font-medium text-3xl leading-normal md:text-5xl text-gray-900 dark:text-white text-center mb-20">
        Frequently Asked Questions
      </h2>
      <div
        id="drawer-Vida"
        className="flex flex-col w-full md:w-3/5 mx-0 px-2 md:mx-auto"
      >
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border-t border-b border-neutral-200 dark:border-neutral-700 -mb-px"
          >
            <button
              className="text-lg md:text-xl text-start text-gray-500 hover:text-gray-700 font-medium flex items-center w-full py-5 rounded-sm focus-visible:ring-4 ring-brand"
              type="button"
              onClick={() => handleToggle(index)}
            >
              <h2 className=" text-neutral-700 dark:text-neutral-300">
                {faq.question}
              </h2>
              <span className="ps-2 ms-auto">
                <span className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className={`w-5 text-gray-700 transition-transform duration-200 ${
                      activeIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path
                      fill="currentColor"
                      d="M480-373.539q-7.231 0-13.461-2.308t-11.846-7.923L274.924-563.539q-8.308-8.307-8.5-20.884t8.5-21.269T296-614.384t21.076 8.692L480-442.768l162.924-162.924q8.307-8.307 20.884-8.5t21.268 8.5q8.693 8.692 8.693 21.077 0 12.384-8.693 21.076L505.307-383.77q-5.615 5.615-11.846 7.923T480-373.539"
                    />
                  </svg>
                </span>
              </span>
            </button>
            <div
              className={`text-gray-500 leading-relaxed pb-5 prose w-full max-w-full ${
                activeIndex === index ? "block" : "hidden"
              }`}
            >
              <p className=" text-neutral-500 dark:text-neutral-400">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
