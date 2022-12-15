import React, { FC } from "react";
import {
  Container,
  createStyles,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import { Link } from "react-router-dom";
import { WCTheme } from "../../theme";
import { NAV_HEIGHT } from "../../constants/styleConstants";
import { wcPalette } from "../../theme/palette";

export const Nav: FC<any> = () => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <Container maxWidth="lg" className={classes.container}>
        <Link to="/">
          <IconButton className={classes.icon}>
            <EqualizerIcon />
          </IconButton>
        </Link>
        <Link to="/favorites" />
      </Container>
    </nav>
  );
};

const useStyles = makeStyles(
  (theme: WCTheme) =>
    createStyles({
      root: {
        position: "fixed",
        zIndex: 1,
        top: 0,
        width: "100%",
        height: `${NAV_HEIGHT}px`,
        background: theme.wcPalette.grey[700],

        color: theme.wcPalette.grey[100],
        ...theme.typography.h2,
      },
      container: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 48px",
      },
      icon: {
        color: wcPalette.grey["100"],
      },
    }),
  { classNamePrefix: "Nav" }
);
