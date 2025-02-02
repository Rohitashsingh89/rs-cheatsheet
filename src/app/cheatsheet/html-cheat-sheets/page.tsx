import React from "react";
import HTMLCheatSheet from "../HTMLCheatSheet";

const cheatSheetData = {
  title: "HTML Cheat Sheet",
  sections: [
    {
      sectionTitle: "HTML Boilerplate",
      description: "The basic structure of an HTML document.",
      content: [
        {
          type: "codeSnippet",
          language: "html",
          code: '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n</head>\n<body>\n</body>\n</html>',
        },
      ],
    },
    {
      sectionTitle: "Heading Tags",
      description:
        "HTML provides six heading levels to structure your content.",
      content: [
        {
          tagName: "h1",
          label: "Heading 1",
          description: "This is the largest heading.",
          codeSnippet: "<h1>Heading1</h1>",
        },
        {
          tagName: "h2",
          label: "Heading 2",
          description: "This is the second largest heading.",
          codeSnippet: "<h2>Heading2</h2>",
        },
      ],
    },
    {
      sectionTitle: "Heading Tags",
      description:
        "HTML provides six heading levels to structure your content.",
      content: [
        {
          tagName: "h1",
          label: "Heading 1",
          description: "This is the largest heading.",
          codeSnippet: "<h1>Heading1</h1>",
        },
        {
          tagName: "h2",
          label: "Heading 2",
          description: "This is the second largest heading.",
          codeSnippet: "<h2>Heading2</h2>",
        },
      ],
    },
  ],
};

const HTMLCheatSheets: React.FC = () => {
  return (
    <div className="App">
      <HTMLCheatSheet {...cheatSheetData} />
    </div>
  );
};

export default HTMLCheatSheets;
