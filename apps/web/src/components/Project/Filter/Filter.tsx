import { type SortOrder } from "../Page";
import { forwardRef } from "react";
import { CardSkeleton, ToggleChip } from "@wassdahl/ui";
import { useGetAllCategories } from "../../../firebase/api/query/all-categories";
import { useGetAllTags } from "../../../firebase/api/query/all-tags";

interface ProjectFilterProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  sortOrder: SortOrder;
  categoryId: string | undefined;
  tagIds: string[] | undefined;
  onSortOrderChange: (newSortOrder: SortOrder) => void;
  onCategoryIdChange: (newCategoryId: string | undefined) => void;
  onTagIdsChange: (newTagIds: string[] | undefined) => void;
}

export const sortOrders = [
  { label: `Recent`, value: `date`, order: `desc` },
  // { label: `Popularity`, value: `pageViews`, order: `desc` },
  { label: `Name`, value: `name`, order: `asc` },
] as const;

// eslint-disable-next-line react/display-name
const ProjectFilter = forwardRef<HTMLDivElement, ProjectFilterProps>(
  (props, ref) => {
    const {
      sortOrder,
      categoryId,
      tagIds,
      onCategoryIdChange,
      onSortOrderChange,
      onTagIdsChange,
      ...rest
    } = props;

    const { data: categoriesData, isLoading: categoriesIsLoading } =
      useGetAllCategories();
    const { data: tagsData, isLoading: tagsIsLoading } = useGetAllTags();

    return (
      <div ref={ref} {...rest}>
        <div className="mb-4">
          <h3 className="mb-1 text-xs text-violet-900 dark:text-violet-500">
            Sort by
          </h3>
          <div className="flex flex-row flex-wrap gap-2">
            {sortOrders.map((so) => (
              <ToggleChip
                key={so.value}
                isSelected={so.value === sortOrder.value}
                onClick={() => onSortOrderChange(so)}
              >
                {so.label}
              </ToggleChip>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h3 className="mb-1 text-xs text-violet-900 dark:text-violet-500">
            Category
          </h3>
          <div className="flex flex-row flex-wrap gap-2">
            {categoriesIsLoading &&
              [...Array(6).keys()].map((i) => (
                <CardSkeleton
                  key={`category-loading-${i}`}
                  className="h-[34px] w-20 rounded-full"
                />
              ))}
            {categoriesData?.map((c) => (
              <ToggleChip
                key={c.id}
                isSelected={c.id === categoryId}
                onClick={() =>
                  onCategoryIdChange(categoryId !== c.id ? c.id : undefined)
                }
              >
                {c.name}
              </ToggleChip>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-1 text-xs text-violet-900 dark:text-violet-500">
            Tags
          </h3>
          <div className="flex flex-row flex-wrap gap-2">
            {tagsIsLoading &&
              [...Array(10).keys()].map((i) => (
                <CardSkeleton
                  key={`tag-loading-${i}`}
                  className="h-[34px] w-20 rounded-full"
                />
              ))}
            {tagsData?.map((tag) => (
              <ToggleChip
                key={tag.id}
                isSelected={!!tagIds?.find((tId) => tId === tag.id)}
                onClick={() => {
                  const foundTagId = tagIds?.find((tId) => tag.id === tId);
                  if (!foundTagId) {
                    return onTagIdsChange([...(tagIds ?? []), tag.id]);
                  }
                  const filteredTagIds =
                    tagIds?.filter((tId) => tId !== tag.id) ?? [];
                  const updatedTagIds =
                    filteredTagIds.length > 0 ? filteredTagIds : undefined;
                  return onTagIdsChange(updatedTagIds);
                }}
              >
                {tag.name}
              </ToggleChip>
            ))}
          </div>
        </div>
      </div>
    );
  },
);

export default ProjectFilter;
