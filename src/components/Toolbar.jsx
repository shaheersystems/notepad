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
    <div className="flex items-center justify-between h-10 px-4">
      <div className="flex items-center gap-2">
        {!toggle && (
          <button
            onClick={() => setToggle(true)}
            className="p-1 rounded hover:bg-neutral-200"
          >
            <Bars3BottomLeftIcon className="w-5 h-5 text-neutral-500" />
          </button>
        )}
      </div>
      <div className="flex items-center gap-2">
        <button className="p-1 rounded hover:bg-neutral-200">
          {theme === "light" ? (
            <MoonIcon
              onClick={() => toggleTheme("dark")}
              className="w-5 h-5 text-neutral-500"
            />
          ) : (
            <SunIcon
              onClick={() => toggleTheme("light")}
              className="w-5 h-5 text-neutral-500"
            />
          )}
        </button>
        <DropdownMenu data={data}>
          <button className="p-1 rounded hover:bg-neutral-200">
            <EllipsisVerticalIcon className="w-5 h-5 text-neutral-500" />
          </button>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Toolbar;
