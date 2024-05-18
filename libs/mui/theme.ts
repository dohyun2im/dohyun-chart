import { createTheme } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { koKR } from "@mui/material/locale";

const createMuiTheme = () => {
  return createTheme(
    {
      spacing: 4,
      components: {
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: "6px",
              boxShadow: "rgba(50, 50, 93, 0.025) 0px 2px 5px -1px, rgba(0, 0, 0, 0.05) 0px 1px 3px -1px",
              backgroundImage: "none"
            }
          }
        }
      },
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
          main: yellow[700],
          contrastText: "#FFF"
        },
        secondary: {
          main: yellow[400],
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
