"use client";

import { Loop } from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";

export interface Props extends SvgIconProps {}

const LoadingIcon: React.FC<Props> = ({ sx, ...props }) => {
  return (
    <Loop
      fontSize="small"
      sx={{
        ...sx,
        animation: "rotate 1s linear infinite",
        "@keyframes rotate": {
          "0%": {
            transform: "rotate(0deg)"
          },
          "100%": {
            transform: "rotate(360deg)"
          }
        }
      }}
      {...props}
    />
  );
};

export default LoadingIcon;
