import React from "react";
import { FavoriteIcon, FavoriteBorder } from "@material-ui/icons";

export const Container = ({ children }) => (
  <main className="bg-gray-100 dark:bg-gray-800 relative h-screen overflow-hidden relative">
    <div className="container mx-auto max-w-screen-lg my-8">{children}</div>
  </main>
);

export const Card = ({ title, content, username }) => (
  <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
    <h4 className="mb-4 text-sm font-normal text-gray-600 dark:text-gray-300">
      {title}
      <span className="font-thin">{username}</span>
    </h4>
    <p className="text-gray-600 text-xs dark:text-gray-400">{content}</p>
  </div>
);
export const Bar = ({ username }) => (
  <div className="flex-1 flex flex-col">
    <nav className="px-4 flex justify-between bg-white h-16 border-b-2">
      <ul className="flex items-center">
        <li className="h-6 w-6">
          <img
            className="h-full w-full mx-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/512px-Svelte_Logo.svg.png"
            alt="svelte logo"
          />
        </li>
      </ul>

      <ul className="flex items-center">
        <li>
          <h1 className="pl-8 lg:pl-0 text-gray-700">
            {username}&nbsp;님의 피드
          </h1>
        </li>
      </ul>
      <ul className="flex items-center">
        <li className="pr-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-bell"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </li>
        <li className="h-10 w-10">
          <img
            className="h-full w-full rounded-full mx-auto"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="profile woman"
          />
        </li>
      </ul>
    </nav>
  </div>
);
