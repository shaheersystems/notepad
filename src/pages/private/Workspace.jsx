import React from "react";
import Toolbar from "../../components/Toolbar";
import { useToggle } from "../../context/ToggleContext";
import "@blocknote/core/style.css";
import DefaultBlocks from "../../components/DefaultBlocks";
import { useTheme } from "../../context/ThemeContext";
function Workspace() {
  const { toggle } = useToggle();
  const { theme } = useTheme();
  return (
    <div
      className={`transition-all ${toggle && "ml-[230px]"} ${
        theme === "dark" ? "bg-dark" : "bg-white"
      }`}
    >
      <div className="">
        <Toolbar />
        <section className="p-4">
          <DefaultBlocks />
        </section>
      </div>
    </div>
  );
}

export default Workspace;
