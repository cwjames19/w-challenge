/* eslint-disable */
import React, { FC, useEffect, useState } from "react";
import {
  Button,
  createStyles,
  IconButton,
  makeStyles,
  Tooltip,
} from "@material-ui/core";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import AddIcon from "@material-ui/icons/Add";
import { WCTheme } from "../../theme";
import { AlbumRowProps } from "./AlbumRow.types";
import { SourceSansFontFamily } from "../../theme/typography";

export const AlbumRow: FC<AlbumRowProps> = (props) => {
  const { album, ranking } = props;
  const classes = useStyles();
  const imageUrl =
    album["im:image"].find((img) => img.attributes.height === "55")?.label ??
    "";
  const title = album.title.label;

  return (
    <div className={classes.root}>
      <div className={classes.staticElementsContainer}>
        <img
          src={imageUrl}
          className={classes.img}
          alt={`Cover artwork of ${title}`}
        />
        <Tooltip title="Repeat">
          <IconButton className={classes.queueButton}>
            <RepeatIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="View Queue">
          <IconButton className={classes.queueButton}>
            <PlaylistPlayIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add to Queue">
          <IconButton className={classes.queueButton}>
            <AddIcon />
          </IconButton>
        </Tooltip>
        <p className={classes.ranking}>{ranking}</p>
      </div>
      <p className={classes.title}>{album["im:name"].label}</p>
      <p className={classes.artist}>{album["im:artist"].label}</p>
      <p className={classes.genre}>{album.category.attributes.label}</p>
      <p className={classes.released}>
        {album["im:releaseDate"].attributes.label ?? ""}
      </p>
      <Button variant="contained" className={classes.buy}>
        {album["im:price"].label}
      </Button>
    </div>
  );
};

const useStyles = makeStyles(
  (theme: WCTheme) =>
    createStyles({
      root: {
        width: "100%",
        minHeight: "36px",
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: theme.wcPalette.grey["400"],
        marginBottom: "2px",

        "&:hover": {
          backgroundColor: theme.wcPalette.grey["300"],

          "& $queueButton": {
            color: theme.wcPalette.grey[100],

            "& svg": {
              filter: "blur(0.3px)",
            },
          },
        },
      },
      staticElementsContainer: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        flex: "0 0 174px",
      },
      img: {
        width: "36px",
        height: "36px",
        flex: "0 0 auto",
      },
      queueButton: {
        color: theme.wcPalette.grey[200],
        padding: "4px",
        flex: "0 0 auto",
      },
      ranking: {
        width: "36px",
        height: "auto",
        display: "inline-block",
        margin: "0px",
        textAlign: "center",
        color: theme.wcPalette.grey[100],
        ...theme.typography.body2,
        flex: "1 1 auto",
      },
      title: {
        width: "auto",
        color: theme.wcPalette.grey[100],
        textOverflow: "ellipsis",
        ...theme.typography.subtitle1,
        textAlign: "start",
        margin: "0px",
        paddingRight: "12px",
        flex: "6 0 0px",
      },
      artist: {
        width: "auto",
        color: theme.wcPalette.blue,
        textOverflow: "ellipsis",
        ...theme.typography.subtitle1,
        textAlign: "start",
        margin: "0px",
        paddingRight: "12px",
        flex: "5 0 0px",
      },
      genre: {
        width: "auto",
        color: theme.wcPalette.grey[200],
        textOverflow: "ellipsis",
        ...theme.typography.caption,
        textAlign: "start",
        margin: "0px",
        paddingRight: "12px",
        flex: "0 0 100px",
      },
      released: {
        width: "auto",
        color: theme.wcPalette.grey[200],
        textOverflow: "ellipsis",
        ...theme.typography.caption,
        textAlign: "start",
        margin: "0px",
        paddingRight: "12px",
        flex: "0 0 112px",
      },
      buy: {
        color: theme.wcPalette.grey[100],
        backgroundColor: theme.wcPalette.pink.primary,
        padding: "0px",
        fontSize: "10px",
        fontFamily: SourceSansFontFamily,
        flex: "0 0 64px",
        marginRight: "8px",

        "&:hover": {
          backgroundColor: theme.wcPalette.pink.secondary,
        },
      },
    }),
  { classNamePrefix: "AlbumRow" }
);
