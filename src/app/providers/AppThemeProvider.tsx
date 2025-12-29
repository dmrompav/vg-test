import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { type ReactNode } from "react";

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily:
      "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    h2: { fontWeight: 700, fontSize: 32, lineHeight: "39px" },
    h4: {
      fontWeight: 600,
      fontSize: 16,
      lineHeight: "19px",
      letterSpacing: "-0.2px",
    },
    subtitle1: {
      fontSize: 14,
      lineHeight: "17px",
      letterSpacing: "0.1px",
    },
    h6: { fontWeight: 600 },
    body1: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "17px",
      letterSpacing: "0.1px",
    },
  },
  palette: {
    background: {
      default: "#ffffff",
      paper: "#f7f7f7",
    },
    text: {
      primary: "#212121",
      secondary: "#5a5a65",
      tertiary: "#4d4d4d",
    },
    grey: {
      200: "#e1e4e8",
    },
    chip: {
      pink: "#FFDCE0",
      grey: "#EFEFEF",
    },
    primary: { main: "#111827" },
  },
  shape: { borderRadius: 14 },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 14,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: 36,
          borderRadius: 12,
          fontWeight: 600,
        },
      },
    },
  },
});

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
