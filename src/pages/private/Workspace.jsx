import React from "react";
import Toolbar from "../../components/Toolbar";
import { useToggle } from "../../context/ToggleContext";

function Workspace() {
  const { toggle } = useToggle();
  return (
    <div className={`transition-all ${toggle && "ml-[230px]"}`}>
      <div className="">
        <Toolbar />
        <h1>Workspace</h1>
      </div>
    </div>
  );
}

export default Workspace;
