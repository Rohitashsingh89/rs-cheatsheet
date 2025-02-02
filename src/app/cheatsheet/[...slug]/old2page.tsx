"use client";

import { useEffect, useState } from "react";
import exportPdf from "@/utils/exportPdf";
import { useParams } from "next/navigation";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Link from "next/link";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

// Prism.js language imports
import "prismjs/components/prism-markup";
import "prismjs/components/prism-javascript";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

import "@/app/cheatsheet/[...slug]/CheatSheet.css";
import { useCheatSheet } from "@/context/CheatSheetContext";
import HomeLayout from "@/components/Layouts/HomeLayout";

interface CheatSheet {
  _id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

const CheatSheetDetailsPage = () => {
  const { slug } = useParams();
  const cheatsheetId = slug?.[0]; // Safely get the cheatsheet ID from slug
  const { cheatSheetData, loading, error } = useCheatSheet();

  const [selectedCheatSheet, setSelectedCheatSheet] =
    useState<CheatSheet | null>(null);
  const [copied, setCopied] = useState<string | null>(null); // To track copied code

  useEffect(() => {
    if (selectedCheatSheet) {
      // Highlight all code snippets after the content has been set
      Prism.highlightAll();
    }
  }, [selectedCheatSheet]);

  useEffect(() => {
    if (cheatsheetId) {
      const selected = cheatSheetData.find((item) => item._id === cheatsheetId);
      setSelectedCheatSheet(selected || null);
    }
  }, [cheatsheetId]);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(code); // Mark as copied
      setTimeout(() => setCopied(null), 2000); // Reset after 2 seconds
    });
  };

  if (!cheatsheetId || !selectedCheatSheet) {
    return (
      <p className="text-center mt-8">CheatSheet not found or loading...</p>
    );
  }

  const { title, content } = selectedCheatSheet;

  return (
    <>
      <HomeLayout>
        <div className="cheat-sheet-min-h-screen cheat-sheet-bg-gray-100">
          {/* Header Section */}
          <div className="cheat-sheet-bg-black cheat-sheet-text-white cheat-sheet-py-4">
            <div className="cheat-sheet-max-w-5xl cheat-sheet-mx-auto cheat-sheet-flex cheat-sheet-items-center cheat-sheet-justify-between">
              <Link href="/cheatsheet">
                <MdOutlineKeyboardBackspace className="cheat-sheet-text-2xl cheat-sheet-cursor-pointer cheat-sheet-hover:text-gray-400" />
              </Link>
              <h1 className="cheat-sheet-text-xl cheat-sheet-font-bold">
                {title}
              </h1>
            </div>
          </div>

          <div className="cheat-sheet-max-w-5xl cheat-sheet-mx-auto cheat-sheet-px-4 cheat-sheet-py-6 cheat-sheet-min-h-screen">
            <div className="cheat-sheet-mb-10">
              <h2 className="cheat-sheet-text-2xl cheat-sheet-text-black cheat-sheet-font-semibold cheat-sheet-mb-4">
                {title}
              </h2>
              <div
                className="cheat-sheet-text-gray-700 cheat-sheet-mb-4"
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            </div>
          </div>

          <pre className="cheat-sheet-language-html cheat-sheet-w-full cheat-sheet-p-2 cheat-sheet-bg-gray-100 cheat-sheet-rounded cheat-sheet-text-sm cheat-sheet-overflow-x-auto">
            <code className={`language-html`}>
              {`import jsPDF from "jspdf";
import "jspdf-autotable";


interface CheatSheet {
  _id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}`}{" "}
            </code>
          </pre>

          {/* CheatSheet Content */}
          {/* <div className="cheat-sheet-max-w-5xl cheat-sheet-mx-auto cheat-sheet-px-4 cheat-sheet-py-6">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="cheat-sheet-mb-10">
            <h2 className="cheat-sheet-text-2xl cheat-sheet-font-semibold cheat-sheet-mb-4">
              {section.sectionTitle}
            </h2>
            {section.description && (
              <p className="cheat-sheet-text-gray-700 cheat-sheet-mb-4">
                {section.description}
              </p>
            )}

            <div className="cheat-sheet-grid cheat-sheet-grid-cols-1 cheat-sheet-gap-6">
              {section.content.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="cheat-sheet-border cheat-sheet-rounded-lg cheat-sheet-w-full cheat-sheet-p-4 cheat-sheet-bg-white cheat-sheet-shadow-sm cheat-sheet-hover:shadow-md cheat-sheet-transition"
                >
                  {item.label || item.tagName ? (
                    <h3 className="cheat-sheet-text-lg cheat-sheet-font-medium cheat-sheet-mb-2">
                      {item.label || item.tagName}
                    </h3>
                  ) : null}
                  {item.description && (
                    <p className="cheat-sheet-text-gray-500 cheat-sheet-mb-3">
                      {item.description}
                    </p>
                  )}
                  {item.codeSnippet || item.code ? (
                    <div className="relative">
                      <pre className="cheat-sheet-language-html cheat-sheet-w-full cheat-sheet-p-2 cheat-sheet-bg-gray-100 cheat-sheet-rounded cheat-sheet-text-sm cheat-sheet-overflow-x-auto">
                        <code className={`language-${item.language || "html"}`}>
                          {item.codeSnippet || item.code}
                        </code>
                      </pre>
                      <button
                        onClick={() =>
                          handleCopy(item.codeSnippet || item.code || "")
                        }
                        className="absolute top-2 right-2 bg-blue-500 text-white py-1 px-3 text-sm rounded hover:bg-blue-600 transition"
                      >
                        {copied === (item.codeSnippet || item.code)
                          ? "Copied!"
                          : "Copy"}
                      </button>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div> */}

          {/* Export and Footer */}
          <div className="max-w-5xl mx-auto px-4 pb-10">
            <button
              onClick={() => exportPdf(selectedCheatSheet)}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Export as PDF
            </button>
          </div>

          {/* <footer className="bg-black text-white text-center py-4">
            <p>Made with ❤️ by Rohitash Singh</p>
          </footer> */}
        </div>
      </HomeLayout>
    </>
  );
};

export default CheatSheetDetailsPage;
