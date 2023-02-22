import clsx from "clsx";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { CheckIcon } from "@heroicons/react/24/solid";

interface ToggleChipProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isSelected: boolean;
}

const ToggleChip: React.FC<ToggleChipProps> = (props) => {
  const { className, isSelected, children, ...rest } = props;
  const [ref] = useAutoAnimate();
  return (
    <button
      ref={ref}
      className={clsx(
        "flex items-center rounded-full border px-3 py-1 transition-all",
        className,
        {
          "border-transparent bg-violet-900 text-white dark:bg-violet-600":
            isSelected,
          "border-violet-500 text-neutral-500 hover:border-violet-900 dark:border-violet-900 hover:dark:border-violet-500":
            !isSelected,
        },
      )}
      {...rest}
    >
      <span>{children}</span>
      {isSelected && <CheckIcon className="ml-1 h-6 w-6" />}
    </button>
  );
};

export default ToggleChip;
