import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { Media } from "../../api/types/media";
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
        {medias
          .filter((media) => media.type === `image`)
          .map((image, i) => (
            <Image
              alt={`gallary image ${i + 1}`}
              src={image.url}
              width={144}
              height={144}
              className="mb-3 h-28 w-28 cursor-pointer rounded-xl object-cover transition-transform ease-in-out hover:scale-110 ltr:mr-3 rtl:ml-3 sm:h-36 sm:w-36"
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
