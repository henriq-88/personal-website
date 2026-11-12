"use client";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
import { useCallback, useMemo } from "react";
import { useDebounceValue, useWindowSize } from "usehooks-ts";
import ProjectCard from "../Card";
import { type SortOrder } from "../Page";
import {
  selectProjects,
  type Project,
} from "../../../utils/projects";

interface ProjectItemsProps {
  projects: Project[];
  search: string;
  sortValue: SortOrder[`value`];
  sortOrder: SortOrder[`order`];
  categoryId: string | undefined;
  tagIds: string[] | undefined;
}

const ProjectItems: React.FC<ProjectItemsProps> = (props) => {
  const { width: windowWidth } = useWindowSize();
  const [debouncedSearch] = useDebounceValue(props.search, 300);

  const filteredProjects = useMemo(
    () =>
      selectProjects(props.projects, {
        search: debouncedSearch,
        sortBy: props.sortValue,
        order: props.sortOrder,
        categoryId: props.categoryId,
        tagIds: props.tagIds,
      }),
    [
      props.projects,
      debouncedSearch,
      props.sortValue,
      props.sortOrder,
      props.categoryId,
      props.tagIds,
    ],
  );

  const [gridRef] = useAutoAnimate();
  const columnCount = useMemo(() => {
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

  if (filteredProjects.length === 0) {
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
      {filteredProjects.map((project, i, projects) => {
        const borderRadiusClassName = columnCount
          ? getBorderRadiusClassName({
              index: i,
              length: projects.length,
              columnCount,
            })
          : "";

        return (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            name={project.name}
            tags={project.tags}
            category={project.category}
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
