import { useToggle } from "../context/ToggleContext";
import { useTheme } from "../context/ThemeContext";
import {
  Bars3BottomLeftIcon,
  BellAlertIcon,
  EllipsisVerticalIcon,
  Cog6ToothIcon,
  UserIcon,
  ArrowLeftOnRectangleIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import DropdownMenu from "./DropdownMenu";

const data = [
  {
    icon: <UserIcon className="w-5 h-5 text-neutral-500" />,
    text: "Profile",
  },
  {
    icon: <Cog6ToothIcon className="w-5 h-5 text-neutral-500" />,
    text: "Settings",
  },
  {
    icon: <ArrowLeftOnRectangleIcon className="w-5 h-5 text-neutral-500" />,
    text: "Logout",
  },
];

function Toolbar() {
  const { toggle, setToggle } = useToggle();
  const { setTheme, theme } = useTheme();
  const toggleTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };
  return (
    <div
      className={`flex items-center justify-between py-2.5 px-4 ${
        theme === "dark" ? "bg-dark text-light" : "text-neutral-500"
      }`}
    >
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
      </div>
      <div className="flex items-center gap-2">
        <button
          className={`p-1 rounded  ${
            theme === "dark"
              ? "bg-dark text-light hover:bg-neutral-800"
              : "hover:bg-neutral-200 bg-white"
          }`}
        >
          {theme === "light" ? (
            <MoonIcon onClick={() => toggleTheme("dark")} className="w-5 h-5" />
          ) : (
            <SunIcon
              onClick={() => toggleTheme("light")}
              className="w-5 h-5 "
            />
          )}
        </button>
        <DropdownMenu data={data}>
          <button
            className={`p-1 rounded  ${
              theme === "dark"
                ? "bg-dark text-light hover:bg-neutral-800"
                : "hover:bg-neutral-200 bg-white"
            }`}
          >
            <EllipsisVerticalIcon className="w-5 h-5" />
          </button>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Toolbar;
