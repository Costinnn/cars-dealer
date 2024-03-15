import React from "react";
import { SvgTypes } from "@/types/globalTypes";

const FuelSvg = ({ color }:SvgTypes) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width="15"
      height="15"
      fill={color ? color : "#000000"}
    >
      <path d="M23.414,4,19.707.293,18.293,1.707,20,3.414V6a2,2,0,0,0,2,2V18a1,1,0,0,1-2,0V17a3,3,0,0,0-3-3H16V3a3,3,0,0,0-3-3H3A3,3,0,0,0,0,3V24H16V16h1a1,1,0,0,1,1,1v1a3,3,0,0,0,6,0V5.414A2.011,2.011,0,0,0,23.414,4ZM3,2H13a1,1,0,0,1,1,1V9H2V3A1,1,0,0,1,3,2ZM2,22V11H14V22Z" />
    </svg>
  );
};

export default FuelSvg;
