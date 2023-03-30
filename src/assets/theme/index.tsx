import { createTheme } from "@mui/material/styles";
import globals from "assets/theme/base/globals";
import breakpoints from "assets/theme/base/breakpoints";
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

const theme = createTheme({
  breakpoints: { ...breakpoints },
  palette: {
    text: colors.text,
  },
  typography: { 
    ...typography
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
      },
    },
  },
});

export default theme;
