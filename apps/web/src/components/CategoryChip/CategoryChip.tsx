import { type Category } from "@wassdahl/db";
import clsx from "clsx";
import { categories } from "../../utils/category";

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
          "text-base": size === `medium`,
          "text-xs": size === `small`,
        },
      )}
    >
      {categories[props.category.name]}
    </div>
  );
};

export default CategoryChip;
