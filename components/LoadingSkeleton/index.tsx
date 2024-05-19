"use client";

import { Skeleton } from "@mui/material";
import { grey } from "@mui/material/colors";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  isLoading: boolean;
  height: number;
  className?: string;
  backgroundColor?: string;
}

const LoadingSkeleton: React.FC<Props> = ({ isLoading, height, className, backgroundColor = grey[50], children }) => {
  if (isLoading) {
    return (
      <Skeleton
        className={className}
        sx={{ background: backgroundColor }}
        animation="wave"
        width="100%"
        height={height}
        variant="rectangular"
      />
    );
  }

  return <>{children}</>;
};

export default LoadingSkeleton;
