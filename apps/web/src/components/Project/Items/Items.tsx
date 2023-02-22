import { useAutoAnimate } from "@formkit/auto-animate/react";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
import { CardSkeleton } from "@wassdahl/ui";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import { useDebounce, useWindowSize } from "usehooks-ts";
import { api } from "../../../pages/api";
import ProjectCard from "../Card";
import { SortOrder } from "../Page";

interface ProjectItemsProps {
  search: string;
  sortValue: SortOrder[`value`];
  sortOrder: SortOrder[`order`];
  categoryId: string | undefined;
  tagIds: string[] | undefined;
}

const ProjectItems: React.FC<ProjectItemsProps> = (props) => {
  const { width: windowWidth } = useWindowSize();
  const debouncedSearch = useDebounce(props.search, 300);
  const router = useRouter();
  const { data: projectsData = [], isLoading: isProjectsLoading } =
    api.project.all.useQuery(
      {
        sortBy: {
          order: props.sortOrder,
          value: props.sortValue,
        },
        categoryId: props.categoryId,
        tagIds: props.tagIds,
        search: debouncedSearch,
      },
      {
        keepPreviousData: true,
        enabled: router.isReady,
      },
    );
  const [gridRef] = useAutoAnimate();
  const columnCount = useMemo(() => {
    if (!windowWidth) {
      return;
    }
    if (windowWidth >= 1024) {
      return 3;
    }
    if (windowWidth >= 640) {
      return 2;
    }
    return 1;
  }, [windowWidth]);
  const getBorderRadiusClassName = useCallback(
    ({
      index,
      length,
      columnCount,
    }: {
      index: number;
      length: number;
      columnCount: number;
    }) => {
      return [
        ...new Set([
          // top left
          ...(index === 0 ? [`rounded-tl-xl`] : []),
          // top right
          ...(index % columnCount === columnCount - 1 && index < columnCount
            ? [`rounded-tr-xl`]
            : []),
          // top right, single row
          ...(index % columnCount === length - 1 && index < columnCount
            ? [`rounded-tr-xl`]
            : []),
          // bottom left
          ...(index % columnCount === 0 && length - columnCount <= index
            ? [`rounded-bl-xl`]
            : []),
          // bottom right, second last row
          ...(index % columnCount === columnCount - 1 &&
          length - columnCount <= index
            ? [`rounded-br-xl`]
            : []),
          // bottom right, last row
          ...(index === length - 1 ? [`rounded-br-xl`] : []),
        ]),
      ].join(` `);
    },
    [],
  );

  if (!isProjectsLoading && projectsData.length === 0) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-3 p-3">
        <FaceFrownIcon className="h-24 w-24 text-black/30 dark:text-white/50" />
        <div className="w-full text-center text-black/50 dark:text-white/50">
          Doh! No projects match with the search criteria.
        </div>
      </div>
    );
  }

  return (
    <div
      className="mt-3 grid grid-cols-1 gap-0.5 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      ref={gridRef}
    >
      {isProjectsLoading &&
        [...Array(3 * (columnCount ?? 0)).keys()].map((key, index, arr) => {
          const borderRadiusClassName = columnCount
            ? getBorderRadiusClassName({
                index,
                length: arr.length,
                columnCount,
              })
            : "";
          return (
            <CardSkeleton
              key={`loading-${key}`}
              className={clsx("h-64 w-full", borderRadiusClassName)}
            />
          );
        })}
      {projectsData.map((project, i, projects) => {
        const borderRadiusClassName = columnCount
          ? getBorderRadiusClassName({
              index: i,
              length: projects.length,
              columnCount,
            })
          : "";

        return (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            slug={project.slug}
            tags={project.tags}
            category={project.category}
            imageUrl={project.banner}
            allowForceHover={columnCount === 1}
            className={borderRadiusClassName}
          />
        );
      })}
    </div>
  );
};

export default ProjectItems;
