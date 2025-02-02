import React, { FC } from "react";
import Logo from "@/shared/Logo";
import Navigation from "@/shared/Navigation/Navigation";
import SearchDropdown from "./SearchDropdown";
import ButtonPrimary from "@/shared/ButtonPrimary";
import MenuBar from "@/shared/MenuBar";
import SwitchDarkMode from "@/shared/SwitchDarkMode";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export interface MainNav1Props {
  className?: string;
}

const MainNav1: FC<MainNav1Props> = ({ className = "" }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const firstName = session?.user?.name?.split(" ")[0];
  const nameParts = session?.user?.name?.split(" ") || [];

  const firstNameInitial = nameParts[0]?.[0]?.toUpperCase() || "";
  const lastNameInitial = nameParts[1]?.[0]?.toUpperCase() || "";
  const initials = `${firstNameInitial}${lastNameInitial}`;

  const handleLogout = async () => {
    try {
      // Remove token from localStorage
      localStorage.removeItem("token");

      // Call the logout API
      const response = await fetch("/api/auth/logout", { method: "POST" });

      if (response.ok) {
        alert("Logged out successfully!");
        window.location.href = "/login"; // Redirect to login
      } else {
        alert("Failed to log out. Please try again.");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className={`nc-MainNav1 relative z-10 ${className}`}>
      <div className="px-4 lg:container h-20 relative flex justify-between">
        <div className="flex justify-start">
          <Logo className="w-24 self-center" />
          <Navigation />
        </div>

        {/* <div className="flex lg:hidden flex-[3] max-w-lg !mx-auto md:px-3 ">
          <div className="self-center flex-1">
            <HeroSearchForm2MobileFactory />
          </div>
        </div> */}

        <div className="flex flex-shrink-0 justify-end lg:flex-none text-neutral-700 dark:text-neutral-100">
          <div className="hidden xl:flex space-x-0.5">
            <SwitchDarkMode />
            <SearchDropdown className="flex items-center" />
            <div className="px-1" />
            {session ? (
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold">
                  {initials}
                </div>
                <div>Hi, {firstName}</div>
              </div>
            ) : (
              <ButtonPrimary className="self-center" href="/login">
                Login / Register
              </ButtonPrimary>
            )}
            {/* <button onClick={handleLogout} className="btn bg-ten">
              Logout
            </button> */}
            {/* <ButtonPrimary className="self-center" href="/login"> */}
            <button
              className="flex justify-center items-center pl-2 text-ten"
              onClick={handleLogout}
            >
              Logout
            </button>
            {/* </ButtonPrimary> */}
          </div>

          <div className="flex xl:hidden items-center">
            <SwitchDarkMode />
            <div className="px-0.5" />
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav1;
