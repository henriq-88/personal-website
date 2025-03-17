import { Container, TextField } from "@wassdahl/ui";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import React, { useEffect, useState } from "react";
import ProjectFilter, { sortOrders } from "../Filter";
import ToggleShowSectionButton from "../Filter/ToggleShowSectionButton";
import { useRouter } from "next/router";
import { z } from "zod";
import { isNil, omitBy } from "lodash-es";
import dynamic from "next/dynamic";

const ProjectItems = dynamic(() => import(`../Items`), { ssr: false });

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
  const [filterRef] = useAutoAnimate();
  const router = useRouter();
  const [isQueryParamsLoaded, setIsQueryParamsLoaded] = useState(false);
  const [search, setSearch] = useState(``);
  const [selectedSortOrder, setSelectedSortOrder] =
    useState<SortOrder>(DEFAULT_SORT_ORDER);

  const [selectedTagsIds, setSelectedTagIds] = useState<string[]>();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>();
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(
    DEFAULT_IS_FILTER_MENU_OPEN,
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
    setIsQueryParamsLoaded(true);
  }, [router.query]);

  return (
    <Container className="relative flex h-full flex-1 flex-col p-3">
      <div className="flex shrink-0 flex-row">
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
      <div className="block shrink-0 xl2:hidden" ref={filterRef}>
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
      <ProjectItems
        search={search}
        sortValue={selectedSortOrder.value}
        sortOrder={selectedSortOrder.order}
        categoryId={selectedCategoryId}
        tagIds={selectedTagsIds}
        enabled={isQueryParamsLoaded}
      />
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
