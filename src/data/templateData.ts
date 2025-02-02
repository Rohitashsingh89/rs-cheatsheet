export interface CheatSheetItem {
  tag?: string;
  property?: string;
  description: string;
}

export interface Template {
  id: string;
  title: string;
  description: string;
  data: CheatSheetItem[];
}

const templateData: Template[] = [
  {
    id: "html",
    title: "HTML Cheat Sheet",
    description: "Quick reference for HTML tags and attributes.",
    data: [
      { tag: "<a>", description: "Defines a hyperlink" },
      { tag: "<div>", description: "Defines a division or section" },
      { tag: "<h1>", description: "Defines a top-level heading" },
    ],
  },
  {
    id: "css",
    title: "CSS Cheat Sheet",
    description: "Quick reference for CSS properties.",
    data: [
      { property: "color", description: "Sets the text color" },
      {
        property: "margin",
        description: "Sets the outer spacing of an element",
      },
      {
        property: "padding",
        description: "Sets the inner spacing of an element",
      },
    ],
  },
];

export default templateData;
