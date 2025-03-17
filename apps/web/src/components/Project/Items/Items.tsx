import { useAutoAnimate } from "@formkit/auto-animate/react";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
import { CardSkeleton } from "@wassdahl/ui";
import clsx from "clsx";
import { useCallback, useMemo } from "react";
import { useDebounceValue, useWindowSize } from "usehooks-ts";
import ProjectCard from "../Card";
import { type SortOrder } from "../Page";
import {
  selectAllProjects,
  useGetAllProjects,
} from "../../../firebase/api/query/all-projects";
import { useGetAllCategories } from "../../../firebase/api/query/all-categories";
import { useGetAllTags } from "../../../firebase/api/query/all-tags";

interface ProjectItemsProps {
  search: string;
  sortValue: SortOrder[`value`];
  sortOrder: SortOrder[`order`];
  categoryId: string | undefined;
  tagIds: string[] | undefined;
  enabled: boolean;
}

const ProjectItems: React.FC<ProjectItemsProps> = (props) => {
  const { width: windowWidth } = useWindowSize();
  const [debouncedSearch] = useDebounceValue(props.search, 300);
  const { data: projectsData = [], isLoading: isProjectsLoading } =
    useGetAllProjects({
      keepPreviousData: true,
      enabled: props.enabled,
      select: selectAllProjects({
        search: debouncedSearch,
        sortBy: props.sortValue,
        order: props.sortOrder,
        categoryId: props.categoryId,
        tagIds: props.tagIds,
      }),
    });

  const { data: categories } = useGetAllCategories();
  const { data: tags } = useGetAllTags();

  const [gridRef] = useAutoAnimate();
  const columnCount = useMemo(() => {
    if (typeof window === undefined) {
      return 1;
    }
    if (!windowWidth) {
      return 1;
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
      {typeof window !== undefined &&
        isProjectsLoading &&
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

        const projectCategory = categories?.find(
          (c) => c.id === project.category,
        );
        const projectTags = project.tags
          .map(
            (tagId) =>
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
              tags?.find((t) => t.id === tagId)!,
          )
          .filter(Boolean);

        return (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            tags={projectTags}
            category={projectCategory}
            backgroundUrl={project.banner}
            logoUrl={project.logo}
            allowForceHover={columnCount === 1}
            className={borderRadiusClassName}
          />
        );
      })}
    </div>
  );
};

export default ProjectItems;
