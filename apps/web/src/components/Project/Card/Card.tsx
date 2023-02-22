import { Category, Tag } from "@wassdahl/db";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useWindowScrollPosition } from "rooks";
import { isTouchDevice } from "../../../utils/screen";
import CategoryChip from "../../CategoryChip/CategoryChip";

interface ProjectCardProps {
  id: string;
  name: string;
  slug: string;
  tags: Tag[];
  category: Category;
  imageUrl: string;
  allowForceHover: boolean;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [forceHover, setForceHover] = useState(false);
  const position = useWindowScrollPosition();

  useEffect(() => {
    if (!isTouchDevice() || !props.allowForceHover) {
      setForceHover(false);
      return;
    }
    const screenHeightCenter = window.outerHeight / 2;
    const scrolledScreenHeightCenter =
      screenHeightCenter + position.scrollY / screen.pixelDepth;
    const top = ref.current?.getBoundingClientRect().top ?? 0;
    const bottom = ref.current?.getBoundingClientRect().bottom ?? 0;
    const isIntersectCard =
      top <= scrolledScreenHeightCenter && bottom >= scrolledScreenHeightCenter;
    setForceHover(isIntersectCard);
  });

  return (
    <Link
      ref={ref}
      href={`/projects/${props.slug}`}
      className={clsx(
        "group relative flex h-64 w-full items-center justify-center overflow-hidden transition-transform duration-300 ease-in-out hover:z-10",
        props.className,
        {
          "z-10 scale-105": forceHover,
        },
      )}
    >
      <Image
        priority
        alt={props.name}
        className={clsx(
          "relative h-full w-full select-none rounded-xl object-cover grayscale transition-all duration-300 hover:opacity-100 hover:filter-none group-hover:scale-105 dark:hover:opacity-100",
          {
            "opacity-100 filter-none": forceHover,
            "opacity-75 dark:opacity-50": !forceHover,
          },
        )}
        src={props.imageUrl}
        width={400}
        height={400}
        style={{
          borderRadius: `inherit`,
        }}
      />
      <div
        className="pointer-events-none absolute flex h-full w-full flex-col justify-between"
        style={{
          borderRadius: `inherit`,
        }}
      >
        <div
          className={clsx(
            "bg-gradient-to-b from-black/80 to-black/0 p-3 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            {
              "opacity-100": forceHover,
            },
          )}
          style={{
            borderTopRightRadius: `inherit`,
            borderTopLeftRadius: `inherit`,
          }}
        >
          {props.name}
        </div>
        <div
          className={clsx(
            "flex items-end justify-between bg-gradient-to-t from-black/80 to-black/0 p-3 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            {
              "opacity-100": forceHover,
            },
          )}
          style={{
            borderBottomRightRadius: `inherit`,
            borderBottomLeftRadius: `inherit`,
          }}
        >
          <div>{` ` ?? props.tags}</div>
          <CategoryChip category={props.category} size="small" />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
