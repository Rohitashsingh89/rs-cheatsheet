"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import axios from "axios";

// Define the types
interface CheatSheet {
  _id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

interface CheatSheetContextType {
  fetchCheatSheets: () => Promise<void>; 
  cheatSheetData: CheatSheet[];
  loading: boolean;
  error: string | null;
  editId: string | null;
  setEditId: React.Dispatch<React.SetStateAction<string | null>>; 
}

// Create the context
const CheatSheetContext = createContext<CheatSheetContextType | undefined>(
  undefined
);

// Provider component
export const CheatSheetProvider = ({ children }: { children: ReactNode }) => {
  const [cheatSheetData, setCheatSheetData] = useState<CheatSheet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editId, setEditId] = useState<string | null>(null);

  const fetchCheatSheets = async () => {
    try {
      const response = await axios.get("/api/cheatsheet");
      setCheatSheetData(response.data); // Update the state with API data
      setLoading(false);
    } catch (err) {
      setError("Failed to load cheat sheets. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCheatSheets();
  }, []);

  return (
    <CheatSheetContext.Provider value={{ fetchCheatSheets, cheatSheetData, loading, error, editId, setEditId }}>
      {children}
    </CheatSheetContext.Provider>
  );
};

// Hook to use the context
export const useCheatSheet = () => {
  const context = useContext(CheatSheetContext);
  if (context === undefined) {
    throw new Error("useCheatSheet must be used within a CheatSheetProvider");
  }
  return context;
};
