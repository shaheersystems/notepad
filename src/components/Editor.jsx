import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import { useLock } from "../context/LockContext";
const defaultData = [
  {
    id: "315fe7be-fe6e-4ba0-94b7-25acdf07deb0",
    type: "heading",
    props: {
      textColor: "default",
      backgroundColor: "default",
      textAlignment: "left",
      level: "3",
    },
    content: [
      {
        type: "text",
        text: "Start from editing here...",
        styles: {},
      },
    ],
    children: [],
  },
];

function Editor() {
  const { lock } = useLock();
  const { theme } = useTheme();
  const [lockState, setLockState] = useState(lock);
  const editor = useBlockNote({
    initialContent: defaultData,
    editable: () => !lock,
    onEditorReady: () => {
      setLockState(lock);
    },
  });
  return (
    <div>
      <BlockNoteView editor={editor} theme={theme} />
    </div>
  );
}

export default Editor;
