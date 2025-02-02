import React, { FC } from "react";
import Logo from "@/shared/Logo";
import Navigation from "@/shared/Navigation/Navigation";
import SearchDropdown from "./SearchDropdown";
import ButtonPrimary from "@/shared/ButtonPrimary";
import MenuBar from "@/shared/MenuBar";
import SwitchDarkMode from "@/shared/SwitchDarkMode";

export interface MainNav1Props {
  className?: string;
}

const UMainNav1: FC<MainNav1Props> = ({ className = "" }) => {
  return (
    <div className={`nc-MainNav1 relative z-10 ${className}`}>
      <div className="px-4 px-2 md:px-13 h-20 relative flex justify-between">
        {/* Logo and Navigation for larger screens */}
        <div className="hidden md:flex justify-start flex-1 space-x-4 sm:space-x-10">
          <Logo className="w-24 self-center" />
          <Navigation />
        </div>

        {/* Logo and Menu bar for smaller screens */}
        <div className="flex md:hidden flex-1 items-center justify-between">
          <Logo className="w-24 self-center" />
          <MenuBar />
        </div>

        {/* Right section for larger screens */}
        <div className="hidden md:flex flex-shrink-0 justify-end flex-1 md:flex-none text-neutral-700 dark:text-neutral-100">
          <div className="hidden md:flex space-x-0.5">
            <SwitchDarkMode />
            <SearchDropdown className="flex items-center" />
            <div className="px-1" />
            <ButtonPrimary className="self-center" href="/login">
              Sign In/Register
            </ButtonPrimary>
          </div>

          <div className="flex md:hidden items-center">
            <SwitchDarkMode />
            <div className="px-0.5" />
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UMainNav1;
