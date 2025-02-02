"use client";

import { useEffect, useState } from "react";
import exportPdf from "@/utils/exportPdf";
import { useParams, useRouter } from "next/navigation";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

// Prism.js language imports
import "prismjs/components/prism-markup";
import "prismjs/components/prism-javascript";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

import "@/app/cheatsheet/[...slug]/CheatSheet.css";
import { useCheatSheet } from "@/context/CheatSheetContext";
import HomeLayout from "@/components/Layouts/HomeLayout";
import CheatSheatCard from "@/components/cheatsheet/CheatSheetCard";

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
  const { cheatSheetData } = useCheatSheet();
  const router = useRouter();

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
        <div className="cheat-sheet-min-h-screen bg-gray-100 dark:bg-neutral-800 ">
          <div className="relative bg-neutral-100 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
            <div className="container py-4">
              <div className="flex w-full justify-between items-center">
                <button onClick={() => router.push("/")}>
                  <MdOutlineKeyboardBackspace className="text-black dark:text-neutral-100 cheat-sheet-text-2xl cheat-sheet-cursor-pointer cheat-sheet-hover:text-gray-400" />
                </button>
                <h1 className="cheat-sheet-text-xl text-xl font-semibold text-center text-black dark:text-neutral-100 cheat-sheet-font-bold">
                  Cheat Sheet Details
                </h1>
              </div>
            </div>
          </div>

          <div className="cheat-sheet-max-w-5xl cheat-sheet-mx-auto cheat-sheet-px-4 cheat-sheet-py-6 cheat-sheet-min-h-screen">
            <div className="cheat-sheet-mb-10">
              <h2 className="cheat-sheet-text-2xl text-black dark:text-neutral-100 cheat-sheet-text-black cheat-sheet-font-semibold cheat-sheet-mb-4">
                {title}
              </h2>
              <div
                className="cheat-sheet-text-gray-700 cheat-sheet-mb-4 text-black dark:text-neutral-100"
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            </div>
          </div>

          {/* Export and Footer */}
          <div className="max-w-5xl mx-auto px-4 pb-10">
            <button
              onClick={() => exportPdf(selectedCheatSheet)}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Export as PDF
            </button>
          </div>
        </div>
        {/* Recent Cheat Sheets Section */}
        <div className="relative bg-neutral-100 dark:bg-neutral-800 pb-8">
          <div className="container">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
              Recommended Cheat Sheets
            </h3>

            {cheatSheetData.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
                {[
                  // Recent Cheat Sheets
                  ...cheatSheetData
                    .filter((item) => item._id !== cheatsheetId) // Exclude current cheat sheet
                    .sort(
                      (a, b) =>
                        new Date(b.updated_at).getTime() -
                        new Date(a.updated_at).getTime()
                    ) // Sort by recent
                    .slice(0, 4), // Get top 4 recent

                  // Related Cheat Sheets
                  ...cheatSheetData.filter(
                    (item) =>
                      item._id !== cheatsheetId &&
                      item.title
                        .toLowerCase()
                        .includes(
                          selectedCheatSheet.title.split(" ")[0].toLowerCase()
                        )
                  ),
                ]
                  // Remove duplicates using Map (unique by _id)
                  .filter(
                    (item, index, self) =>
                      index === self.findIndex((t) => t._id === item._id)
                  )
                  .slice(0, 4) // Limit to top 4 mixed cheat sheets
                  .map((template) => (
                    <CheatSheatCard
                      key={template._id}
                      id={template._id}
                      title={template.title}
                      content={template.content}
                    />
                  ))}
              </div>
            ) : (
              <div className="bg-white dark:bg-neutral-900 w-full p-4 grid">
                No Recommended Cheat Sheets Found!
              </div>
            )}
          </div>
        </div>
      </HomeLayout>
    </>
  );
};

export default CheatSheetDetailsPage;
