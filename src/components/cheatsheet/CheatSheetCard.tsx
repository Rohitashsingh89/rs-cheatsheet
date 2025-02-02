import { useCheatSheet } from "@/context/CheatSheetContext";
import { set } from "mongoose";
import Link from "next/link";
import Swal from "sweetalert2";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";

interface CheatSheatCardProps {
  id: string;
  title: string;
  content: string;
}

const CheatSheatCard: React.FC<CheatSheatCardProps> = ({
  id,
  title,
  content,
}) => {
  const { fetchCheatSheets, setEditId } = useCheatSheet();

  const getContentPreview = (text: string): string => {
    const words = text.split(" ");
    if (words.length > 3) {
      return words.slice(0, 3).join(" ") + "...";
    }
    return text;
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/cheatsheet?id=${id}`, {
        method: "DELETE", // DELETE method for deleting the cheat sheet
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete data");
      }

      Swal.fire({
        timer: 2000,
        title: "Cheat Sheet Deleted Successfully!!",
        icon: "success",
      });

      fetchCheatSheets(); // Refresh the list of cheat sheets
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Failed to delete data. Please try again!!",
        icon: "error",
      });
    }
  };

  return (
    <div
      key={id}
      className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-900 dark:border-gray-700"
    >
      <div className="flex flex-col items-center pb-10 pt-10">
        {/* <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={img}
            alt="Bonnie image"
          /> */}
        <Link href={`/cheatsheet/${id}`} passHref>
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        {/* <div
            className="text-sm text-gray-500 dark:text-gray-400"
            dangerouslySetInnerHTML={{ __html: getContentPreview(content) }}
          ></div> */}
        <div className="flex">
          <div className="flex pr-3 mt-2">
            <Link
              href={`/cheatsheet/edit/${id}`}
              className="text-ten"
              // className="py-2 px-6 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <MdEdit />
            </Link>
          </div>
          <div className="flex">
            <button
              onClick={handleDelete}
              className="text-red-500"
              // className="py-2 px-6 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <RiDeleteBin5Line />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheatSheatCard;
