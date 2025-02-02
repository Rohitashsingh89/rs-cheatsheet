"use client";

import SiteHeader from "@/app/(client-components)/(Header)/SiteHeader";
import ClientCommons from "@/app/ClientCommons";
import FooterNav from "../FooterNav";
import Footer from "../Footer";
import { LuChevronsUp } from "react-icons/lu";
import { useEffect, useRef, useState } from "react";

export default function HomeLayout({
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
      <ClientCommons />
      <SiteHeader />
      {children}
      <FooterNav />
      <Footer />

      {/* Scroll to top button */}
      {/* {isVisible && ( */}
      <button
        className="fixed bottom-5 right-10 z-50 bg-ten text-white p-2 rounded hover:to-orange-500 duration-500 ease-in-out py-2 px-2 rounded-full shadow-md transition"
        onClick={scrollToTop}
      >
        <LuChevronsUp className="text-xl text-white" />
      </button>
      {/* )} */}
    </>
  );
}
