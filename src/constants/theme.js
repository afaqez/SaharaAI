import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Outfit, sans-serif",
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          "&.MuiContainer-maxWidthMd": {
            maxWidth: "700px",
          },
        },
      },
    },
  },
  palette: {
    primary: { main: "#57f6da" },
    black: { main: "#000000" },
    white: { main: "#ffffff" },
  },
});

export default theme;
