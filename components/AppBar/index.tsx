"use client";

import { PATH } from "@/constants/path";
import { CandlestickChartRounded, WavesRounded } from "@mui/icons-material";
import { Box, AppBar as MuiAppBar, Toolbar, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import LinkButton from "../LinkButton";

const AppBar = () => {
  const pathname = usePathname();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
            Dohyun-Oneline
          </Typography>
          <LinkButton
            isActivePath={pathname === PATH.dashboard}
            href={PATH.dashboard}
            endIcon={<CandlestickChartRounded />}
          >
            Dashboard
          </LinkButton>
          <LinkButton isActivePath={pathname === PATH.flow} href={PATH.flow} endIcon={<WavesRounded />}>
            Flow
          </LinkButton>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};

export default AppBar;
