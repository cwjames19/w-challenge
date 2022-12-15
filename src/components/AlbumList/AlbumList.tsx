import React, { FC } from "react";
import {
  CircularProgress,
  createStyles,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { WCTheme } from "../../theme";
import { AlbumListProps } from "./AlbumList.types";
import { AlbumListItem } from "../AlbumListItem";

export const AlbumList: FC<AlbumListProps> = (props) => {
  const { albums } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {albums ? (
        <div className={classes.gridContainer}>
          {albums.map((album, index) => (
            <AlbumListItem
              album={album}
              ranking={index + 1}
              key={album.id.label}
            />
          ))}
        </div>
      ) : (
        <div className={classes.loaderContainer}>
          <CircularProgress size={128} />
        </div>
      )}
    </div>
  );
};

const useStyles = makeStyles(
  (theme: WCTheme) =>
    createStyles({
      root: {
        flex: "1 1 auto",
        display: "flex",
        flexDirection: "column",
        marginBottom: "72px",
      },
      loaderContainer: {
        flex: "1 1 auto",
        width: "auto",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        "& svg": {
          color: theme.wcPalette.green,
        },
      },
      gridContainer: {
        width: "100%",
      },
    }),
  { classNamePrefix: "AlbumList" }
);
