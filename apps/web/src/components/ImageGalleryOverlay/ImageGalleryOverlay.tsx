import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Overlay } from "@wassdahl/ui";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { getVideoSrc } from "../../utils/image";
import { type Media } from "../../firebase/api/query/all-projects";
import { useEffect } from "react";

interface ImageGalleryOverlayProps {
  galleryIndex: number | undefined;
  medias: Media[];
  onNextClick: () => void;
  onPreviousClick: () => void;
  onClose: () => void;
}

const ImageGalleryOverlay: React.FC<ImageGalleryOverlayProps> = (props) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === `Escape`) {
        props.onClose();
      }
      if (e.key === `ArrowRight`) {
        props.onNextClick();
      }
      if (e.key === `ArrowLeft`) {
        props.onPreviousClick();
      }
    };
    window.addEventListener(`keydown`, handleKeyDown);
    return () => {
      window.removeEventListener(`keydown`, handleKeyDown);
    };
  }, [props]);

  const showNavigationControls = props.medias.length > 1;
  const currentMedia =
    props.galleryIndex !== undefined
      ? props.medias[props.galleryIndex]
      : undefined;
  return (
    <Overlay
      isVisible={!!currentMedia}
      className="z-20"
      onClick={() => props.onClose()}
    >
      <AnimatePresence>
        {currentMedia && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.15,
            }}
            className="flex h-full w-full items-center justify-center py-16 md:p-3"
          >
            <div className="relative flex h-full w-full max-w-6xl items-center justify-center">
              {currentMedia.type === `image` && (
                <Image
                  alt="current gallery image"
                  src={currentMedia.url}
                  className="rounded-xl object-contain max-h-full max-w-full bg-black/50"
                  width="640"
                  height="360"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                />
              )}
              {currentMedia.type === `video` && (
                <iframe
                  itemType="text/html"
                  width="640"
                  height="360"
                  src={getVideoSrc(currentMedia)}
                  className="aspect-video w-full h-full max-w-[640px] max-h-[360px] rounded-xl"
                />
              )}
              {showNavigationControls && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-3">
                  <button
                    className="pointer-events-auto rounded-full bg-black/25 p-2 text-white transition-all ease-in-out hover:scale-110 hover:bg-black/50"
                    onClick={(e) => {
                      e.stopPropagation();
                      props.onPreviousClick();
                    }}
                  >
                    <ChevronLeftIcon className="h-6 w-6 sm:h-10 sm:w-10" />
                  </button>
                  <button
                    className="pointer-events-auto rounded-full bg-black/25 p-2 text-white transition-all ease-in-out hover:scale-110 hover:bg-black/50"
                    onClick={(e) => {
                      e.stopPropagation();
                      props.onNextClick();
                    }}
                  >
                    <ChevronRightIcon className="h-6 w-6 sm:h-10 sm:w-10" />
                  </button>
                </div>
              )}
            </div>
            <div>
              <button
                className="absolute top-0 m-3 rounded-full p-2 text-violet-900 transition-all ease-in-out hover:scale-110 hover:bg-violet-900/10 ltr:right-0 rtl:left-0 dark:text-violet-500 hover:dark:bg-violet-500/10"
                onClick={props.onClose}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Overlay>
  );
};

export default ImageGalleryOverlay;
