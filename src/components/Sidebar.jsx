import { Link } from "react-router-dom";
import {
  ChevronDoubleLeftIcon,
  MagnifyingGlassIcon,
  ClockIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useToggle } from "../context/ToggleContext";
function Sidebar() {
  const [name, setName] = useState("Muhammad Shaheer");
  useEffect(() => {
    const formatName = () => {
      if (name.length > 12) {
        setName(name.substring(0, 12) + "...");
      }
    };
    formatName();
  }, []);
  const pages = [
    {
      title: "Getting Started",
    },
    {
      title: "FYP Ideas",
    },
    {
      title: "FYP Progress",
    },
  ];
  const { toggle, setToggle } = useToggle();
  return (
    <div
      className={`bg-white fixed top-0 transition-all bottom-0 w-[230px] h-screen border ${
        !toggle && "-translate-x-full"
      }`}
    >
      <div>
        <div className="flex items-center justify-between px-3 py-2 cursor-pointer group hover:bg-neutral-200">
          <div className="flex items-center gap-2">
            <img
              className="w-8 h-8 rounded-full"
              src="https://api.dicebear.com/7.x/lorelei/svg"
              alt=""
            />
            <h2 className="text-sm font-semibold">{name}</h2>
          </div>
          <div>
            <button
              onClick={() => setToggle(false)}
              className="hidden p-1 rounded group-hover:block hover:bg-neutral-300"
            >
              <ChevronDoubleLeftIcon className="w-4 h-4 text-neutral-500" />
            </button>
          </div>
        </div>
        <div className="px-1 py-2 space-y-1">
          <button className="flex items-center w-full gap-2 px-4 py-1 rounded hover:bg-neutral-100">
            <MagnifyingGlassIcon className="w-4 h-4 text-neutral-500" />
            <span className="text-sm text-neutral-500">Search</span>
          </button>
          <button className="flex items-center w-full gap-2 px-4 py-1 rounded hover:bg-neutral-100">
            <ClockIcon className="w-4 h-4 text-neutral-500" />
            <span className="text-sm text-neutral-500">Updates</span>
          </button>
          <button className="flex items-center w-full gap-2 px-4 py-1 rounded hover:bg-neutral-100">
            <Cog6ToothIcon className="w-4 h-4 text-neutral-500" />
            <span className="text-sm text-neutral-500">Settings</span>
          </button>
          <button className="flex items-center w-full gap-2 px-4 py-1 rounded hover:bg-neutral-100">
            <PlusCircleIcon className="w-4 h-4 text-neutral-500" />
            <span className="text-sm text-neutral-500">New Page</span>
          </button>
        </div>
        <div className="px-1 py-6">
          <h2 className="flex items-center gap-1 px-4 py-1 text-sm text-neutral-500">
            <DocumentTextIcon className="w-4 h-4 text-neutral-500" />
            <span className="font-semibold">Pages</span>
          </h2>
          <div className="my-2 overflow-y-scroll h-72 no-scrollbar">
            {pages.map((page, index) => {
              return (
                <Link to={`/pages/${page.title}`} key={index}>
                  <button className="flex items-center w-full gap-2 px-4 py-1 text-left rounded hover:bg-neutral-100">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.877075 7.49991C0.877075 3.84222 3.84222 0.877075 7.49991 0.877075C11.1576 0.877075 14.1227 3.84222 14.1227 7.49991C14.1227 11.1576 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1576 0.877075 7.49991ZM7.49991 1.82708C4.36689 1.82708 1.82708 4.36689 1.82708 7.49991C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49991C13.1727 4.36689 10.6329 1.82708 7.49991 1.82708Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm font-semibold text-neutral-900">
                      {page.title.length > 25
                        ? page.title.substring(0, 20) + "..."
                        : page.title}
                    </span>
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
