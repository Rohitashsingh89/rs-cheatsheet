import React from "react";

interface ContentItem {
  tagName?: string;
  label?: string;
  description?: string;
  codeSnippet?: string;
  example?: string;
  type?: string;
  language?: string;
  code?: string;
}

interface Section {
  sectionTitle: string;
  description?: string;
  content: ContentItem[];
}

interface HTMLCheatSheetProps {
  title: string;
  sections: Section[];
}

const HTMLCheatSheet: React.FC<HTMLCheatSheetProps> = ({ title, sections }) => {
  return (
    <div className="cheat-sheet-container p-4">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">{title}</h1>

      {/* Render Sections */}
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="section mb-8">
          {/* Section Title */}
          <h2 className="text-2xl font-semibold mb-4">
            {section.sectionTitle}
          </h2>

          {/* Section Description */}
          {section.description && (
            <p className="text-gray-600 mb-4">{section.description}</p>
          )}

          {/* Section Content */}
          <div className="content grid grid-cols-1 md:grid-cols-2 gap-4">
            {section.content.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="content-item border p-4 rounded shadow-sm"
              >
                {/* Label or Tag Name */}
                {item.label || item.tagName ? (
                  <h3 className="text-xl font-medium mb-2">
                    {item.label || item.tagName}
                  </h3>
                ) : null}

                {/* Description */}
                {item.description && (
                  <p className="text-gray-500 mb-2">{item.description}</p>
                )}

                {/* Code Example */}
                {item.codeSnippet || item.example || item.code ? (
                  <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
                    <code>
                      {item.codeSnippet ||
                        item.example ||
                        item.code ||
                        "No code available"}
                    </code>
                  </pre>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HTMLCheatSheet;
