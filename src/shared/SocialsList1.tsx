import { SocialType } from "@/shared/SocialsShare";
import React, { FC } from "react";

export interface SocialsList1Props {
  className?: string;
}

const socials: SocialType[] = [
  {
    name: "Github",
    icon: "lab la-github",
    href: "https://github.com/rohitashsingh89",
  },
  {
    name: "Twitter",
    icon: "lab la-twitter",
    href: "https://twitter.com/rohitashsingh89",
  },
  {
    name: "Linkedin",
    icon: "lab la-linkedin",
    href: "https://in.linkedin.com/in/rohitashsingh89",
  },
  {
    name: "Instagram",
    icon: "lab la-instagram",
    href: "https://instagram.com/rohitashthakur89",
  },
];

const SocialsList1: FC<SocialsList1Props> = ({ className = "space-y-2.5" }) => {
  const renderItem = (item: SocialType, index: number) => {
    return (
      <a
        href={item.href}
        className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
        key={index}
        target="_blank"
      >
        <i className={item.icon}></i>
        <span className="hidden lg:block text-sm">{item.name}</span>
      </a>
    );
  };

  return (
    <div className={`nc-SocialsList1 ${className}`} data-nc-id="SocialsList1">
      {socials.map(renderItem)}
    </div>
  );
};

export default SocialsList1;
