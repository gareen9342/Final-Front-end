import React from "react";
import { Link } from "react-router-dom";
export const Box = ({ children }) => (
  <div className="mb-4 mx-0 sm:ml-4 xl:mr-4 ">
    <div className="shadow-lg rounded-2xl bg-white p-2 dark:bg-gray-700 w-full">
      {children}
    </div>
  </div>
);
export const Profile = ({ studyname }) => (
  <>
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center">
        <span className="rounded-xl relative p-2 bg-blue-100">
          <svg
            width="25"
            height="25"
            viewBox="0 0 256 262"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
          >
            <path
              d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
              fill="#4285F4"
            ></path>
            <path
              d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
              fill="#34A853"
            ></path>
            <path
              d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
              fill="#FBBC05"
            ></path>
            <path
              d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
              fill="#EB4335"
            ></path>
          </svg>
        </span>
        <div className="flex flex-col">
          <span className="font-bold text-md text-black dark:text-white ml-2">
            {studyname}
          </span>
          <span className="text-sm text-gray-500 dark:text-white ml-2">
            Google Inc.
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <button className="border p-1 border-gray-200 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            className="w-4 h-4 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 1792 1792"
          >
            <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
          </svg>
        </button>
        <button className="text-gray-200">
          <svg
            width="25"
            height="25"
            fill="currentColor"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z"></path>
          </svg>
        </button>
      </div>
    </div>
    <div className="flex items-center justify-between mb-4 space-x-12">
      <span className="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-gray-500 bg-gray-200">
        PROGRESS
      </span>
      <span className="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-red-400 border border-red-400  bg-white">
        HIGHT PRIORITY
      </span>
    </div>
    <div className="block m-auto">
      <div>
        <span className="text-sm inline-block text-gray-500 dark:text-gray-100">
          Task done :
          <span className="text-gray-700 dark:text-white font-bold">25</span>
          /50
        </span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
        <div className="w-1/2 h-full text-center text-xs text-white bg-purple-500 rounded-full"></div>
      </div>
    </div>
    <div className="flex items-center justify-start my-4 space-x-4">
      <span className="px-2 py-1 flex items-center text-xs rounded-md font-semibold text-green-500 bg-green-50">
        IOS APP
      </span>
      <span className="px-2 py-1 flex items-center text-xs rounded-md text-blue-500 font-semibold bg-blue-100">
        UI/UX
      </span>
    </div>
    <span className="px-2 py-1 flex w-36 mt-4 items-center text-xs rounded-md font-semibold text-yellow-500 bg-yellow-100">
      DUE DATE : 18 JUN
    </span>
  </>
);
export const ToDoList = ({ children }) => <ul>{children}</ul>;
export const ToDoListItem = ({ index, checked, taskName }) => (
  <li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
    {checked ? (
      <>
        <div className="flex items-center justify-start text-sm">
          <span className="mx-4">{index}</span>
          <span className="line-through">{taskName}</span>
        </div>
        <svg
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 1024 1024"
          className="text-green-500 mx-4"
        >
          <path
            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
            fill="currentColor"
          ></path>
        </svg>
      </>
    ) : (
      <>
        <div className="flex items-center justify-start text-sm">
          <span className="mx-4"> {index} </span>
          <span>{taskName}</span>
        </div>
        <svg
          width="20"
          height="20"
          fill="currentColor"
          className="mx-4 text-gray-400 dark:text-gray-300"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
            fill="currentColor"
          ></path>
          <path
            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
            fill="currentColor"
          ></path>
        </svg>
      </>
    )}
  </li>
);
export const LeftContainer = ({ children }) => (
  <div className="h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80">
    <div className="bg-white h-full rounded-2xl dark:bg-gray-700">
      {children}
    </div>
  </div>
);
export const Navigation = ({ children }) => (
  <nav className="mt-6">
    <div>{children}</div>
  </nav>
);
export const NavigaionLink = ({ pathUrl, pathName }) => (
  <Link
    className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500"
    to={pathUrl}
  >
    <span className="text-left">
      <svg
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 2048 1792"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
      </svg>
    </span>
    <span className="mx-4 text-sm font-normal">{pathName}</span>
  </Link>
);
export const Header = ({ children }) => (
  <header className="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
    <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
      <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
        <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
          <div className="container relative left-0 z-50 flex w-3/4 h-auto h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  </header>
);
export const SearchBar = () => (
  <div className="relative flex items-center w-full lg:w-64 h-full group">
    <div className="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
      <svg
        fill="none"
        className="relative w-5 h-5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    </div>
    <svg
      className="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
    </svg>
    <input
      type="text"
      className="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input"
      placeholder="Search"
    />
    <div className="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block">
      +
    </div>
  </div>
);
