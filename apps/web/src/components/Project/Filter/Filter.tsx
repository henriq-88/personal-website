import { api } from "../../../pages/api";
import { SortOrder } from "../Page";
import { Category, Tag } from "@wassdahl/db";
import { forwardRef } from "react";
import { ToggleChip } from "@wassdahl/ui";

interface ProjectFilterProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  sortOrder: SortOrder;
  category: Category | undefined;
  tags: Tag[] | undefined;
  onSortOrderChange: React.Dispatch<React.SetStateAction<SortOrder>>;
  onCategoryChange: React.Dispatch<React.SetStateAction<Category | undefined>>;
  onTagsChange: React.Dispatch<React.SetStateAction<Tag[] | undefined>>;
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
      category,
      tags,
      onCategoryChange,
      onSortOrderChange,
      onTagsChange,
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
                isSelected={c.id === category?.id}
                onClick={() =>
                  onCategoryChange((oldCategory) =>
                    oldCategory?.id !== c.id ? c : undefined,
                  )
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
                isSelected={!!tags?.find((t) => t.id === tag.id)}
                onClick={() =>
                  onTagsChange((tags) =>
                    tags?.find((t) => tag.id === t.id)
                      ? tags.filter((t) => t.id !== tag.id).length > 0
                        ? tags.filter((t) => t.id !== tag.id)
                        : undefined
                      : [...(tags ?? []), tag],
                  )
                }
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
