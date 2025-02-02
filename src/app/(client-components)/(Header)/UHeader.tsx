import React, { FC } from "react";
import RMainNav1 from "./RMainNav1";

export interface HeaderProps {
  className?: string;
}

const UHeader: FC<HeaderProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-Header sticky top-0 w-full left-0 right-0 z-40 nc-header-bg ${className}`}
    >
      <RMainNav1 />
    </div>
  );
};

export default UHeader;
