/* eslint-disable */
import React, {
  FC,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Collapse,
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
import LoupeIcon from "@material-ui/icons/Loupe";
import clsx from "clsx";
import { WCTheme } from "../../theme";
import { AlbumCardProps } from "./AlbumCard.types";
import { ALBUM_CARD_DEFAULT_HEIGHT } from "../../constants/styleConstants";

export const AlbumCard: FC<AlbumCardProps> = (props) => {
  const { album, ranking } = props;
  const classes = useStyles();
  const menuRef = useRef<HTMLButtonElement>(null!);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const imageUrl =
    album["im:image"].find((img) => img.attributes.height === "170")?.label ??
    "";
  const title = album.title.label;

  const openMenu: React.EventHandler<MouseEvent> = (e) => {
    setIsMenuOpen(true);
    e.stopPropagation();
  };

  const closeMenu: React.EventHandler<MouseEvent> = (e) => {
    setIsMenuOpen(false);
    e.stopPropagation();
  };

  const toggleCollapse: React.EventHandler<MouseEvent> = (e) => {
    setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed);
  };

  return (
    <Collapse
      in={isCollapsed}
      collapsedSize={ALBUM_CARD_DEFAULT_HEIGHT}
      className={classes.collapseContainer}
    >
      <div
        className={classes.clickable}
        onClick={toggleCollapse}
        onKeyDown={(e) => {
          if (e.key.toLowerCase() === "enter") {
            toggleCollapse(e as unknown as React.MouseEvent<HTMLElement>);
          }
        }}
        tabIndex={0}
        role="button"
      >
        <div className={clsx(classes.mainDetailsContainer)}>
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
            onClose={closeMenu}
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
        <div className={classes.extrasContainer}>
          <p>{album.category.attributes.label}</p>
          <p>{album["im:releaseDate"].attributes.label ?? ""}</p>
          <p>{album.rights.label}</p>
        </div>
      </div>
    </Collapse>
  );
};

const useStyles = makeStyles(
  (theme: WCTheme) =>
    createStyles({
      collapseContainer: {
        marginBottom: "2px",
      },
      clickable: {
        cursor: "pointer",
        backgroundColor: theme.wcPalette.grey["400"],

        "&:hover": {
          backgroundColor: theme.wcPalette.grey["300"],
        },
      },
      mainDetailsContainer: {
        minHeight: `${ALBUM_CARD_DEFAULT_HEIGHT}px`,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingRight: "12px",
      },
      extrasContainer: {
        padding: "8px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        flexDirection: "row",

        "& p": {
          display: "inline-block",
          flex: "0 0 50%",
          color: theme.wcPalette.grey[100],
          ...theme.typography.caption,
          textAlign: "start",
          margin: "0px",
        },

        "& > :last-child": {
          flex: "0 0 100%",
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
        minHeight: "48px",
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
