import React, { useState } from "react";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import { useTheme } from "../context/ThemeContext";
const defaultData = [
  {
    id: "315fe7be-fe6e-4ba0-94b7-25acdf07deb0",
    type: "heading",
    props: {
      textColor: "default",
      backgroundColor: "default",
      textAlignment: "left",
      level: "2",
    },
    content: [
      {
        type: "text",
        text: "Getting Started",
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: "10c3ff1e-a7c4-47a8-b464-8dee6dd36494",
    type: "paragraph",
    props: {
      textColor: "default",
      backgroundColor: "default",
      textAlignment: "left",
    },
    content: [
      {
        type: "text",
        text: "Welcome to Notepad 🤞",
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: "218c87c9-1f27-4396-abb6-a77ce6a0d2fa",
    type: "paragraph",
    props: {
      textColor: "default",
      backgroundColor: "default",
      textAlignment: "left",
    },
    content: [],
    children: [],
  },
  {
    id: "4427dc3c-4af6-46fc-bdcf-2ff15ad95edb",
    type: "paragraph",
    props: {
      textColor: "default",
      backgroundColor: "default",
      textAlignment: "left",
    },
    content: [
      {
        type: "text",
        text: "Here are the basics:",
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: "f508273b-6d5a-4c88-ab7b-d6e0a1eb58ae",
    type: "bulletListItem",
    props: {
      textColor: "default",
      backgroundColor: "default",
      textAlignment: "left",
    },
    content: [
      {
        type: "text",
        text: "Create a new page by clicking on the ",

        styles: {},
      },
      {
        type: "text",
        text: "+ Add page",
        styles: {
          bold: true,
        },
      },
      {
        type: "text",
        text: " button on the left sidebar.",
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: "9e5cbd30-e724-46e1-93bf-aa873f31531d",
    type: "bulletListItem",
    props: {
      textColor: "default",
      backgroundColor: "default",
      textAlignment: "left",
    },
    content: [
      {
        type: "text",
        text: "Click anywhere and just start typing",
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: "0fc8afc8-291b-4bec-a1e2-05f907a91224",
    type: "bulletListItem",
    props: {
      textColor: "default",
      backgroundColor: "default",
      textAlignment: "left",
    },
    content: [
      {
        type: "text",
        text: "Hit / and start adding any block you want to add (headers, paragraphs, Bullet points, etc.).",
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: "de1dd23c-7b1b-4eab-8163-cb05e3180d36",
    type: "bulletListItem",
    props: {
      textColor: "default",
      backgroundColor: "default",
      textAlignment: "left",
    },
    content: [
      {
        type: "text",
        text: "Highlight any text you want, and use the menu that pops up to style your ",
        styles: {},
      },
      {
        type: "text",
        text: "text",
        styles: {
          underline: true,
        },
      },
      {
        type: "text",
        text: " ",
        styles: {},
      },
      {
        type: "text",
        text: "however",
        styles: {
          textColor: "yellow",
        },
      },
      {
        type: "text",
        text: " ",
        styles: {},
      },
      {
        type: "text",
        text: "you",
        styles: {
          strike: true,
        },
      },
      {
        type: "text",
        text: " want.",
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: "ae27fdb5-7508-403e-880c-0e5977a719fd",
    type: "bulletListItem",
    props: {
      textColor: "default",
      backgroundColor: "default",
      textAlignment: "left",
    },
    content: [
      {
        type: "text",
        text: "Grab the ",
        styles: {},
      },
      {
        type: "text",
        text: "⋮⋮",
        styles: {
          bold: true,
        },
      },
      {
        type: "text",
        text: " to the left of blocks (you will see on hover) Click and drag to move this line.",
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: "792f7fcc-0355-4254-82ab-9a4436739353",
    type: "paragraph",
    props: {
      textColor: "default",
      backgroundColor: "default",
      textAlignment: "left",
    },
    content: [],
    children: [],
  },
  {
    id: "f62bd298-13b8-4f35-aab6-5abda8a37dea",
    type: "paragraph",
    props: {
      textColor: "default",
      backgroundColor: "default",
      textAlignment: "left",
    },
    content: [
      {
        type: "text",
        text: "👉 Have any questions? ",
        styles: {
          bold: true,
        },
      },
      {
        type: "text",
        text: "Reach out to us on ",
        styles: {},
      },
      {
        type: "link",
        href: "https://support.notepad.com",
        content: [
          {
            type: "text",
            text: "Notepad Support",
            styles: {
              underline: true,
              textColor: "#0070f3",
            },
          },
        ],
      },
    ],
    children: [],
  },
  {
    id: "7cb45e14-f30c-4aea-b377-b8772ca77ab7",
    type: "paragraph",
    props: {
      textColor: "default",
      backgroundColor: "default",
      textAlignment: "left",
    },
    content: [],
    children: [],
  },
  {
    id: "a80cc6f1-f278-481d-b7be-955ceb1f1d74",
    type: "paragraph",
    props: {
      textColor: "default",
      backgroundColor: "default",
      textAlignment: "left",
    },
    content: [],
    children: [],
  },
];

function DefaultBlocks() {
  const { theme } = useTheme();
  const [editorContent, setEditorContent] = useState(defaultData);
  const editor = useBlockNote({
    initialContent: editorContent,
    editable: false,
    onEditorContentChange: (editor) => {
      setEditorContent(editor.topLevelBlocks);
      console.log(editor.topLevelBlocks);
    },
  });

  return (
    <div>
      <BlockNoteView editor={editor} theme={theme} />
    </div>
  );
}

export default DefaultBlocks;
