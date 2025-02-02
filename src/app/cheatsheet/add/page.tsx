"use client";
import { useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, {
  modules,
  formats,
} from "@/components/RichTextEditor/QuillToolbar";
import "react-quill/dist/quill.snow.css";
import Swal from "sweetalert2";
import HomeLayout from "@/components/Layouts/HomeLayout";
import Link from "next/link";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useCheatSheet } from "@/context/CheatSheetContext";
import { useRouter } from "next/navigation";

const AddCheatSheet: React.FC = () => {
  const [values, setValues] = useState<string>(""); // Content from ReactQuill
  const [title, setTitle] = useState<string>(""); // Title input
  const [loading, setLoading] = useState(false);
  const { fetchCheatSheets } = useCheatSheet();
  const router = useRouter();

  // Handle changes in the ReactQuill editor
  const handleChange = (value: string) => {
    setValues(value);
  };

  // Handle changes in the title input field
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  // Submit data to the backend API
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
      const response = await fetch("/api/cheatsheet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content: values }),
      });

      if (!response.ok) {
        throw new Error("Failed to save data");
      }

      Swal.fire({
        timer: 2000,
        title: "Cheat Sheet Added Successfully!!",
        icon: "success",
      });
      setTitle("");
      setValues("");
      fetchCheatSheets();
      router.push("/");
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
    <>
      <HomeLayout>
        <div className="cheat-sheet-min-h-screen bg-gray-100 dark:bg-neutral-800 ">
          <div className="relative bg-neutral-100 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
            <div className="container py-4">
              <div className="flex w-full justify-between items-center">
                <Link href="/">
                  <MdOutlineKeyboardBackspace className="text-black dark:text-neutral-100 text-center cheat-sheet-text-2xl cheat-sheet-cursor-pointer cheat-sheet-hover:text-gray-400" />
                </Link>
                <h1 className="cheat-sheet-text-xl text-xl font-semibold text-center text-black dark:text-neutral-100 cheat-sheet-font-bold">
                  Add Cheat Sheet
                </h1>
              </div>
            </div>
          </div>

          <div className="relative bg-neutral-100 dark:bg-neutral-800">
            <div className="container ">
              <div className="mx-auto py-10">
                <h1 className="text-2xl font-bold mb-4 relative inline-block">
                  Add
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
                  className="bg-ten text-white py-2 sm:px-8 px-4 rounded-full hover:bg-ten-hover "
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  );
};

export default AddCheatSheet;
