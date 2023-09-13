import { useToggle } from "../context/ToggleContext";
import Logo from "./Logo";
import {
  Bars3BottomLeftIcon,
  BellAlertIcon,
} from "@heroicons/react/24/outline";
function Toolbar() {
  const { toggle, setToggle } = useToggle();
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
      <div>
        <button className="p-1 rounded hover:bg-neutral-200">
          <BellAlertIcon className="w-5 h-5 text-neutral-500" />
        </button>
        <div>
          <img src="https://dice" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Toolbar;
