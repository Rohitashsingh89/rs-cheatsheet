"use client";

import React, { FC } from "react";
import Image from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";
import { motion } from "framer-motion";
import rightImg1 from "@/images/resume/resume-template-03.svg";
import rightImg2 from "@/images/resume/resume-template-04.svg";

export interface SectionSubscribe2Props {
  className?: string;
}

const ImpressionMenu: FC<SectionSubscribe2Props> = ({
  className = "bg-neutral-100 dark:bg-black dark:bg-opacity-20 ",
}) => {
  return (
    <div
      className={`nc-SectionClientSay nc-BackgroundSection inset-y-0 pl-4 sm:pl-10 pt-10 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 relative bg-black flex flex-col lg:flex-row lg:items-center ${className} h-auto lg:h-[100vh]  overflow-hidden`}
      data-nc-id="BackgroundSection"
    >
      <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mr-10 lg:w-2/5">
        <h2 className="font-semibold text-4xl">
          Make an impression with your resume 🎉
        </h2>
        <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
          Create and download a professional resume quickly and easily.
        </span>

        <ButtonPrimary className="mt-6 sm:mt-11">Create resume</ButtonPrimary>
      </div>

      <div className="flex-grow flex flex-col gap-4 lg:block hidden">
        <div className="flex gap-4 mb-4 justify-center">
          <motion.div
            className="flex flex-col"
            animate={{ y: [-20, -400] }}
            transition={{
              duration: 8,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <Image
              alt=""
              src={rightImg1}
              width={250}
              height={100}
              className="shadow"
            />
            <Image
              alt=""
              src={rightImg1}
              width={250}
              height={100}
              className="shadow py-4"
            />
            <Image
              alt=""
              src={rightImg1}
              width={250}
              height={100}
              className="shadow pb-4"
            />
            <Image
              alt=""
              src={rightImg1}
              width={250}
              height={100}
              className="shadow"
            />
          </motion.div>

          <motion.div
            className="flex flex-col"
            animate={{ y: [20, 400] }}
            transition={{
              duration: 8,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <Image
              alt=""
              src={rightImg2}
              width={250}
              height={100}
              className="shadow"
            />
            <Image
              alt=""
              src={rightImg2}
              width={250}
              height={100}
              className="shadow py-4"
            />
            <Image
              alt=""
              src={rightImg2}
              width={250}
              height={100}
              className="shadow pb-4"
            />
            <Image
              alt=""
              src={rightImg2}
              width={250}
              height={100}
              className="shadow"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ImpressionMenu;
