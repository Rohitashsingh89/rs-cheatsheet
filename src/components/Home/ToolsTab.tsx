"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Resume1 from "@/images/resume/resume-template-01.svg";
import Resume2 from "@/images/resume/resume-template-02.svg";
import Resume3 from "@/images/resume/resume-template-03.svg";
import Resume4 from "@/images/resume/resume-template-04.svg";

const ToolsTab = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  const tabs = [
    {
      id: 0,
      name: "Resume",
      description:
        "Create unlimited new resumes and easily edit them afterwards.",
      imageUrl: Resume1,
      thumbnailImg: {
        dark: "https://www.cvwizard.com/api/media/icon/resume-dark",
        light: "https://www.cvwizard.com/api/media/icon/resume-light",
      },
    },
    {
      id: 1,
      name: "Cover Letters",
      description: "Easily write professional cover letters.",
      imageUrl: Resume2,
      thumbnailImg: {
        dark: "https://www.cvwizard.com/api/media/icon/letter-dark",
        light: "https://www.cvwizard.com/api/media/icon/letter-light",
      },
    },
    {
      id: 2,
      name: "Jobs",
      description: "Automatically receive new and relevant job postings.",
      imageUrl: Resume3,
      thumbnailImg: {
        dark: "https://www.cvwizard.com/api/media/icon/businesscenter-dark",
        light: "https://www.cvwizard.com/api/media/icon/businesscenter-light",
      },
    },
    {
      id: 3,
      name: "Applications",
      description:
        "Effortlessly manage and track your job applications in an organized manner.",
      imageUrl: Resume4,
      thumbnailImg: {
        dark: "https://www.cvwizard.com/api/media/icon/applications-dark",
        light: "https://www.cvwizard.com/api/media/icon/applications-light",
      },
    },
  ];

  const handleTabClick = (id: number) => {
    setActiveTab(id);
    setProgress(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % tabs.length);
      setProgress(0);
    }, 4000);

    return () => clearInterval(interval);
  }, [tabs.length]);

  useEffect(() => {
    if (activeTab !== null) {
      const progressInterval = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress < 100 ? prevProgress + 1 : 0
        );
      }, 40);

      return () => clearInterval(progressInterval);
    }
  }, [activeTab]);

  return (
    <>
      <h2 className="text-gray-900 dark:text-white font-medium text-3xl md:text-5xl mb-12">
        Tools
      </h2>
      <div
        className={`nc-SectionSubscribe2 relative flex flex-col lg:flex-row lg:items-center `}
        data-nc-id="SectionSubscribe2"
      >
        <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mr-10 lg:w-2/5">
          <div className="w-full flex flex-col overflow-x-auto lg:overflow-x-visible pe-0 md:pe-5 lg:pe-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                type="button"
                className={`group p-4 flex flex-row items-start justify-start text-start rounded focus-visible:ring-4 ring-brand ${
                  activeTab === tab.id ? "text-gray-200" : ""
                }`}
              >
                <div
                  className="relative border-transparent flex items-center justify-center rounded-full w-12 h-12 flex-grow-0 me-5"
                  style={{ minWidth: 48 }}
                >
                  <svg
                    className="absolute start-0 top-0"
                    width={48}
                    height={48}
                    viewBox="0 0 48 48"
                  >
                    <circle
                      stroke="currentColor"
                      className="text-gray-300"
                      strokeWidth={2}
                      fill="transparent"
                      cx={24}
                      cy={24}
                      r={23}
                    />
                    {activeTab === tab.id && (
                      <circle
                        className="progress-circle"
                        style={{
                          strokeDashoffset: 144 - (144 * progress) / 100,
                          strokeDasharray: "144, 144",
                          transition: "stroke-dashoffset 0.2s linear",
                          transform: "rotate(-90deg)",
                          transformOrigin: "50% 50%",
                        }}
                        stroke="#3b82f6"
                        strokeWidth={2}
                        fill="transparent"
                        cx={24}
                        cy={24}
                        r={23}
                      />
                    )}
                  </svg>

                  <img
                    loading="lazy"
                    id="steps-icon-Vid5"
                    className={`w-6 h-6`}
                    alt={tab.name}
                    src={
                      activeTab === tab.id
                        ? tab.thumbnailImg.light
                        : tab.thumbnailImg.dark
                    }
                  />
                </div>

                <div className="text-start">
                  <div className="flex justify-start pb-3">
                    <h3
                      id="steps-header-Vid5"
                      className={`text-xl font-medium text-gray-500 can-hover:group-hover:text-gray-700 ${
                        activeTab === tab.id ? "text-[#3b82f6]" : ""
                      }`}
                    >
                      {tab.name}
                    </h3>
                  </div>
                  <p
                    id="steps-description-Vid5"
                    className={`text-lg text-gray-500 can-hover:group-hover:text-gray-700 ${
                      activeTab === tab.id
                        ? "dark:text-neutral-400 text-gray-900"
                        : ""
                    } `}
                  >
                    {tab.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="flex-grow flex justify-center">
          <Image
            alt={tabs[activeTab].name}
            src={tabs[activeTab].imageUrl}
            loading="lazy"
            width={550}
            height={350}
            className="shadow"
          />
        </div>
      </div>
    </>
  );
};

export default ToolsTab;
