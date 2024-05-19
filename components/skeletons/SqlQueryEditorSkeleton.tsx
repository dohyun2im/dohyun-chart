"use client";

import { Skeleton } from "@mui/material";

const SqlQueryEditorSkeleton: React.FC = () => {
  return <Skeleton sx={{ background: "#1e1e1e" }} animation="wave" width="100%" height={240} variant="rectangular" />;
};

export default SqlQueryEditorSkeleton;
