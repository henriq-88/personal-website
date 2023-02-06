import { TextDirection, textDirectionState } from "../../state/states";
import { useAtom } from "jotai";
import FormatTextDirectionLToRIcon from "../Icons/FormatTextDirectionLToR";
import FormatTextDirectionRToLIcon from "../Icons/FormatTextDirectionRToL";
import { clsx } from "clsx";

interface DirectionToggleProps {}

const DirectionToggle: React.FC<DirectionToggleProps> = (props) => {
  const [direction, setDirection] = useAtom(textDirectionState);

  const handleDirectionChange = (newDirection: TextDirection) => {
    setDirection(newDirection);
  };

  return (
    <>
      <span className="text-xs uppercase">Direction</span>
      <div className={"inline-flex rounded-md shadow-sm"} role="group">
        <button
          className={clsx(
            "flex h-12 flex-1 items-center justify-center border border-[#0000001f] bg-transparent px-4 py-2 text-sm font-medium uppercase text-secondary-800 transition-colors ltr:rounded-l-lg rtl:rounded-r-lg dark:border-[#ffffff1f] dark:text-primary-200",
            {
              "bg-secondary-800/10 hover:bg-secondary-800/20 dark:bg-primary-200/20 dark:hover:bg-primary-200/30":
                direction === "ltr",
              "hover:bg-[#00000014] dark:hover:bg-[#ffffff14]":
                direction !== "ltr",
            },
          )}
          aria-label="left to right"
          onClick={() => handleDirectionChange("ltr")}
        >
          <FormatTextDirectionLToRIcon className="h-6 w-6 text-current ltr:mr-2 rtl:ml-2" />
          <span>Left to right</span>
        </button>
        <button
          className={clsx(
            "flex h-12 flex-1 items-center justify-center border-t border-b border-[#0000001f] bg-transparent px-4 py-2 text-sm font-medium uppercase text-secondary-800 transition-colors ltr:rounded-r-lg ltr:border-r rtl:rounded-l-lg rtl:border-l dark:border-[#ffffff1f] dark:text-primary-200",
            {
              "bg-secondary-800/20 hover:bg-secondary-800/30 dark:bg-primary-200/20 dark:hover:bg-primary-200/30":
                direction === "rtl",
              "hover:bg-[#00000014] dark:hover:bg-[#ffffff14]":
                direction !== "rtl",
            },
          )}
          aria-label="right to left"
          onClick={() => handleDirectionChange("rtl")}
        >
          <FormatTextDirectionRToLIcon className="h-6 w-6 text-current ltr:mr-2 rtl:ml-2" />
          <span>Right to left</span>
        </button>
      </div>
    </>
  );
};

export default DirectionToggle;
