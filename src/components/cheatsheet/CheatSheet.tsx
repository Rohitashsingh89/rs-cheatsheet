"use client";

import React, { useMemo } from "react";
import { ResumePDF } from "@/components/cheatsheet/ResumePDF";
import { Template } from "@/data/templateData";
import { usePDF } from "@react-pdf/renderer";
import { useEffect } from "react";

// Function to export PDF
const exportPdf = ({ document }: { document: JSX.Element }) => {
  const [instance, update] = usePDF({ document });

  // Hook to update the PDF when the document changes
  useEffect(() => {
    update(document);
  }, [update, document]);

  return (
    <a
      href={instance.url!}
      download={`template-${Date.now()}.pdf`}
      className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
    >
      Download PDF
    </a>
  );
};

const CheatSheet = ({ selectedTemplate }: { selectedTemplate: Template }) => {
  const document = useMemo(
    () => <ResumePDF template={selectedTemplate} />,
    [selectedTemplate]
  );

  return <div>{exportPdf({ document })}</div>;
};

export default CheatSheet;
