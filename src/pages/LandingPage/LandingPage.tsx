import React, { FC, useEffect, useState } from "react";
import { createStyles, makeStyles } from "@material-ui/styles";
import axios, { AxiosResponse } from "axios";
import { WCTheme } from "../../theme";
import { LandingPageHeader } from "../../components/LandingPageHeader";
import { AlbumList } from "../../components/AlbumList";
import { Album, ITunesData } from "../../types/types";

export const LandingPage: FC<any> = () => {
  const classes = useStyles();
  const [albums, setAlbums] = useState<Album[] | undefined>();

  useEffect(() => {
    void axios
      .get("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
      .then((response: AxiosResponse<ITunesData>) => {
        if (response.data?.feed.entry.length) {
          setAlbums(response.data?.feed.entry);
        } else {
          throw new Error();
        }
      })
      // eslint-disable-next-line arrow-body-style
      .catch(() => {
        // swallowing error for now
        return undefined;
      });
  }, []);

  return (
    <div className={classes.root}>
      <LandingPageHeader />
      <div className={classes.divider} />
      <AlbumList albums={albums} />
    </div>
  );
};

const useStyles = makeStyles(
  (theme: WCTheme) =>
    createStyles({
      root: {
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
      },
      divider: {
        width: "100%",
        height: "2px",
        backgroundColor: theme.wcPalette.grey[400],
        marginBottom: "8px",
      },
    }),
  { classNamePrefix: "LandingPage" }
);
