"use client";

import { Skeleton } from "@mui/material";
import { grey } from "@mui/material/colors";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  isLoading: boolean;
}

const CandleStickChartSkeleton: React.FC<Props> = ({ isLoading, children }) => {
  if (isLoading) {
    return <Skeleton sx={{ background: grey[50] }} animation="wave" width="100%" height={385} variant="rectangular" />;
  }

  return <>{children}</>;
};

export default CandleStickChartSkeleton;
