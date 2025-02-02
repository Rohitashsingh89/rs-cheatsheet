export interface ContentItem {
  type?: "codeSnippet";
  language?: string;
  code?: string;
  tagName?: string;
  label?: string;
  description?: string;
  codeSnippet?: string;
}

export interface Section {
  sectionTitle: string;
  description: string;
  content: ContentItem[];
}

export interface CheatSheetData {
  id: string;
  title: string;
  img: string;
  sections: Section[];
}

const cheatSheetData: CheatSheetData[] = [
  {
    id: "html",
    title: "HTML Cheat Sheet",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    sections: [
      {
        sectionTitle: "HTML Boilerplate",
        description:
          "The basic structure of an HTML document.an HTML document.an HTML document.an HTML document.an HTML document.an HTML document.",
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
  },
  {
    id: "css",
    title: "CSS Cheat Sheet",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    sections: [
      {
        sectionTitle: "CSS Boilerplate",
        description: "The basic structure of an CSS document.",
        content: [
          {
            type: "codeSnippet",
            language: "CSS",
            code: '<!DOCTYPE CSS>\n<CSS lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n</head>\n<body>\n</body>\n</CSS>',
          },
        ],
      },
      {
        sectionTitle: "Heading Tags",
        description:
          "CSS provides six heading levels to structure your content.",
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
          "CSS provides six heading levels to structure your content.",
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
  },
  {
    id: "javascript",
    title: "JavaScript Cheat Sheet",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    sections: [
      {
        sectionTitle: "JavaScript Boilerplate",
        description: "The basic structure of an JavaScript document.",
        content: [
          {
            type: "codeSnippet",
            language: "JavaScript",
            code: '<!DOCTYPE JavaScript>\n<JavaScript lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n</head>\n<body>\n</body>\n</JavaScript>',
          },
        ],
      },
      {
        sectionTitle: "Heading Tags",
        description:
          "JavaScript provides six heading levels to structure your content.",
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
          "JavaScript provides six heading levels to structure your content.",
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
  },
  {
    id: "java",
    title: "Java Cheat Sheet",
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    sections: [
      {
        sectionTitle: "Java Boilerplate",
        description: "The basic structure of an Java document.",
        content: [
          {
            type: "codeSnippet",
            language: "Java",
            code: '<!DOCTYPE Java>\n<Java lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n</head>\n<body>\n</body>\n</Java>',
          },
        ],
      },
      {
        sectionTitle: "Heading Tags",
        description:
          "Java provides six heading levels to structure your content.",
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
          "Java provides six heading levels to structure your content.",
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
  },
  {
    id: "java",
    title: "Java Cheat Sheet",
    img: "https://www.pixelstech.net/article/images/java.png",
    sections: [
      {
        sectionTitle: "Java Boilerplate",
        description: "The basic structure of an Java document.",
        content: [
          {
            type: "codeSnippet",
            language: "Java",
            code: '<!DOCTYPE Java>\n<Java lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n</head>\n<body>\n</body>\n</Java>',
          },
        ],
      },
      {
        sectionTitle: "Heading Tags",
        description:
          "Java provides six heading levels to structure your content.",
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
          "Java provides six heading levels to structure your content.",
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
  },
];

export default cheatSheetData;
