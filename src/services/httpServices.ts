"use client";

import Swal from "sweetalert2";
import moment from "moment";
import * as XLSX from "xlsx";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

// Function to Fetch Data
export const fetchData = async (
  endpoint: string,
  setData: React.Dispatch<React.SetStateAction<any>>,
  actionName: string
) => {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `Failed to fetch ${actionName}!`,
      });
      throw new Error(`Failed to fetch ${actionName}!`);
    }

    const result = await response.json();
    setData(result);
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: `An error occurred while fetching ${actionName}!`,
    });
  }
};

// Function to Add Data
export const addData = async (
  endpoint: string,
  newData: any,
  fetchDataCallback: () => void,
  actionName: string
) => {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    const result = await response.json();
    if (!response.ok)
      throw new Error(result.error || `Failed to add ${actionName}!`);

    Swal.fire({
      icon: "success",
      title: "Success",
      text: `${actionName} added successfully!`,
      timer: 3000,
      showConfirmButton: false,
    });

    fetchDataCallback();
  } catch (error: any) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error.message || `An error occurred while adding ${actionName}!`,
    });
  }
};

// Function to Update Data
export const updateData = async (
  endpoint: string,
  updatedData: any,
  fetchDataCallback: () => void,
  actionName: string
) => {
  try {
    const response = await fetch(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    const result = await response.json();
    if (!response.ok)
      throw new Error(result.error || `Failed to update ${actionName}!`);

    Swal.fire({
      icon: "success",
      title: "Success",
      text: `${actionName} updated successfully!`,
      timer: 3000,
      showConfirmButton: false,
    });

    fetchDataCallback();
  } catch (error: any) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error.message || `An error occurred while updating ${actionName}!`,
    });
  }
};

// Function to Delete Data
export const deleteData = async (
  endpoint: string,
  fetchDataCallback: () => void,
  actionName: string
) => {
  Swal.fire({
    title: "Are you sure?",
    text: "This action cannot be undone!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "Cancel",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const response = await fetch(endpoint, {
          method: "DELETE",
        });
        if (!response.ok) throw new Error(`Failed to delete ${actionName}!`);

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${actionName} deleted Successfully.`,
          timer: 3000,
          showConfirmButton: false,
        });

        fetchDataCallback();
      } catch (error: any) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text:
            error.message || `An error occurred while deleting ${actionName}!`,
        });
      }
    }
  });
};

export const searchFilter = <T>(
  data: T[],
  searchQuery: string,
  fieldsToSearch: (keyof T)[],
  dateFields: (keyof T)[] = []
): T[] => {
  if (!searchQuery) return data;

  const lowerCaseQuery = searchQuery.toLowerCase();

  return data.filter((item) =>
    fieldsToSearch.some((field) => {
      let fieldValue = String(item[field]).toLowerCase();

      if (dateFields.includes(field)) {
        const dateValue = item[field];

        if (typeof dateValue === "string" || typeof dateValue === "number") {
          fieldValue = moment(dateValue)
            .format("DD MMMM YYYY, hh:mm A")
            .toLowerCase();
        }
      }

      return fieldValue.includes(lowerCaseQuery);
    })
  );
};

export interface PaginationResult<T> {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  paginatedData: T[];
}

export const paginateData = <T>(
  data: T[],
  currentPage: number,
  itemsPerPage: number
): PaginationResult<T> => {
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedData = data.slice(indexOfFirstItem, indexOfLastItem);

  return {
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage,
    paginatedData,
  };
};

// Reusable password change function
export const handlePasswordChangeSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  changePassword: { id: string; oldPassword: string; newPassword: string },
  cPassword: string,
  setChangePassword: React.Dispatch<
    React.SetStateAction<{
      id: string;
      oldPassword: string;
      newPassword: string;
    }>
  >,
  setCPassword: React.Dispatch<React.SetStateAction<string>>,
  fetchUserData: () => void,
  url: string
) => {
  e.preventDefault();

  if (changePassword.newPassword !== cPassword) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Password and Confirm password do not match!",
    });
    empltyChangePasswordModal();
    return;
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(changePassword),
    });

    const data = await response.json();

    if (response.ok) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Password Changed successfully!",
        timer: 3000,
        showConfirmButton: false,
      });
      empltyChangePasswordModal();
      fetchUserData();
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: data.error || "Something went wrong!",
      });
      empltyChangePasswordModal();
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "An error occurred while updating the password!",
    });
    empltyChangePasswordModal();
  }

  // Helper to close modal and reset form
  function empltyChangePasswordModal() {
    setChangePassword({
      id: "",
      oldPassword: "",
      newPassword: "",
    });
    setCPassword("");
  }
};

// Export Excel
export const exportToExcel = (data: any[], filename: string = "data.xlsx") => {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Data");
  XLSX.writeFile(wb, filename);
};

// Export PDF
export const exportToPDF = (
  data: any[],
  headers: string[],
  filename: string = "data.pdf"
) => {
  const doc = new jsPDF();
  doc.autoTable({
    head: [headers],
    body: data.map((item) =>
      headers.map((header) => item[header.toLowerCase().replace(" ", "_")])
    ),
  });
  doc.save(filename);
};

// Export CSV
// Export CSV with proper formatting
export const exportToCSV = (data: any[], filename: string = "data.csv") => {
  const headers = Object.keys(data[0]).join(","); // Header row
  const csvContent = [
    headers,
    ...data.map((item) =>
      Object.values(item)
        .map((value) =>
          typeof value === "string" && value.includes(",")
            ? `"${value}"`
            : `"${value}"`
        )
        .join(",")
    ),
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};
