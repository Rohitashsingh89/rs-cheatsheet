"use client";

import jsPDF from "jspdf";
import "jspdf-autotable";

interface CheatSheet {
  _id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

const exportPdf = (cheatsheet: CheatSheet): void => {
  const doc = new jsPDF();

  // Set title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text(cheatsheet.title, 10, 20);

  // Add a space between title and content
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);

  // Convert HTML content to plain text for PDF rendering
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = cheatsheet.content; // Parse HTML
  const plainText = tempDiv.innerText; // Extract plain text without tags

  // Add content with word wrap
  const margin = { top: 30, left: 10, right: 10 };
  const maxWidth = 190; // Page width - margins

  doc.text(plainText, margin.left, margin.top, {
    maxWidth,
    align: "left",
  });

  // Save the PDF file
  doc.save(`${cheatsheet._id}-cheat-sheet.pdf`);
};

export default exportPdf;
