import { api } from "../../../pages/api";
import { SortOrder } from "../Page";
import { forwardRef } from "react";
import { ToggleChip } from "@wassdahl/ui";

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
  { label: `Popularity`, value: `pageViews`, order: `desc` },
  { label: `Name`, value: `name`, order: `asc` },
] as const;

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

    const { data: categoriesData } = api.category.all.useQuery();
    const { data: tagsData } = api.tag.all.useQuery();

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
            {tagsData?.map((tag) => (
              <ToggleChip
                key={tag.id}
                isSelected={!!tagIds?.find((tId) => tId === tag.id)}
                onClick={() => {
                  const foundTagId = tagIds?.find((tId) => tag.id === tId);
                  if (!foundTagId) {
                    console.log([...(tagIds ?? []), tag.id]);

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
