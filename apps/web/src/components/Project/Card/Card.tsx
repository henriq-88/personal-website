import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useWindowScrollPosition } from "rooks";
import { isTouchDevice } from "../../../utils/screen";
import CategoryChip from "../../CategoryChip/CategoryChip";
import { type Tag } from "../../../firebase/api/query/all-tags";
import { type Category } from "../../../firebase/api/query/all-categories";

interface ProjectCardProps {
  id: string;
  name: string;
  tags: Tag[];
  category: Category | undefined;
  backgroundUrl: string;
  logoUrl: string;
  allowForceHover: boolean;
  website?: string;
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
      href={`/projects/${props.id}`}
      className={clsx(
        "group relative flex h-64 w-full items-center justify-center overflow-hidden transition-transform duration-300 ease-in-out hover:z-10",
        props.className,
      )}
    >
      <Image
        priority
        alt={props.name}
        className={clsx(
          "relative h-full w-full select-none rounded-xl object-cover opacity-50 transition-all duration-300 hover:opacity-100 hover:filter-none group-hover:scale-105 dark:hover:opacity-100",
          {
            "scale-105 opacity-100 filter-none": forceHover,
            "opacity-75 dark:opacity-50": !forceHover,
          },
        )}
        src={props.backgroundUrl}
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
            "bg-gradient-to-b from-black/60 to-black/0 flex flex-row items-center gap-3 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            {
              "opacity-100": forceHover,
            },
          )}
        >
          <Image
            priority
            alt={`${props.name} logo`}
            className="relative size-8 select-none rounded object-cover"
            src={props.logoUrl}
            width={48}
            height={48}
          />
          <div
            className={clsx("text-white")}
            style={{
              borderTopRightRadius: `inherit`,
              borderTopLeftRadius: `inherit`,
            }}
          >
            {props.name}
          </div>
        </div>
        <div
          className={clsx(
            "flex items-end justify-between bg-gradient-to-t from-black/60 to-black/0 p-3 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            {
              "opacity-100": forceHover,
            },
          )}
          style={{
            borderBottomRightRadius: `inherit`,
            borderBottomLeftRadius: `inherit`,
          }}
        >
          <div>{` `}</div>
          {props.category && (
            <CategoryChip category={props.category} size="small" />
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
