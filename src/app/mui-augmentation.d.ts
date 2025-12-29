import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeText {
    tertiary: string;
  }
  interface Palette {
    chip: {
      pink: string;
      grey: string;
    };
  }
  interface PaletteOptions {
    chip?: {
      pink: string;
      grey: string;
    };
  }
}
