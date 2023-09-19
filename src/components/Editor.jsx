import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import { useLock } from "../context/LockContext";
import { useEditorContent } from "../context/EditorContentContext";

function Editor() {
  const { lock } = useLock();
  const { theme } = useTheme();
  // const [data, setData] = useState(
  //   JSON.parse(localStorage.getItem("data")) || defaultData
  // );
  const { data, setData } = useEditorContent();

  const editor = useBlockNote(
    {
      editable: !lock,
      initialContent: data,
      onEditorReady: () => {
        console.log("Editor is ready!");
      },
      onEditorContentChange: (content) => {
        setData(content.topLevelBlocks);
        console.log("On editor change", console.log(content.topLevelBlocks));
      },
    },
    [lock]
  );
  return (
    <div>
      <BlockNoteView className="text-gray-800" editor={editor} theme={theme} />
    </div>
  );
}

export default Editor;
