"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import createMuiTheme from "./theme";

export const MuiProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={createMuiTheme()}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
