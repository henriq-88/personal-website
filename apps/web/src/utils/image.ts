import { Media } from "../api/types/media";

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

export const getThumbSrc = (media: Media) => {
  switch (media.type) {
    case `image`:
      return media.url;
    case `video`: {
      if (media.url.startsWith(`https://www.youtube.com/watch?v=`)) {
        return getYouTubeThumbnailFromUrl(media.url);
      }
      return media.url;
    }
  }
};

export const getVideoSrc = (media: Media) => {
  switch (media.type) {
    case `image`:
      return media.url;
    case `video`: {
      if (media.url.startsWith(`https://www.youtube.com/watch?v=`)) {
        return getYouTubeEmbedFromUrl(media.url);
      }
      return media.url;
    }
  }
};
