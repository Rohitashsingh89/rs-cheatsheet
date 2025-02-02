import Button, { ButtonProps } from "./Button";
import React from "react";

export interface ButtonPrimaryProps extends ButtonProps {}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  className = "",
  ...args
}) => {
  return (
    <Button
      className={`ttnc-ButtonPrimary disabled:bg-opacity-70 bg-ten hover:bg-ten-hover transition-all duration-300 text-neutral-50 ${className}`}
      {...args}
    />
  );
};

export default ButtonPrimary;
