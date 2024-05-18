import { createTheme } from "@mui/material";
import { indigo } from "@mui/material/colors";
import { koKR } from "@mui/material/locale";

const createMuiTheme = () => {
  return createTheme(
    {
      spacing: 4,
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1440
        }
      },
      palette: {
        primary: {
          main: indigo[600],
          contrastText: "#FFF"
        },
        secondary: {
          main: indigo[400],
          contrastText: "#FFF"
        }
      }
    },
    koKR
  );
};

export default createMuiTheme;
