import { Link } from "react-router-dom";
import {
  ChevronDoubleLeftIcon,
  MagnifyingGlassIcon,
  ClockIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
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
      title: "Page 1",
    },
    {
      title: "Page 2",
    },
    {
      title: "Page 3",
    },
  ];
  return (
    <div className="fixed top-0 bottom-0 w-[230px] h-screen bg-neutral-100">
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
            <button className="hidden p-1 rounded group-hover:block hover:bg-neutral-300">
              <ChevronDoubleLeftIcon className="w-4 h-4 text-neutral-500" />
            </button>
          </div>
        </div>
        <div className="px-1 py-2 space-y-1 border-b">
          <button className="flex items-center w-full gap-2 px-4 py-1 rounded hover:bg-neutral-200">
            <MagnifyingGlassIcon className="w-4 h-4 text-neutral-500" />
            <span className="text-sm text-neutral-500">Search</span>
          </button>
          <button className="flex items-center w-full gap-2 px-4 py-1 rounded hover:bg-neutral-200">
            <ClockIcon className="w-4 h-4 text-neutral-500" />
            <span className="text-sm text-neutral-500">Updates</span>
          </button>
          <button className="flex items-center w-full gap-2 px-4 py-1 rounded hover:bg-neutral-200">
            <Cog6ToothIcon className="w-4 h-4 text-neutral-500" />
            <span className="text-sm text-neutral-500">Settings</span>
          </button>
          <button className="flex items-center w-full gap-2 px-4 py-1 rounded hover:bg-neutral-200">
            <PlusCircleIcon className="w-4 h-4 text-neutral-500" />
            <span className="text-sm text-neutral-500">New Page</span>
          </button>
        </div>
        <div className="px-1 py-6">
          <h2 className="flex items-center gap-2 px-4 py-1 text-sm text-neutral-500">
            <DocumentTextIcon className="w-4 h-4 text-neutral-500" />
            <span>Pages</span>
          </h2>
          <div className="my-2 overflow-y-scroll h-72 no-scrollbar">
            {pages.map((page, index) => {
              return (
                <Link to={`/${page.title}`} key={index}>
                  <button className="flex items-center w-full gap-2 px-4 py-1 rounded hover:bg-neutral-200">
                    <span className="text-sm text-neutral-500">
                      {page.title}
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
