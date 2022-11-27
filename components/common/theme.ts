import { Poppins } from "@next/font/google";
import { createTheme } from "@mui/material";

export const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#001427",
    },
    secondary: {
      main: "#708d81",
    },
    error: {
      main: "#bf0603",
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
});

export default theme;
