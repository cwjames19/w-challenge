import React, { FC } from "react";
import { Container } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import { WCTheme } from "../../theme";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { NAV_HEIGHT } from "../../constants/styleConstants";

export const SiteLayout: FC<any> = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Nav />
      <Container maxWidth="lg" className={classes.main}>
        {children}
      </Container>
      <Footer />
    </div>
  );
};

const useStyles = makeStyles(
  (theme: WCTheme) =>
    createStyles({
      root: {
        position: "relative",
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        background: theme.wcPalette.grey["600"],
      },
      main: {
        position: "relative",
        width: "100%",
        height: "100%",
        flex: `1 1 calc(100vh - ${NAV_HEIGHT}px)`,
        marginTop: `${NAV_HEIGHT}px`,
        padding: "24px 24px",
        background: theme.wcPalette.grey["600"],

        [theme.breakpoints.up("md")]: {
          padding: "32px 48px",
        },
      },
    }),
  { classNamePrefix: "SiteLayout" }
);
