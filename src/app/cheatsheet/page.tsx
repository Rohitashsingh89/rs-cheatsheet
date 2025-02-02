"use client";

import CheatSheatCard from "@/components/cheatsheet/CheatSheetCard";
// import HomeLayout from "@/components/Layouts/HomeLayout";
import { useCheatSheet } from "@/context/CheatSheetContext";
import Link from "next/link";

export default function CheatSheets() {
  const { cheatSheetData } = useCheatSheet();

  return (
    <>
      {/* <HomeLayout> */}
      <div className="min-h-screen bg-gray-100 dark:bg-neutral-800">
        <div className="cheat-sheet-min-h-screen bg-gray-100 dark:bg-neutral-800 mb-8">
          <div className="nc-Footer relative py-4 lg:py-4 border-b border-neutral-200 dark:border-neutral-700">
            <div className="container grid grid-cols-1">
              <div className="flex w-full justify-between">
                <h1 className="text-3xl font-bold text-center">Cheat Sheets</h1>
                <Link href="/cheatsheet/add">
                  <button className="bg-ten text-white py-2 px-4 rounded-full hover:bg-ten-hover ">
                    Add
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-neutral-100 dark:bg-neutral-800">
          <div className="container ">
            {cheatSheetData.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
                {cheatSheetData.map((template) => (
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
                No Records Found!
              </div>
            )}
          </div>
          {/* </div> */}
        </div>
      </div>
      {/* </HomeLayout> */}
    </>
  );
}
