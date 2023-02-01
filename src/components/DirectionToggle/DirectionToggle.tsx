import { Direction, directionState } from "@/state/states";
import { useAtom } from "jotai";
import FormatTextDirectionLToRIcon from "../Icons/FormatTextDirectionLToR";
import FormatTextDirectionRToLIcon from "../Icons/FormatTextDirectionRToL";
import { clsx } from "clsx"

interface DirectionToggleProps {
}

const DirectionToggle: React.FC<DirectionToggleProps> = (props) => {
  const [direction, setDirection] = useAtom(directionState);

  const handleDirectionChange = (newDirection: Direction) => {
    setDirection(newDirection);
  }

  return (
    <>
      <span className="uppercase text-xs">
        Direction
      </span>
      <div className={"inline-flex rounded-md shadow-sm"} role="group">
        <button
          className={clsx("h-12 flex flex-1 items-center justify-center px-4 py-2 text-sm uppercase font-medium text-primary-light dark:text-primary-dark border border-[#0000001f] bg-transparent dark:border-[#ffffff1f] ltr:rounded-l-lg rtl:rounded-r-lg", {
            "bg-primary-light/10 dark:bg-primary-dark/20 hover:bg-primary-light/20 dark:hover:bg-primary-dark/30": direction === "ltr",
            "dark:hover:bg-[#ffffff14] hover:bg-[#00000014]": direction !== "ltr",
          })}
          aria-label="left to right"
          onClick={() => handleDirectionChange("ltr")}
        >
          <FormatTextDirectionLToRIcon className="h-6 w-6 text-current ltr:mr-1 rtl:ml-1" />
          <span>Left to right</span>
        </button>
        <button
          className={clsx("h-12 flex flex-1 items-center justify-center px-4 py-2 text-sm uppercase font-medium text-primary-light dark:text-primary-dark border-[#0000001f] bg-transparent dark:border-[#ffffff1f] rtl:rounded-l-lg ltr:rounded-r-lg ltr:border-r rtl:border-l border-t border-b", {
            "bg-primary-light/20 dark:bg-primary-dark/20 hover:bg-primary-light/30 dark:hover:bg-primary-dark/30": direction === "rtl",
            "hover:bg-[#00000014] dark:hover:bg-[#ffffff14]": direction !== "rtl",
          })}
          aria-label="right to left"
          onClick={() => handleDirectionChange("rtl")}
        >
          <FormatTextDirectionRToLIcon className="h-6 w-6 text-current ltr:mr-1 rtl:ml-1" />
          <span>Right to left</span>
        </button>
      </div>
    </>
  );
};

export default DirectionToggle;
