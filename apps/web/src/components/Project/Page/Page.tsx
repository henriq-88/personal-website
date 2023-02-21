import { CardSkeleton, Container, TextField } from "@wassdahl/ui";
import ProjectCard from "../Card";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDebounce, useWindowSize } from "usehooks-ts";
import { api } from "../../../pages/api";
import clsx from "clsx";
import ProjectFilter, { sortOrders } from "../Filter";
import ToggleShowSectionButton from "../Filter/ToggleShowSectionButton";
import { useRouter } from "next/router";
import { z } from "zod";
import { isNil, omitBy } from "lodash-es";

interface ProjectsPageProps {}

export interface SortOrder {
  label: string;
  value: `date` | `pageViews` | `name`;
  order: `asc` | `desc`;
}

const DEFAULT_SORT_ORDER = sortOrders[0];
const DEFAULT_IS_FILTER_MENU_OPEN = false;

const queryParamSchema = z
  .object({
    sortByValue: z.enum([`date`, `pageViews`, `name`]).optional(),
    sortByOrder: z.enum([`asc`, `desc`]).optional(),
    categoryId: z.string().optional(),
    tagIds: z.union([z.array(z.string()), z.string()]).optional(),
    search: z.string().optional(),
    isFilterMenuOpen: z
      .enum([`true`, `false`])
      .catch(`false`)
      .transform((value) => value === `true`),
  })
  .optional();

type ProjectQueryParam = z.infer<typeof queryParamSchema>;

const ProjectsPage: React.FC<ProjectsPageProps> = (props) => {
  const { width } = useWindowSize();
  const [gridRef] = useAutoAnimate();
  const [filterRef] = useAutoAnimate();
  const router = useRouter();
  const [search, setSearch] = useState(``);

  const debouncedSearch = useDebounce(search, 300);
  const [selectedSortOrder, setSelectedSortOrder] =
    useState<SortOrder>(DEFAULT_SORT_ORDER);

  const [selectedTagsIds, setSelectedTagIds] = useState<string[]>();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>();
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(
    DEFAULT_IS_FILTER_MENU_OPEN,
  );
  const { data: projectsData = [], isLoading: isProjectsLoading } =
    api.project.all.useQuery(
      {
        sortBy: {
          order: selectedSortOrder.order,
          value: selectedSortOrder.value,
        },
        categoryId: selectedCategoryId,
        tagIds: selectedTagsIds,
        search: debouncedSearch,
      },
      {
        keepPreviousData: true,
        enabled: router.isReady,
      },
    );

  const updateQueryParams = (
    params: Partial<ProjectQueryParam & { isFilterMenuOpen: boolean }>,
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.replace({
      query: omitBy(
        {
          ...router.query,
          ...params,
        },
        isNil,
      ),
    });
  };

  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    const search = e.currentTarget.value;
    setSearch(search);
    updateQueryParams({
      search,
    });
  };

  const handleSortOrderChange = (sortOrder: SortOrder) => {
    setSelectedSortOrder(sortOrder);
    updateQueryParams({
      sortByValue: sortOrder.value,
      sortByOrder: sortOrder.order,
    });
  };

  const handleCategoryIdChange = (categoryId: string | undefined) => {
    setSelectedCategoryId(categoryId);
    updateQueryParams({
      categoryId,
    });
  };

  const handleTagIdsChange = (tagIds: string[] | undefined) => {
    setSelectedTagIds(tagIds);
    updateQueryParams({
      tagIds,
    });
  };

  const handleIsFilterMenuOpenChange: React.MouseEventHandler<
    HTMLButtonElement
  > = (e) => {
    const updatedIsFilterMenuOpen = !isFilterMenuOpen;
    setIsFilterMenuOpen(updatedIsFilterMenuOpen);
    updateQueryParams({
      isFilterMenuOpen: updatedIsFilterMenuOpen,
    });
  };

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    const unsafeQueryParams = queryParamSchema.safeParse(router.query);
    if (!unsafeQueryParams.success) {
      return;
    }
    const safeQueryParams = unsafeQueryParams.data;
    setSearch(safeQueryParams?.search ?? ``);
    const parsedSortOrder = sortOrders.find(
      ({ value, order }) =>
        value === safeQueryParams?.sortByValue &&
        order === safeQueryParams?.sortByOrder,
    );
    setSelectedSortOrder(parsedSortOrder ?? DEFAULT_SORT_ORDER);
    setSelectedCategoryId(safeQueryParams?.categoryId);
    const parsedTagIds =
      safeQueryParams?.tagIds === undefined
        ? undefined
        : Array.isArray(safeQueryParams?.tagIds)
        ? safeQueryParams?.tagIds
        : [safeQueryParams?.tagIds];
    setSelectedTagIds(parsedTagIds);
    setIsFilterMenuOpen(
      safeQueryParams?.isFilterMenuOpen ?? DEFAULT_IS_FILTER_MENU_OPEN,
    );
  }, [router.query]);

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
          onChange={handleSearchChange}
        />
        <ToggleShowSectionButton
          className="ml-3 block xl2:hidden"
          isOpen={isFilterMenuOpen}
          onClick={handleIsFilterMenuOpenChange}
        />
      </div>
      <div className="block xl2:hidden" ref={filterRef}>
        {isFilterMenuOpen && (
          <ProjectFilter
            className="pt-6 pb-3"
            sortOrder={selectedSortOrder}
            categoryId={selectedCategoryId}
            tagIds={selectedTagsIds}
            onSortOrderChange={handleSortOrderChange}
            onCategoryIdChange={handleCategoryIdChange}
            onTagIdsChange={handleTagIdsChange}
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
          categoryId={selectedCategoryId}
          tagIds={selectedTagsIds}
          onSortOrderChange={handleSortOrderChange}
          onCategoryIdChange={handleCategoryIdChange}
          onTagIdsChange={handleTagIdsChange}
        />
      </aside>
    </Container>
  );
};

export default ProjectsPage;
