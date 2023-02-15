import clsx from "clsx";
import { useState } from "react";
import { Media } from "../../api/types/media";
import ImageGalleryItem from "../ImageGalleryItem";
import ImageGalleryOverlay from "../ImageGalleryOverlay";

interface GallaryProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  medias: Media[];
}

const Gallary: React.FC<GallaryProps> = (props) => {
  const { medias, className, ...rest } = props;
  const [gallaryIndex, setGallaryIndex] = useState<number>();

  return (
    <>
      <div
        className={clsx(
          "grid grid-cols-2 gap-3 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6",
          className,
        )}
        {...rest}
      >
        {medias.map((media, i) => (
          <ImageGalleryItem
            src={media.url}
            type={media.type}
            alt={`gallary image ${i + 1}`}
            key={media.url}
            className=""
            onClick={(e) => {
              setGallaryIndex(i);
            }}
          />
        ))}
      </div>
      <ImageGalleryOverlay
        galleryIndex={gallaryIndex}
        medias={medias}
        onClose={() => setGallaryIndex(undefined)}
        onNextClick={() =>
          setGallaryIndex((i) =>
            i !== undefined ? (i + 1) % medias.length : i,
          )
        }
        onPreviousClick={() =>
          setGallaryIndex((i) =>
            i !== undefined ? (i + medias.length - 1) % medias.length : i,
          )
        }
      />
    </>
  );
};

export default Gallary;
