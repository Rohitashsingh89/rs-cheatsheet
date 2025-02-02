import React, { useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import Paragraph from "@editorjs/paragraph";

interface EditorProps {
  onSave: (data: OutputData) => void;
}

const Editor: React.FC<EditorProps> = ({ onSave }) => {
  const editorRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    editorRef.current = new EditorJS({
      holder: "editorjs",
      tools: {
        paragraph: {
          inlineToolbar: true,
        },
      },
    });

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, []);

  const handleSave = async () => {
    if (editorRef.current) {
      const savedData = await editorRef.current.save();
      onSave(savedData); // Pass the saved data to the parent or log it
    }
  };

  return (
    <div>
      <div
        id="editorjs"
        style={{ border: "1px solid #ccc", padding: "10px" }}
      ></div>
      <button onClick={handleSave}>Save Data</button>
    </div>
  );
};

export default Editor;
