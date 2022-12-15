/* eslint-disable */
import React, { FC } from "react";
import { Grid, useMediaQuery } from "@material-ui/core";
import { WCTheme } from "../../theme";
import { AlbumListItemProps } from "./AlbumListItem.types";
import { AlbumRow } from "../AlbumRow";
import { AlbumCard } from "../AlbumCard";

export const AlbumListItem: FC<AlbumListItemProps> = (props) => {
  const isMdUp = useMediaQuery((theme: WCTheme) => theme.breakpoints.up("md"));

  return isMdUp ? <AlbumRow {...props} /> : <AlbumCard {...props} />;
};
