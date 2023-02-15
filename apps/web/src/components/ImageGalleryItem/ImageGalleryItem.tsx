import { PlayIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Image from "next/image";
import { Media } from "../../api/types/media";
import { getThumbSrc } from "../../utils/image";

interface ImageGalleryItemProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  alt: string;
  type: Media[`type`];
  src: string;
}

const ImageGalleryItem: React.FC<ImageGalleryItemProps> = (props) => {
  const { className, src, alt, ...rest } = props;

  return (
    <div
      className={clsx(
        "relative cursor-pointer transition-transform ease-in-out hover:scale-110",
        className,
      )}
      {...rest}
    >
      <Image
        alt={alt}
        src={getThumbSrc({ type: props.type, url: src })}
        className="aspect-square h-full w-full rounded-xl object-cover"
        width={144}
        height={144}
      />
      {props.type === `video` && (
        <div className="group pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center">
          <div className="absolute rounded-full bg-black/50 p-3 group-hover:scale-105">
            <PlayIcon className="h-6 w-6 text-white" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGalleryItem;
