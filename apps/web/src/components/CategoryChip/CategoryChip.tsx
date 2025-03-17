import clsx from "clsx";
import { type Category } from "../../firebase/api/query/all-categories";

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
      {props.category.name}
    </div>
  );
};

export default CategoryChip;
