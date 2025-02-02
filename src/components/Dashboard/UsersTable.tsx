import React, { useState } from "react";
import { LuChevronsLeft, LuChevronsRight } from "react-icons/lu";

interface UserData {
  name: string;
  email: string;
  date: string;
  time: string;
  user: string;
}

const UsersTable = () => {
  const initialData: UserData[] = [
    {
      name: "Rohitash Singh",
      email: "rohitash.singh@gmail.com",
      date: "May 22, 2024",
      time: "12:00 AM",
      user: "Radhey Shyam",
    },
    {
      name: "Jai Kishan",
      email: "jai.kishan@gmail.com",
      date: "Jun 12, 2024",
      time: "02:00 PM",
      user: "Owner",
    },
    {
      name: "Raj Kamal",
      email: "raj.kamal@gmail.com",
      date: "July 21, 2024",
      time: "02:00 PM",
      user: "Owner",
    },
    {
      name: "Harsh Sharma",
      email: "harsh@gmail.com",
      date: "Oct 23, 2024",
      time: "10:00 AM",
      user: "Ras Bihari",
    },
    {
      name: "Saransh",
      email: "saransh@gmail.com",
      date: "Nov 24, 2024",
      time: "01:00 PM",
      user: "Deepak Aggrawal",
    },
  ];

  const [data, setData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });

  const sortData = (key: keyof UserData) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "ascending" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });

    setSortConfig({ key, direction });
    setData(sortedData);
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-5.5">
      <div className=" mb-4">
        <h2 className="text-xl font-base mb-6 text-black dark:text-white">
          Recent Applied Jobs
        </h2>
        <div className="flex flex-col md:flex-row md:justify-between justify-center items-center">
          <div className="flex flex-wrap md:justify-start justify-center items-center">
            <button className="bg-ten font-base text-xs text-white px-4 py-3 mr-2 rounded-sm mb-2">
              Print
            </button>
            <button className="bg-ten font-base text-xs text-white px-4 py-3 mr-2 rounded-sm mb-2">
              Excel
            </button>
            <button className="bg-ten font-base text-xs text-white px-4 py-3 mr-2 rounded-sm mb-2">
              PDF
            </button>
            <button className="bg-ten font-base text-xs text-white px-4 py-3 mr-2 rounded-sm mb-2">
              CSV
            </button>
            <button className="bg-ten font-base text-xs text-white px-4 py-3 mr-2 rounded-sm mb-2">
              Copy
            </button>
          </div>
          <div>
            <form className="max-w-md mx-auto flex items-center my-5 md:my-2">
              {/* <label className="mr-1 text-sm font-base text-black dark:text-white">
                Search:{" "}
              </label> */}

              <div className="relative">
                <input
                  type="search"
                  placeholder="Search..."
                  id="default-search"
                  className="block w-50 p-1.5 text-sm text-gray-900 border border-stroke dark:border-strokedark  bg-white dark:bg-boxdark dark:placeholder-gray-400 dark:text-white  outline-none"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-boxdark border border-stroke dark:border-strokedark">
          <thead className="bg-ten border-b border-stroke dark:text-white dark:border-strokedark">
            <tr>
              <th
                className="w-1/5 py-2 ps-5 text-start cursor-pointer font-base text-sm text-white border border-stroke dark:border-strokedark whitespace-nowrap"
                onClick={() => sortData("name")}
              >
                Name{" "}
                {sortConfig.key === "name" &&
                  (sortConfig.direction === "ascending" ? "↑" : "↓")}
              </th>
              <th
                className="w-1/5 py-2  ps-5 text-start cursor-pointer font-base text-sm text-white border border-stroke dark:border-strokedark whitespace-nowrap"
                onClick={() => sortData("email")}
              >
                Email{" "}
                {sortConfig.key === "email" &&
                  (sortConfig.direction === "ascending" ? "↑" : "↓")}
              </th>
              <th
                className="w-1/5 py-2 ps-5 text-start cursor-pointer border border-stroke font-base text-sm text-white dark:border-strokedark whitespace-nowrap"
                onClick={() => sortData("date")}
              >
                Interview Date{" "}
                {sortConfig.key === "date" &&
                  (sortConfig.direction === "ascending" ? "↑" : "↓")}
              </th>
              <th
                className="w-1/5 py-2 ps-5 text-start cursor-pointer border font-base text-sm text-white border-stroke dark:border-strokedark whitespace-nowrap"
                onClick={() => sortData("time")}
              >
                Interview Time{" "}
                {sortConfig.key === "time" &&
                  (sortConfig.direction === "ascending" ? "↑" : "↓")}
              </th>
              <th
                className="w-1/5 py-2 ps-5 text-start cursor-pointer border font-base text-sm text-white border-stroke dark:border-strokedark whitespace-nowrap"
                onClick={() => sortData("user")}
              >
                Assign User{" "}
                {sortConfig.key === "user" &&
                  (sortConfig.direction === "ascending" ? "↑" : "↓")}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((interview, index) => (
              <tr
                key={index}
                className=" border border-stroke dark:border-strokedark"
              >
                <td className="py-2 px-4 border border-stroke dark:border-strokedark whitespace-nowrap">
                  {interview.name}
                </td>
                <td className="py-2 px-4 border border-stroke dark:border-strokedark whitespace-nowrap">
                  {interview.email}
                </td>
                <td className="py-2 px-4 border border-stroke dark:border-strokedark whitespace-nowrap">
                  {interview.date}
                </td>
                <td className="py-2 px-4 border border-stroke dark:border-strokedark whitespace-nowrap">
                  {interview.time}
                </td>
                <td className="py-2 px-4 border border-stroke dark:border-strokedark whitespace-nowrap">
                  {interview.user}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4  flex-col md:flex-row md:justify-between justify-center items-center">
        <p className="text-xs font-base text-black dark:text-white my-5 md:my-2">
          Showing 1 to 5 of 5 entries
        </p>
        <div className="flex">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 mr-2 rounded  border border-stroke dark:border-strokedark ">
            <LuChevronsLeft />
          </button>
          <button className="bg-ten text-white px-4 py-2 rounded">1</button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 ml-2 rounded  border border-stroke dark:border-strokedark ">
            <LuChevronsRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
