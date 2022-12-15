import React, { FC } from "react";
import clsx from "clsx";
import { createStyles, makeStyles } from "@material-ui/styles";
import { IconButton, Tooltip, Typography } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import AddIcon from "@material-ui/icons/Add";
import { LandingPageHeaderProps } from "./LandingPageHeader.types";
import { WCTheme } from "../../theme";

export const LandingPageHeader: FC<LandingPageHeaderProps> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.buttonContainer}>
        <Tooltip title="Play">
          <IconButton
            className={clsx(classes.button, classes.playButton)}
            onClick={() => {}}
          >
            <PlayArrowIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="View Queue">
          <IconButton
            className={clsx(classes.button, classes.playlistButton)}
            onClick={() => {}}
          >
            <PlaylistPlayIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add to queue">
          <IconButton
            className={clsx(classes.button, classes.addButton)}
            onClick={() => {}}
          >
            <AddIcon />
          </IconButton>
        </Tooltip>
      </div>
      <Typography variant="h1" className={classes.header}>
        Global<span>TopAlbums</span>
      </Typography>
    </div>
  );
};

const useStyles = makeStyles(
  (theme: WCTheme) =>
    createStyles({
      root: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: "8px",
      },
      buttonContainer: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "auto",
        height: "42px",
        borderRadius: "99px",

        "&:hover::after": {
          content: `""`,
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          borderRadius: "99px",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          pointerEvents: "none",
        },
      },
      playButton: {}, // stubbing out for use in .button
      playlistButton: {}, // stubbing out for use in .button
      addButton: {}, // stubbing out for use in .button
      button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px",
        color: theme.wcPalette.grey["100"],
        cursor: "pointer",

        "&$playButton ": {
          "& svg": {
            borderRadius: "22.5px",
            backgroundColor: theme.wcPalette.grey[200],
            width: "42px",
            height: "42px",
          },
        },

        "&$playlistButton svg": {
          width: "36px",
          height: "36px",
          margin: "0px 8px 0px 16px",
        },

        "&$addButton svg": {
          width: "30px",
          height: "30px",
          marginRight: "8px",
        },
      },
      header: {
        color: theme.wcPalette.grey[100],
        ...theme.typography.h1,

        "& > span": {
          color: theme.wcPalette.green,
        },
      },
    }),
  { classNamePrefix: "LandingPageHeader" }
);
