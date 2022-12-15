import React, { FC } from "react";
import { createStyles, makeStyles } from "@material-ui/core";
import { DetailsPageProps } from "./DetailsPage.types";
import { WCTheme } from "../../theme";

export const DetailsPage: FC<DetailsPageProps> = () => {
  const classes = useStyles();

  return <div className={classes.root} />;
};

const useStyles = makeStyles(
  (theme: WCTheme) =>
    createStyles({
      root: {
        // some styles
      },
    }),
  { classNamePrefix: "DetailsPage" }
);
