"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { PathName } from "@/routers/types";
import { useThemeMode } from "@/utils/useThemeMode";
import RHeader from "./RHeader";

let OPTIONS = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};
let OBSERVER: IntersectionObserver | null = null;

const PAGES_HIDE_HEADER_BORDER: PathName[] = [
  // "/home-3",
  // "/listing-car-detail",
  // "/listing-experiences-detail",
  // "/listing-stay-detail",
];

const UserHeader = () => {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsTopOfPage(window.pageYOffset < 5);
  }, []);

  useThemeMode();

  const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      setIsTopOfPage(entry.isIntersecting);
    });
  };

  useEffect(() => {
    if (!PAGES_HIDE_HEADER_BORDER.includes(pathname as PathName)) {
      OBSERVER && OBSERVER.disconnect();
      OBSERVER = null;
      return;
    }
    if (!OBSERVER) {
      OBSERVER = new IntersectionObserver(intersectionCallback, OPTIONS);
      anchorRef.current && OBSERVER.observe(anchorRef.current);
    }
  }, [pathname]);

  const renderHeader = () => {
    let headerClassName = "shadow-sm dark:border-b dark:border-neutral-700";
    if (PAGES_HIDE_HEADER_BORDER.includes(pathname as PathName)) {
      headerClassName = isTopOfPage
        ? ""
        : "shadow-sm dark:border-b dark:border-neutral-700";
    }
    return <RHeader className={headerClassName} />;
  };

  return (
    <>
      {renderHeader()}
      <div ref={anchorRef} className="h-1 absolute invisible"></div>
    </>
  );
};

export default UserHeader;
