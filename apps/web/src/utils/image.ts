import { type MediaType } from "@wassdahl/db";

export const getYouTubeThumbnailFromUrl = (url: string) => {
  const regex = /https:\/\/www\.youtube\.com\/watch\?v=(\w+)/;
  const match = url.match(regex);
  const youtubeId = match?.[1];
  if (!youtubeId) {
    return url;
  }
  return `https://img.youtube.com/vi/${youtubeId}/0.jpg`;
};

export const getYouTubeEmbedFromUrl = (url: string) => {
  const regex = /https:\/\/www\.youtube\.com\/watch\?v=(\w+)/;
  const match = url.match(regex);
  const youtubeId = match?.[1];
  if (!youtubeId) {
    return url;
  }
  return `https://www.youtube.com/embed/${youtubeId}?autoplay=1&origin=${window.location.href}`;
};

export const getThumbSrc = ({
  type,
  url,
}: {
  type: MediaType;
  url: string;
}) => {
  switch (type) {
    case `IMAGE`:
      return url;
    case `VIDEO`: {
      if (url.startsWith(`https://www.youtube.com/watch?v=`)) {
        return getYouTubeThumbnailFromUrl(url);
      }
      return url;
    }
  }
};

export const getVideoSrc = ({
  type,
  url,
}: {
  type: MediaType;
  url: string;
}) => {
  switch (type) {
    case `IMAGE`:
      return url;
    case `VIDEO`: {
      if (url.startsWith(`https://www.youtube.com/watch?v=`)) {
        return getYouTubeEmbedFromUrl(url);
      }
      return url;
    }
  }
};
