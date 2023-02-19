import { CardSkeleton, Container, TextField } from "@wassdahl/ui";
import ProjectCard from "../Card";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useCallback, useMemo, useState } from "react";
import { useDebounce, useWindowSize } from "usehooks-ts";
import { api } from "../../../pages/api";
import clsx from "clsx";

interface ProjectsPageProps {}

const ProjectsPage: React.FC<ProjectsPageProps> = (props) => {
  const { width } = useWindowSize();
  const [gridRef] = useAutoAnimate();
  const { data: projectsData, isLoading: isProjectsLoading } =
    api.project.all.useQuery();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  const searchRegExp = new RegExp(debouncedSearch, `i`);

  const filteredProjects =
    projectsData?.filter((project) => {
      return (
        searchRegExp.test(project.name) ||
        searchRegExp.test(project.category.name) ||
        project.tags.some((tag) => searchRegExp.test(tag.name))
      );
    }) ?? [];

  const columnCount = useMemo(() => {
    if (!width) {
      return;
    }
    if (width >= 1024) {
      return 3;
    }
    if (width >= 640) {
      return 2;
    }
    return 1;
  }, [width]);

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

  return (
    <Container className="h-full flex-1 p-3">
      <TextField
        hideErrors
        label="Search"
        value={search}
        placeholder="Search project name, category or tag"
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
      {columnCount !== undefined && (
        <div
          className="mt-3 grid grid-cols-1 gap-0.5 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          ref={gridRef}
        >
          {isProjectsLoading &&
            [...Array(3 * columnCount).keys()].map((key, index, arr) => {
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
      )}
    </Container>
  );
};

export default ProjectsPage;
