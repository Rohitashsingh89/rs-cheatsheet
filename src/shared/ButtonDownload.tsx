"use client";

import Button, { ButtonProps } from "./Button";
import React from "react";

export interface ButtonSecondaryProps extends ButtonProps {}

const ButtonDownload: React.FC<ButtonSecondaryProps> = ({
  className = " ",
  ...args
}) => {
  const handleDownload = () => {
    const url = "/api/download"; // Your API endpoint
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "first.zip"); // Name of the file to download
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <Button
      onClick={handleDownload}
      className={`ttnc-ButtonPrimary disabled:bg-opacity-70 bg-black hover:black-200 text-neutral-50 ${className}`}
      {...args}
    />
  );
};

export default ButtonDownload;
