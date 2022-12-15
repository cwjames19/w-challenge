export type ITunesData = {
  feed: Feed;
};

export interface Feed {
  entry: Album[];
}

export type Image = {
  label: string;
  attributes: {
    height: string;
  };
};

export type Album = {
  category: {
    attributes: {
      label: string;
    };
  };
  id: {
    label: string;
  };
  "im:artist": {
    label: string;
  };
  "im:contentType": Record<string, any>;
  "im:image": Image[];
  "im:itemCount": Record<string, any>;
  "im:name": {
    label: string;
  };
  "im:price": {
    label: string;
  };
  "im:releaseDate": {
    attributes: {
      label: string;
    };
  };
  link: Record<string, any>;
  rights: {
    label: string;
  };
  title: {
    label: string;
  };
};
