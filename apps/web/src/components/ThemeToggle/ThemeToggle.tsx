import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import SettingsBrightnessIcon from "../../components/Icons/SettingsBrigthness";
import { themeModeState } from "../../state/states";
import { useAtom } from "jotai";
import clsx from "clsx";
import { getSystemTheme, setHTMLThemeMode } from "../../theme/utils";

interface ThemeToggleProps {}

const ThemeToggle: React.FC<ThemeToggleProps> = (props) => {
  const [themeMode, setThemeMode] = useAtom(themeModeState);

  const handleModeChange = (newMode: typeof themeMode) => {
    setHTMLThemeMode(newMode ?? getSystemTheme());
    setThemeMode(newMode);
  };

  return (
    <>
      <span className="text-xs uppercase">Mode</span>
      <div className={"inline-flex rounded-md shadow-sm"} role="group">
        <button
          className={clsx(
            "flex h-12 flex-1 items-center justify-center border border-[#0000001f] px-4 py-2 text-sm font-medium uppercase text-secondary-800 transition-colors hover:bg-[#00000014] ltr:rounded-l-lg rtl:rounded-r-lg rtl:border-t rtl:border-b dark:border-[#ffffff1f] dark:text-primary-200 dark:hover:bg-[#ffffff14]",
            {
              "bg-secondary-800/10 hover:bg-secondary-800/20 dark:bg-primary-200/20 dark:hover:bg-primary-200/30":
                themeMode === "light",
            },
          )}
          aria-label="light"
          onClick={() => handleModeChange(`light`)}
        >
          <SunIcon className="h-6 w-6 text-current ltr:mr-2 rtl:ml-2" />
          <span>Light</span>
        </button>
        <button
          className={clsx(
            "flex h-12 flex-1 items-center justify-center border-t border-b border-[#0000001f] px-4 py-2 text-sm font-medium uppercase text-secondary-800 transition-colors hover:bg-[#00000014] dark:border-[#ffffff1f] dark:text-primary-200 dark:hover:bg-[#ffffff14]",
            {
              "bg-secondary-800/10 hover:bg-secondary-800/20 dark:bg-primary-200/20 dark:hover:bg-primary-200/30":
                themeMode === undefined,
            },
          )}
          aria-label="system"
          onClick={() => handleModeChange(undefined)}
        >
          <SettingsBrightnessIcon className="h-6 w-6 text-current ltr:mr-2 rtl:ml-2" />
          <span>System</span>
        </button>
        <button
          className={clsx(
            "flex h-12 flex-1 items-center justify-center border border-[#0000001f] px-4 py-2 text-sm font-medium uppercase text-secondary-800 transition-colors hover:bg-[#00000014] ltr:rounded-r-lg rtl:rounded-l-lg rtl:border-t rtl:border-b dark:border-[#ffffff1f] dark:text-primary-200 dark:hover:bg-[#ffffff14]",
            {
              "bg-secondary-800/10 hover:bg-secondary-800/20 dark:bg-primary-200/20 dark:hover:bg-primary-200/30":
                themeMode === "dark",
            },
          )}
          aria-label="dark"
          onClick={() => handleModeChange(`dark`)}
        >
          <MoonIcon className="h-6 w-6 text-current ltr:mr-2 rtl:ml-2" />
          <span>Dark</span>
        </button>
      </div>
    </>
  );
};

export default ThemeToggle;
