/* eslint-disable */
import React, { FC, useEffect, useRef, useState } from "react";
import {
  createStyles,
  IconButton,
  ListItemIcon,
  makeStyles,
  Menu,
  MenuItem,
} from "@material-ui/core";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import AddIcon from "@material-ui/icons/Add";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { WCTheme } from "../../theme";
import { AlbumCardProps } from "./AlbumCard.types";
import clsx from "clsx";

export const AlbumCard: FC<AlbumCardProps> = (props) => {
  const { album, ranking } = props;
  const classes = useStyles();
  const menuRef = useRef<HTMLButtonElement>(null!);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const imageUrl =
    album["im:image"].find((img) => img.attributes.height === "170")?.label ??
    "";
  const title = album.title.label;

  const openMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className={clsx(classes.root)}>
      <img
        src={imageUrl}
        className={classes.img}
        alt={`Cover artwork of ${title}`}
      />
      <p className={classes.ranking}>{ranking}</p>
      <div className={classes.detailsContainer}>
        <p className={classes.title}>{album["im:name"].label}</p>
        <p className={classes.artist}>{album["im:artist"].label}</p>
      </div>
      <IconButton
        ref={menuRef}
        className={classes.overflowMenuButton}
        size="medium"
        onClick={openMenu}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        anchorEl={menuRef.current}
        open={!!isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      >
        <MenuItem>
          <ListItemIcon>
            <RepeatIcon />
          </ListItemIcon>
          Repeat
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PlaylistPlayIcon />
          </ListItemIcon>
          View queue
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          Add to queue
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          Purchase
        </MenuItem>
      </Menu>
    </div>
  );
};

const useStyles = makeStyles(
  (theme: WCTheme) =>
    createStyles({
      root: {
        minHeight: "84px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: theme.wcPalette.grey["400"],
        paddingRight: "12px",
        marginBottom: "2px",

        "&:hover": {
          backgroundColor: theme.wcPalette.grey["300"],
        },
      },
      img: {
        width: "72px",
        height: "72px",
        flex: "0 0 auto",
      },
      ranking: {
        width: "48px",
        margin: "0px",
        textAlign: "center",
        color: theme.wcPalette.grey[100],
        ...theme.typography.body2,
      },
      detailsContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        minHeight: "60px",
        flex: "1 1 120px",
      },
      title: {
        color: theme.wcPalette.grey[100],
        ...theme.typography.subtitle1,
        margin: "0px",
        paddingBottom: "12px",
      },
      artist: {
        color: theme.wcPalette.blue,
        ...theme.typography.subtitle1,
        margin: "0px",
      },
      overflowMenuButton: {
        color: theme.wcPalette.grey[100],
      },
    }),
  { classNamePrefix: "AlbumCard" }
);
