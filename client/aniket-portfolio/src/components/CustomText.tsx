import React from "react";
import { TextInterface } from "../utilities/interfaces.constants";

const CustomText: React.FC<TextInterface> = ({
  children,
  fontSize = 16,
  fontWeight = "normal",
  textColor,
  onClick,
}) => {
  return (
    <p
      style={{
        fontSize: fontSize,
        fontWeight: fontWeight,
        color: textColor,
        margin: 0,
      }}
      onClick={onClick}
    >
      {children}
    </p>
  );
};

export default CustomText;
