import React from "react";
import { SvgTypes } from "@/types/globalTypes";

const LArrowSvg = ({ color }:SvgTypes) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Bold"
      viewBox="0 0 24 24"
      width="30"
      height="30"
      fill={color ? color : "#000000"}
    >
      <path d="M10.957,12.354a.5.5,0,0,1,0-.708l4.586-4.585a1.5,1.5,0,0,0-2.121-2.122L8.836,9.525a3.505,3.505,0,0,0,0,4.95l4.586,4.586a1.5,1.5,0,0,0,2.121-2.122Z" />
    </svg>
  );
};

export default LArrowSvg;
