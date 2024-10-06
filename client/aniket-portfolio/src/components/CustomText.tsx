import React from "react";
import { TextInterface } from "../utilities/interfaces.constants";

const CustomText: React.FC<TextInterface> = ({
  children,
  fontSize = 16,
  fontWeight = "normal",
}) => {
  return (
    <p style={{ fontSize: fontSize, fontWeight: fontWeight }}>{children}</p>
  );
};

export default CustomText;
