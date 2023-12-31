import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#323539",
    },
    secondary: {
      main: "#797979",
    },
    error: {
      main: "#FF2D55",
    },
    background: {
      default: "#F4F4F4",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  shape: {
    borderRadius: 20,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
