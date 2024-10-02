import { Button } from "@mui/material";
import React from "react";
import { ButtonInterface } from "../utilities/interfaces.constants";

const CustomButton: React.FC<ButtonInterface> = ({
  children,
  variant = "contained",
  disabled = false,
  startIcon,
  endIcon,
  onClick,
  style,
}) => {
  return (
    <Button
      style={{ textTransform: "none", ...style }}
      variant={variant}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
