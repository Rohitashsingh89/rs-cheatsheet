"use client";

import DashboardLayout from "@/components/Layouts/DashboardLayout";
import React from "react";
import { BsGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";

const Resumes = () => {
  return (
    <>
      <DashboardLayout>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark min-h-screen">
          <main className="flex-grow max-w-full">
            <div className="container pt-5 pb-40 lg:pb-32">
              <div className="flex justify-between">
                <h1 className="flex items-center overflow-hidden mt-1 mb-6">
                  <div className="text-gray-800 dark:text-white flex-grow text-xl py-2 font-bold ">
                    Resumes
                  </div>
                </h1>
                <div className="whitespace-nowrap flex stable-rtl:flex-row-reverse">
                  <button
                    type="button"
                    className="border inline-flex font-medium items-center justify-center relative box-content h-4 focus-visible:ring-4 ring-brand focus-visible:z-5 overflow-hidden py-3 text-base first:rounded-tl first:rounded-bl border-r-0 last:border-r last:rounded-tr last:rounded-br bg-brand-500 active:bg-brand-300 can-hover:active:bg-brand-100 text-gray-700 border-gray-400 bg-ten text-white can-hover:hover:bg-brand-400 ps-2 pe-2 first:rounded-tl-brand first:rounded-bl-brand border-r-0 last:border-r last:rounded-tr-brand last:rounded-br-brand"
                  >
                    <BsGridFill />
                  </button>
                  <button
                    type="button"
                    className="border inline-flex font-medium items-center justify-center relative box-content h-4 focus-visible:ring-4 ring-brand focus-visible:z-5 overflow-hidden py-3 text-base first:rounded-tl first:rounded-bl border-r-0 last:border-r last:rounded-tr last:rounded-br bg-transparent active:bg-brand-100 can-hover:active:bg-brand-100 text-gray-700 border-gray-400 can-hover:hover:bg-brand-50 can-hover:hover:border-brand-400 ps-2 pe-2 first:rounded-tl-brand first:rounded-bl-brand border-r-0 last:border-r last:rounded-tr-brand last:rounded-br-brand"
                  >
                    <FaList />
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap -m-5">
                <div className="relative p-5 w-1/2 md:w-1/3 lg:w-1/4">
                  <div
                    className="relative group"
                    style={{ paddingBottom: "141%" }}
                  >
                    <div className="document-image text-gray-400 border-gray-400 w-full rounded absolute top-0 start-0 end-0 bottom-0 select-none overflow-hidden border border-dashed box-border can-hover:group-hover:border-brand-500 can-hover:group-hover:text-brand-500">
                      <div className="absolute start-0 end-0 bottom-0 top-0 flex flex-col justify-center items-center">
                        <div className="truncate whitespace-normal max-w-full sm:max-w-none text-sm sm:text-lg text-center px-4 font-medium">
                          Create new resume
                        </div>
                        <span className="relative">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            className="w-7 mt-2"
                          >
                            <path
                              fill="currentColor"
                              d="M450.001-450.001h-200q-12.75 0-21.375-8.628t-8.625-21.384 8.625-21.371 21.375-8.615h200v-200q0-12.75 8.628-21.375t21.384-8.625 21.371 8.625 8.615 21.375v200h200q12.75 0 21.375 8.628t8.625 21.384-8.625 21.371-21.375 8.615h-200v200q0 12.75-8.628 21.375t-21.384 8.625-21.371-8.625-8.615-21.375z"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <a
                      className="absolute start-0 top-0 bottom-0 end-0 w-full rounded focus-visible:ring-4 ring-brand"
                      href="/app/resumes/new"
                    >
                      <span className="sr-only">Create new resume</span>
                    </a>
                  </div>
                  <div className="mt-4 h-14" />
                </div>
                <div className="relative p-5 w-1/2 md:w-1/3 lg:w-1/4 group">
                  <div
                    className="relative group"
                    style={{ paddingBottom: "141%" }}
                  >
                    <div className="shadow-default document-image text-gray-400 border-gray-400 w-full rounded absolute top-0 start-0 end-0 bottom-0 select-none overflow-hidden shadow-md bg-white can-hover:group-hover:shadow-lg">
                      <div>
                        <div style={{ position: "relative" }}>
                          <canvas
                            style={{
                              position: "absolute",
                              left: 0,
                              top: 0,
                              width: "100%",
                              height: "100%",
                            }}
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 595.28 841.89"
                            style={{ direction: "ltr" }}
                            className="document-preview"
                          >
                            <rect fill="white" height="100%" width="100%" />
                            <path
                              fill="#EEF1F2"
                              d="M 0,0 L 200,0 C 200,0,200,0,200,0 L 200,841.89 C 200,841.89,200,841.89,200,841.89 L 0,841.89 C 0,841.89,0,841.89,0,841.89 L 0,0 C 0,0,0,0,0,0 Z"
                            />
                            <path
                              fill="#395a86"
                              d="M 0,0 L 200,0 C 200,0,200,0,200,0 L 200,55.625 C 200,55.625,200,55.625,200,55.625 L 0,55.625 C 0,55.625,0,55.625,0,55.625 L 0,0 C 0,0,0,0,0,0 Z"
                            />
                            <text
                              fill="white"
                              fontWeight="bold"
                              fontStyle="normal"
                              fontSize="15px"
                              fontFamily="LiberationSans"
                              y="45.1875"
                              x="40.82763671875"
                            >
                              Rohitash{" "}
                            </text>
                            <text
                              fill="white"
                              fontWeight="bold"
                              fontStyle="normal"
                              fontSize="15px"
                              fontFamily="LiberationSans"
                              y="45.1875"
                              x="109.16259765625"
                            >
                              Thakur
                            </text>
                            <path
                              fill="#395a86"
                              d="M 0,53.625 L 200,53.625 C 200,53.625,200,53.625,200,53.625 L 200,68.625 C 200,68.625,200,68.625,200,68.625 C 140,96.625,60,96.625,0,68.625 C 0,68.625,0,68.625,0,68.625 L 0,53.625 C 0,53.625,0,53.625,0,53.625 Z"
                            />
                            <svg y="105.625" x={15} id="personalDetails" />
                            <text
                              fill="#395a86"
                              fontWeight="normal"
                              fontStyle="normal"
                              fontSize="18px"
                              fontFamily="LiberationSans"
                              y="123.85"
                              x={15}
                            >
                              Personal{" "}
                            </text>
                            <text
                              fill="#395a86"
                              fontWeight="normal"
                              fontStyle="normal"
                              fontSize="18px"
                              fontFamily="LiberationSans"
                              y="123.85"
                              x="91.04296875"
                            >
                              details
                            </text>
                            <path
                              fill="#c8c8c8"
                              d="M 15,134.375 L 185,134.375 C 185,134.375,185,134.375,185,134.375 L 185,134.875 C 185,134.875,185,134.875,185,134.875 L 15,134.875 C 15,134.875,15,134.875,15,134.875 L 15,134.375 C 15,134.375,15,134.375,15,134.375 Z"
                            />
                            <svg y="144.875" x={15} />
                            <image
                              imageRendering="optimizeSpeed"
                              href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzOTVhODYiIHZpZXdCb3g9IjAgMCA0NDggNTEyIiB3aWR0aD0iNDQ4IiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTIyNCAyNTZjNzAuNyAwIDEyOC01Ny4zIDEyOC0xMjhTMjk0LjcgMCAyMjQgMCA5NiA1Ny4zIDk2IDEyOHM1Ny4zIDEyOCAxMjggMTI4em04OS42IDMyaC0xNi43Yy0yMi4yIDEwLjItNDYuOSAxNi03Mi45IDE2cy01MC42LTUuOC03Mi45LTE2aC0xNi43QzYwLjIgMjg4IDAgMzQ4LjIgMCA0MjIuNFY0NjRjMCAyNi41IDIxLjUgNDggNDggNDhoMzUyYzI2LjUgMCA0OC0yMS41IDQ4LTQ4di00MS42YzAtNzQuMi02MC4yLTEzNC40LTEzNC40LTEzNC40eiI+PC9wYXRoPjwvc3ZnPg=="
                              height={15}
                              width="13.125"
                              y="144.875"
                              x="15.9375"
                            />
                            <text
                              fill="black"
                              fontWeight="normal"
                              fontStyle="normal"
                              fontSize="10px"
                              fontFamily="LiberationSans"
                              y={155}
                              x={39}
                            >
                              Rohitash{" "}
                            </text>
                            <text
                              fill="black"
                              fontWeight="normal"
                              fontStyle="normal"
                              fontSize="10px"
                              fontFamily="LiberationSans"
                              y={155}
                              x="81.24609375"
                            >
                              Thakur
                            </text>
                            <svg y="174.875" x={15} id="emailaddress" />
                            <image
                              imageRendering="optimizeSpeed"
                              href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzOTVhODYiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTUwMi4zIDE5MC44YzMuOS0zLjEgOS43LS4yIDkuNyA0LjdWNDAwYzAgMjYuNS0yMS41IDQ4LTQ4IDQ4SDQ4Yy0yNi41IDAtNDgtMjEuNS00OC00OFYxOTUuNmMwLTUgNS43LTcuOCA5LjctNC43IDIyLjQgMTcuNCA1Mi4xIDM5LjUgMTU0LjEgMTEzLjYgMjEuMSAxNS40IDU2LjcgNDcuOCA5Mi4yIDQ3LjYgMzUuNy4zIDcyLTMyLjggOTIuMy00Ny42IDEwMi03NC4xIDEzMS42LTk2LjMgMTU0LTExMy43ek0yNTYgMzIwYzIzLjIuNCA1Ni42LTI5LjIgNzMuNC00MS40IDEzMi43LTk2LjMgMTQyLjgtMTA0LjcgMTczLjQtMTI4LjcgNS44LTQuNSA5LjItMTEuNSA5LjItMTguOXYtMTljMC0yNi41LTIxLjUtNDgtNDgtNDhINDhDMjEuNSA2NCAwIDg1LjUgMCAxMTJ2MTljMCA3LjQgMy40IDE0LjMgOS4yIDE4LjkgMzAuNiAyMy45IDQwLjcgMzIuNCAxNzMuNCAxMjguNyAxNi44IDEyLjIgNTAuMiA0MS44IDczLjQgNDEuNHoiPjwvcGF0aD48L3N2Zz4="
                              height={15}
                              width={15}
                              y="174.875"
                              x={15}
                            />
                            <text
                              fill="black"
                              fontWeight="normal"
                              fontStyle="normal"
                              fontSize="10px"
                              fontFamily="LiberationSans"
                              y={185}
                              x={39}
                            >
                              rohitashthakur485
                            </text>
                            <text
                              fill="black"
                              fontWeight="normal"
                              fontStyle="normal"
                              fontSize="10px"
                              fontFamily="LiberationSans"
                              y={185}
                              x="119.0537109375"
                            >
                              @
                            </text>
                            <text
                              fill="black"
                              fontWeight="normal"
                              fontStyle="normal"
                              fontSize="10px"
                              fontFamily="LiberationSans"
                              y={185}
                              x="129.205078125"
                            >
                              gmail
                            </text>
                            <text
                              fill="black"
                              fontWeight="normal"
                              fontStyle="normal"
                              fontSize="10px"
                              fontFamily="LiberationSans"
                              y={185}
                              x="153.1015625"
                            >
                              .
                            </text>
                            <text
                              fill="black"
                              fontWeight="normal"
                              fontStyle="normal"
                              fontSize="10px"
                              fontFamily="LiberationSans"
                              y={185}
                              x="155.8798828125"
                            >
                              com
                            </text>
                            <path
                              fill="#395a86"
                              d="M 0,801.89 C 60,829.89,140,829.89,200,801.89 C 200,801.89,200,801.89,200,801.89 L 200,841.89 C 200,841.89,200,841.89,200,841.89 L 0,841.89 C 0,841.89,0,841.89,0,841.89 L 0,801.89 C 0,801.89,0,801.89,0,801.89 Z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <a
                      className="absolute start-0 top-0 bottom-0 end-0 w-full rounded focus-visible:ring-4 ring-brand"
                      href="/app/resumes/9ef6dcbd-1780-4c94-bc9c-2549b4186280/edit"
                    >
                      <span className="sr-only" />
                    </a>
                    <div className="absolute end-2 bottom-2">
                      <button
                        className="inline-flex border items-center justify-center rounded-brand relative overflow-hidden max-w-full focus-visible:ring-4 ring-brand bg-white active:bg-brand-100 can-hover:active:bg-brand-100 text-gray-700 border-transparent shadow-md can-hover:hover:bg-brand-50 can-hover:hover:border-brand-400 font-medium py-1 ps-1 pe-1 text-base"
                        type="button"
                        style={{ outline: "none" }}
                      >
                        <span className="relative">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            className="pointer-events-none flex-shrink-0 box-content h-6 w-6"
                          >
                            <path
                              fill="currentColor"
                              d="M480-189.233q-24.749 0-42.374-17.624-17.625-17.625-17.625-42.374t17.625-42.374T480-309.23t42.374 17.625 17.625 42.374-17.625 42.374Q504.749-189.233 480-189.233m0-230.768q-24.749 0-42.374-17.625T420.001-480t17.625-42.374T480-539.999t42.374 17.625T539.999-480t-17.625 42.374T480-420.001m0-230.769q-24.749 0-42.374-17.625-17.625-17.624-17.625-42.374 0-24.749 17.625-42.374 17.625-17.624 42.374-17.624t42.374 17.624 17.625 42.374-17.625 42.374T480-650.77"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 h-14">
                    <div className="relative flex items-center font-bold text-base overflow-hidden text-gray-800 can-hover:group-hover:text-brand-500 can-hover:group-hover-specific:text-gray-800">
                      <span
                        className="absolute h-0 block overflow-hidden dark:text-white whitespace-pre"
                        style={{
                          fontFamily: "inherit",
                          fontWeight: "inherit",
                          fontSize: "inherit",
                        }}
                      >
                        Resume Rohitash Thakur
                      </span>
                      <input
                        type="text"
                        className="rounded-none max-w-full outline-none inline-block text-start overflow-hidden border-b bg-transparent cursor-text px-0 truncate border-transparent placeholder-opacity-1 placeholder-gray-800 focus:placeholder-gray-400 hover:border-gray-300 focus:border-brand-500 can-hover:group-hover:placeholder-brand-500 dark:-text-white"
                        id="rename-field-focus-id-9ef6dcbd-1780-4c94-bc9c-2549b4186280"
                        placeholder="Resume Rohitash Thakur"
                        maxLength={1000}
                        autoComplete="off"
                        style={{
                          width: 187,
                          outline: "none",
                          fontFamily: "inherit",
                          fontWeight: "inherit",
                          fontSize: "inherit",
                        }}
                      />
                    </div>
                    <p className="mt-1 w-full text-sm text-gray-500 ">
                      Edited 3 hours ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Resumes;
