import { createTheme } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
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
          main: lightBlue[600],
          contrastText: "#FFF"
        },
        secondary: {
          main: lightBlue[400],
          contrastText: "#FFF"
        }
      },
      typography: {
        fontSize: 13,
        button: {
          textTransform: "none"
        }
      }
    },
    koKR
  );
};

export default createMuiTheme;
