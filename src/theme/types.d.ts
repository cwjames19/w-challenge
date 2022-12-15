import { Palette, PaletteColor } from "@material-ui/core/styles/createPalette";

declare module "@material-ui/core/styles/createPalette" {
  interface WCPalette {
    grey: {
      "100": string;
      "200": string;
      "300": string;
      "400": string;
      "500": string;
      "600": string;
      "700": string;
    };
    green: string;
    blue: string;
    pink: {
      primary: string;
      secondary: string;
    };
    typography: {
      primary: string;
      disabled: string;
      focus: string;
      secondary: string;
    };
  }
}

declare module "@material-ui/core/styles/createTheme" {
  interface ThemeOptions {
    wcPalette: WCPalette;
  }
}
