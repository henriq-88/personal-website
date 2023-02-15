import clsx from "clsx";
import { categories, Category } from "../../api/types/category";

interface CategoryChipProps {
  size?: `small` | `medium`;
  category: Category;
}

const CategoryChip: React.FC<CategoryChipProps> = (props) => {
  const { size = `medium` } = props;
  return (
    <div
      className={clsx(
        "rounded-md bg-violet-900 px-2 py-1 capitalize text-white",
        {
          "": size === `medium`,
          "text-xs": size === `medium`,
        },
      )}
    >
      {categories[props.category]}
    </div>
  );
};

export default CategoryChip;
