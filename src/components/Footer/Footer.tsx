import React, { FC } from "react";
import { Container, createStyles, makeStyles } from "@material-ui/core";

import { WCTheme } from "../../theme";
import { SourceSansFontFamily } from "../../theme/typography";

export const Footer: FC<any> = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container maxWidth="lg" className={classes.container}>
        <p className={classes.p}>Created by Cameron James</p>
      </Container>
    </footer>
  );
};

const useStyles = makeStyles(
  (theme: WCTheme) =>
    createStyles({
      root: {
        width: "100%",
        height: "64px",
        background: theme.wcPalette.grey[400],

        color: theme.wcPalette.grey[100],
        ...theme.typography.h2,
      },
      container: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px 48px",
      },
      p: {
        // some styles
      },
    }),
  { classNamePrefix: "Footer" }
);
