"use client";

import { Poppins } from "next/font/google";
import SiteHeader from "./(client-components)/(Header)/SiteHeader";
import ClientCommons from "./ClientCommons";
import "./globals.css";
import "@/fonts/line-awesome-1.3.0/css/line-awesome.css";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import Footer from "@/components/Footer";
import FooterNav from "@/components/FooterNav";
import Loader from "@/components/common/Loader";
import { useEffect, useState } from "react";
import SessionWrapper from "@/components/SessionWrapper";
import { CheatSheetProvider } from "@/context/CheatSheetContext";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <html lang="en" className={poppins.className}>
      <SessionWrapper>
        <CheatSheetProvider>
          <body className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
            {loading ? <Loader /> : children}
          </body>
        </CheatSheetProvider>
      </SessionWrapper>
    </html>
  );
}
