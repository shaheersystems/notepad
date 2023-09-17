import React, { useEffect, useState } from "react";
import { useToggle } from "../../context/ToggleContext";
import { useTheme } from "../../context/ThemeContext";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import { useParams } from "react-router-dom";
import Editor from "../../components/Editor";
import { useLock } from "../../context/LockContext";
const LockIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  );
};
const UnlockIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  );
};
function NotePage() {
  const { id } = useParams();
  const { toggle, setToggle } = useToggle();
  const { theme } = useTheme();
  const { lock, setLock } = useLock();
  return (
    <section
      className={`transition-all ${toggle && "ml-[230px]"} ${
        theme === "dark" ? "bg-dark" : "bg-white"
      }`}
    >
      <div className="px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {!toggle && (
            <button
              onClick={() => setToggle(true)}
              className={`p-1 rounded  ${
                theme === "dark"
                  ? "bg-dark text-light hover:bg-neutral-800"
                  : "hover:bg-neutral-200 bg-white"
              }`}
            >
              <Bars3BottomLeftIcon className="w-5 h-5 " />
            </button>
          )}
          <h2 className="px-3 py-1 text-sm rounded cursor-pointer hover:bg-neutral-200">
            {id}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-1 text-sm font-semibold rounded cursor-pointer hover:bg-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
            <span>Save</span>
          </button>
          <button
            onClick={() => setLock(!lock)}
            className="flex items-center gap-2 px-3 py-1 text-sm font-semibold rounded cursor-pointer tranition-all hover:bg-neutral-200"
          >
            {lock ? <LockIcon /> : <UnlockIcon />}
            <span>{lock ? "Unlock the editor" : "Lock the editor"}</span>
          </button>
          <button className="flex items-center gap-2 px-1 py-1 text-sm font-semibold rounded cursor-pointer tranition-all hover:bg-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
          </button>
        </div>
      </div>
      <section className="max-w-3xl py-12 m-auto">
        <Editor />
      </section>
    </section>
  );
}

export default NotePage;
