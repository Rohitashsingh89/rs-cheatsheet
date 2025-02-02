import React, { FC } from "react";
import imagePng from "@/images/hero/hero.png";
import Image from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";

export interface SectionHeroProps {
  className?: string;
}

const SectionHero: FC<SectionHeroProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative ${className}`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center my-auto">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-medium text-4xl md:text-5xl xl:text-5xl !leading-[114%] ">
            The CV that gets the job… done
          </h2>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            Build a new CV or improve your existing one with step-by-step expert
            guidance.
          </span>
          <ButtonPrimary href="/" sizeClass="px-5 py-4 sm:px-7">
            Create your CV
          </ButtonPrimary>
          <div className="flex">
            <div>
              <div className="border-l-2 pl-3">
                <p className="text-meta-3 bg-[#badfcb] px-2 py-1 inline rounded-sm">
                  39%
                </p>
                <p>more likely to get hired</p>
              </div>
            </div>
            <div className="pl-4">
              <div className="border-l-2 pl-3">
                <p className="text-warning bg-[#fff2cc] px-2 py-1 inline rounded-sm">
                  39%
                </p>
                <p>more likely to get hired</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow">
          <Image className="w-full" src={imagePng} alt="hero" priority />
        </div>
      </div>

      {/* <div className="hidden lg:block z-10 mb-12 lg:mb-0 lg:-mt-40 w-full">
        <HeroSearchForm />
      </div> */}
    </div>
  );
};

export default SectionHero;
