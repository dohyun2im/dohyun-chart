"use client";

import AppBar from "@/components/AppBar";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={{ minHeight: "100vh", background: grey[100] }}>
      <AppBar />
      <Box sx={{ p: 4 }}>{children}</Box>
    </Box>
  );
};

export default Layout;
