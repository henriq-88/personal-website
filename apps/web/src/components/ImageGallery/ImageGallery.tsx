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
      <div className={clsx("flex flex-row flex-wrap", className)} {...rest}>
        {medias.map((media, i) => (
          <ImageGalleryItem
            src={media.url}
            type={media.type}
            alt={`gallary image ${i + 1}`}
            key={media.url}
            className="mb-3 ltr:mr-3 rtl:ml-3"
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
