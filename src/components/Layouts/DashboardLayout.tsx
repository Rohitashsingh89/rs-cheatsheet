"use client";
import React, { useState, useEffect, useRef } from "react";
import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import DashboardHeader from "@/components/Dashboard/DashboardHeader";
import { LuChevronsUp } from "react-icons/lu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // State for button visibility
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  // Show button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = contentRef.current?.scrollTop || 0;
      if (scrollTop > 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const scrollableDiv = contentRef.current;
    scrollableDiv?.addEventListener("scroll", handleScroll);

    return () => scrollableDiv?.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to the top
  const scrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden dark:bg-boxdark-2 bg-thirty dark:text-bodydark">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <DashboardSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden lg:ml-72.5">
          {/* <!-- ===== Header Start ===== --> */}
          <DashboardHeader
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-2 md:p-4 2xl:p-6">
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}

          {/* Scroll to top button */}
          {/* {isVisible && ( */}
          <button
            className="fixed bottom-5 right-10 z-50 bg-ten duration-300 ease-in-out hover:bg-blue-400 text-white py-2 px-2 rounded-full shadow-md transition duration-300 ease-in-out"
            onClick={scrollToTop}
          >
            <LuChevronsUp className="text-xl text-white" />
          </button>
          {/* )} */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
}
