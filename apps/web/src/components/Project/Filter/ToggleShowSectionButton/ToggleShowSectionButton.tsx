import { ChevronDownIcon, FunnelIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

interface ToggleShowSectionButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isOpen?: boolean;
}

const ToggleShowSectionButton: React.FC<ToggleShowSectionButtonProps> = (
  props,
) => {
  const { className, ...rest } = props;
  return (
    <button
      className={clsx(
        "flex shrink flex-row items-center rounded-xl border border-violet-500 p-3 transition-all hover:border-violet-900 hover:bg-violet-900/10 dark:border-violet-900 hover:dark:border-violet-500 hover:dark:bg-violet-500/10",
        className,
      )}
      {...rest}
    >
      <FunnelIcon className="h-6 w-6 text-violet-900 dark:text-violet-500" />
      <ChevronDownIcon
        className={clsx(
          "h-4 w-4 text-violet-900 transition-transform dark:text-violet-500",
          {
            "rotate-180": props.isOpen,
          },
        )}
      />
    </button>
  );
};

export default ToggleShowSectionButton;
