// eslint-disable-next-line
import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { OutlinedInput } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import SearchIcon from "@material-ui/icons/Search";
import axios, { AxiosResponse } from "axios";
import throttle from "lodash-es/throttle";
import { WCTheme } from "../../theme";
import { LandingPageHeader } from "../../components/LandingPageHeader";
import { AlbumList } from "../../components/AlbumList";
import { Album, ITunesData } from "../../types/types";

export const LandingPage: FC<any> = () => {
  const classes = useStyles();
  const [albums, setAlbums] = useState<Album[] | undefined>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [visibleAlbums, setVisibleAlbums] = useState<Album[] | undefined>();

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

  const updateVisibleAlbums: () => void = useMemo(
    () =>
      /* eslint-disable */
      throttle<() => void>(
        () => {
          const newVisibleAlbums = albums?.filter((a) =>
            RegExp(searchTerm, "i").test(
              `${a["im:name"].label};;${a["im:artist"].label};;${a.category.attributes.label}`
            )
          );
          setVisibleAlbums(newVisibleAlbums);
        },
        200,
        { leading: false, trailing: true }
        /* eslint-disable */
      ),
    [albums, searchTerm]
  );

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setSearchTerm(value);
  };

  useEffect(() => {
    updateVisibleAlbums();
  }, [updateVisibleAlbums, searchTerm, albums]);

  return (
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <LandingPageHeader />
        <OutlinedInput
          value={searchTerm}
          className={classes.input}
          onChange={handleInputChange}
          endAdornment={<SearchIcon className={classes.searchIcon} />}
        />
      </div>
      <div className={classes.divider} />
      <AlbumList albums={visibleAlbums} />
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
      headerContainer: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between",
        alignItems: "center",
      },
      input: {
        margin: "16px",

        "& input": {
          color: theme.wcPalette.grey[100],
        },

        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: `${theme.wcPalette.grey[100]} !important`,
        },
      },
      searchIcon: {
        color: theme.wcPalette.grey[100],
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
