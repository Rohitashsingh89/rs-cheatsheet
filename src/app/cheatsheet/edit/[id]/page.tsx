"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import ReactQuill from "react-quill";
import EditorToolbar, {
  modules,
  formats,
} from "@/components/RichTextEditor/QuillToolbar";
import "react-quill/dist/quill.snow.css";
import Swal from "sweetalert2";
import HomeLayout from "@/components/Layouts/HomeLayout";
import { useCheatSheet } from "@/context/CheatSheetContext";
import Link from "next/link";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const EditCheatSheet: React.FC = () => {
  const [values, setValues] = useState<string>(""); // Content from ReactQuill
  const [title, setTitle] = useState<string>(""); // Title input
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const router = useRouter();
  const { fetchCheatSheets, cheatSheetData } = useCheatSheet();

  const cheatSheet = cheatSheetData.find((item) => item._id === id);
  useEffect(() => {
    if (cheatSheet) {
      setTitle(cheatSheet.title);
      setValues(cheatSheet.content);
    }
  }, [cheatSheet]);

  const handleChange = (value: string) => {
    setValues(value);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = async () => {
    if (!title || !values) {
      Swal.fire({
        title: "Title and content are required!!",
        icon: "error",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`/api/cheatsheet`, {
        method: "PUT", // Use PUT for updating
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, title, content: values }),
      });

      if (!response.ok) {
        throw new Error("Failed to save data");
      }

      Swal.fire({
        timer: 2000,
        title: "Cheat Sheet Updated Successfully!!",
        icon: "success",
      });
      fetchCheatSheets();
      router.push("/"); // Redirect to the list page (or any other page)
    } catch (error) {
      Swal.fire({
        title: "Failed to save data. Please try again!!",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <HomeLayout>
      <div className="cheat-sheet-min-h-screen bg-gray-100 dark:bg-neutral-800 ">
        <div className="relative bg-neutral-100 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
          <div className="container py-4">
            <div className="flex w-full justify-between items-center">
              <Link href="/">
                <MdOutlineKeyboardBackspace className="text-black dark:text-neutral-100 cheat-sheet-text-2xl cheat-sheet-cursor-pointer cheat-sheet-hover:text-gray-400" />
              </Link>
              <h1 className="cheat-sheet-text-xl text-xl font-semibold text-center text-black dark:text-neutral-100 cheat-sheet-font-bold">
                Edit Cheat Sheet
              </h1>
            </div>
          </div>
        </div>
        <div className="relative bg-neutral-100 dark:bg-neutral-800">
          <div className="container ">
            <div className=" mx-auto py-10">
              <h1 className="text-2xl font-bold mb-4 relative inline-block">
                Edit
                <div className="absolute left-0 bottom-0 w-[120%] rounded h-1 bg-ten"></div>
              </h1>

              {/* Title Input */}
              <div className="mb-4">
                <input
                  type="text"
                  value={title}
                  onChange={handleTitleChange}
                  placeholder="Enter title here"
                  className="p-2 block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 text-sm font-normal h-11 px-4 py-3 mt-1"
                />
              </div>

              {/* ReactQuill Editor */}
              <div className="mb-8">
                <EditorToolbar />
                <ReactQuill
                  theme="snow"
                  value={values}
                  className="textarea quillEditor mt-2 custom-quill dark:custom-quill-dark"
                  onChange={handleChange}
                  placeholder="Write something awesome..."
                  modules={modules}
                  formats={formats}
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="bg-ten text-white py-2 sm:px-8 px-4 hover:bg-ten-hover rounded-full"
                disabled={loading}
              >
                {loading ? "Updating..." : "Update"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default EditCheatSheet;
