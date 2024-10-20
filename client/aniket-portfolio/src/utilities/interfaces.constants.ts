import { ReactElement } from "react";

export interface TextInterface {
  children: string;
  textColor?: string;
  fontSize?: number;
  fontWeight?:
    | "normal"
    | "bolder"
    | "lighter"
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    | "inherit"
    | "initial"
    | "revert"
    | "revert-layer"
    | "unset";
  onClick?: React.MouseEventHandler | undefined;
}

export interface ButtonInterface {
  children: any;
  variant: "contained" | "outlined" | "text";
  disabled?: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: React.MouseEventHandler | undefined;
  style?: React.CSSProperties | undefined;
  textColor?: string;
  fontSize?: number;
  fontWeight?:
    | "normal"
    | "bolder"
    | "lighter"
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    | "inherit"
    | "initial"
    | "revert"
    | "revert-layer"
    | "unset";

  className?: string;
}
