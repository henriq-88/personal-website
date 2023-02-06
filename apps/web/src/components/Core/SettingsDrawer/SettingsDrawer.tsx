import { XMarkIcon } from "@heroicons/react/24/solid";
import { settingsDrawerOpenState } from "../../../state/states";
import ThemeToggle from "../../../components/ThemeToggle";
import DirectionToggle from "../../../components/DirectionToggle";
import { useAtom } from "jotai";
import clsx from "clsx";

interface SettingsDrawerProps {}

const SettingsDrawer: React.FC<SettingsDrawerProps> = (props) => {
  const [settingsDrawerOpen, setSettingsDrawerOpen] = useAtom(
    settingsDrawerOpenState,
  );

  return (
    <div
      onClick={(e) => setSettingsDrawerOpen(false)}
      className={clsx("fixed inset-0 z-50 h-full w-full", {
        "pointer-events-none": !settingsDrawerOpen,
      })}
    >
      <div
        className={clsx("fixed inset-0 z-50 bg-black transition-all", {
          "bg-opacity-25 backdrop-blur-sm": settingsDrawerOpen,
          "bg-opacity-0 backdrop-blur-none": !settingsDrawerOpen,
        })}
      />
      <div className="inset fixed z-50 flex h-full w-full justify-end shadow-md">
        <div
          className={clsx(
            "h-full w-90 bg-white shadow-lg transition-all dark:bg-neutral-900",
            {
              "ltr:-mr-90 rtl:-ml-90": !settingsDrawerOpen,
              "ltr:mr-0 rtl:ml-0": settingsDrawerOpen,
            },
          )}
          role="presentation"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative flex h-16 items-center px-3">
            <p className="flex-1">Settings</p>
            <button
              className="rounded-full bg-transparent p-2 text-secondary-800 transition-colors hover:bg-secondary-800/20 dark:text-primary-200 hover:dark:bg-primary-200/20"
              aria-label="close"
              onClick={() => setSettingsDrawerOpen(false)}
            >
              <XMarkIcon className="h-6 w-6 text-current" />
            </button>
          </div>
          <hr className="border-1 border-solid border-transparent bg-[#0000001f] dark:bg-[#ffffff1f]" />
          <div className="flex flex-col items-stretch p-3">
            <ThemeToggle />
            <div className="mt-3" />
            <DirectionToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsDrawer;
