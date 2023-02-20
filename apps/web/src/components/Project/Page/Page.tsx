import { CardSkeleton, Container, TextField } from "@wassdahl/ui";
import ProjectCard from "../Card";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useCallback, useMemo, useState } from "react";
import { useDebounce, useWindowSize } from "usehooks-ts";
import { api } from "../../../pages/api";
import clsx from "clsx";
import { Category, Tag } from "@wassdahl/db";
import ProjectFilter, { sortOrders } from "../Filter";
import ToggleShowSectionButton from "../Filter/ToggleShowSectionButton";

interface ProjectsPageProps {}

export interface SortOrder {
  label: string;
  value: `date` | `pageViews` | `name`;
  order: `asc` | `desc`;
}

const ProjectsPage: React.FC<ProjectsPageProps> = (props) => {
  const { width } = useWindowSize();
  const [gridRef] = useAutoAnimate();
  const [filterRef] = useAutoAnimate();
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 300);
  const [selectedSortOrder, setSelectedSortOrder] = useState<SortOrder>(
    sortOrders[0],
  );
  const [selectedTags, setSelectedTags] = useState<Tag[]>();
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const { data: projectsData = [], isLoading: isProjectsLoading } =
    api.project.all.useQuery(
      {
        sortBy: selectedSortOrder,
        categoryId: selectedCategory?.id,
        tagIds: selectedTags?.map((tags) => tags.id),
        search: debouncedSearch,
      },
      {
        keepPreviousData: true,
      },
    );

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
    <Container className="relative h-full flex-1 p-3">
      <div className="flex flex-row">
        <TextField
          hideErrors
          label="Search"
          value={search}
          placeholder="Search project name, category or tag"
          className="flex-1"
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
        <ToggleShowSectionButton
          className="ml-3 block xl2:hidden"
          isOpen={isFilterMenuOpen}
          onClick={() => setIsFilterMenuOpen((isOpen) => !isOpen)}
        />
      </div>
      <div className="block xl2:hidden" ref={filterRef}>
        {isFilterMenuOpen && (
          <ProjectFilter
            className="pt-6 pb-3"
            sortOrder={selectedSortOrder}
            category={selectedCategory}
            tags={selectedTags}
            onSortOrderChange={setSelectedSortOrder}
            onCategoryChange={setSelectedCategory}
            onTagsChange={setSelectedTags}
          />
        )}
      </div>
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
        {projectsData?.map((project, i, projects) => {
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
      <aside className="absolute -right-80 top-0 mt-[4.5rem] hidden w-80 px-3 xl2:block">
        <ProjectFilter
          sortOrder={selectedSortOrder}
          category={selectedCategory}
          tags={selectedTags}
          onSortOrderChange={setSelectedSortOrder}
          onCategoryChange={setSelectedCategory}
          onTagsChange={setSelectedTags}
        />
      </aside>
    </Container>
  );
};

export default ProjectsPage;
