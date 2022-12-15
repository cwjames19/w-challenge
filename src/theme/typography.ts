import { TypographyOptions } from "@material-ui/core/styles/createTypography";

export const SourceSansFontFamily = '"Source Sans", Arial, sans-serif';
export const PTSansFontFamily = '"PT Sans", Arial, sans-serif';
export const OswaldFontFamily = "Oswald";

export const wcTypography: TypographyOptions = {
  fontFamily: SourceSansFontFamily,
  h1: {
    fontFamily: PTSansFontFamily,
    fontSize: "32px",
    fontWeight: 400,
    lineHeight: "32px",
    letterSpacing: "-0.6px",
  },
  h2: {
    fontFamily: PTSansFontFamily,
    fontSize: "13px",
    fontWeight: 700,
    lineHeight: "13px",
    textTransform: "uppercase",
    letterSpacing: "0.039px",
  },
  body1: {
    fontFamily: PTSansFontFamily,
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "16px",
    textTransform: "uppercase",
    letterSpacing: "0.039px",
  },
  body2: {
    fontFamily: OswaldFontFamily,
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "16px",
  },
  subtitle1: {
    fontFamily: SourceSansFontFamily,
    fontSize: "11px",
    fontWeight: 700,
    lineHeight: "14px",
  },
  subtitle2: {
    fontFamily: SourceSansFontFamily,
    fontSize: "11px",
    fontWeight: 400,
    lineHeight: "14px",
  },
};
