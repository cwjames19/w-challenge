import { createTheme } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles/createTheme";
import { WCPalette } from "@material-ui/core/styles/createPalette";
import { wcPalette } from "./palette";
import { wcTypography } from "./typography";

export const wcTheme = createTheme({
  typography: wcTypography,
  wcPalette,
});

export interface WCTheme extends Theme {
  wcPalette: WCPalette;
}
