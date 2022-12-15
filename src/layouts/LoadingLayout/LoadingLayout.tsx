import React, { FC } from "react";
import { CircularProgress, createStyles, makeStyles } from "@material-ui/core";
import { WCTheme } from "../../theme";
import { LoadingLayoutProps } from "./LoadingLayout.types";

export const LoadingLayout: FC<LoadingLayoutProps> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress size={128} />
    </div>
  );
};

const useStyles = makeStyles(
  (theme: WCTheme) =>
    createStyles({
      root: {
        // some styles
      },
    }),
  { classNamePrefix: "LoadingLayout" }
);
