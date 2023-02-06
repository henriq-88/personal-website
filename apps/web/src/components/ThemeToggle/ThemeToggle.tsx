import { SunIcon, MoonIcon, } from "@heroicons/react/24/solid"
import SettingsBrightnessIcon from "../../components/Icons/SettingsBrigthness"
import { useMemo } from 'react';
import { themeModeState } from '../../state/states';
import { useAtom } from 'jotai';
import clsx from "clsx";

interface ThemeToggleProps {
}

const ThemeToggle: React.FC<ThemeToggleProps> = (props) => {
  const [themeMode, setThemeMode] = useAtom(themeModeState);

  const mode = useMemo(() => {
    if (!themeMode) return 'system';
    return themeMode;
  }, [themeMode]);

  const handleModeChange = (newMode: typeof mode) => {
    if (!newMode) return;
    if (newMode === 'system') {
      setThemeMode(undefined);
      return;
    }
    setThemeMode(newMode);
  };

  return (
    <>
      <span className="uppercase text-xs">
        Mode
      </span>
      <div className={"inline-flex rounded-md shadow-sm"} role="group">
        <button
          className={clsx("h-12 flex flex-1 items-center justify-center px-4 py-2 text-sm uppercase font-medium text-secondary-500 dark:text-primary-500 border border-[#0000001f] bg-transparent dark:border-[#ffffff1f] ltr:rounded-l-lg rtl:border-t rtl:border-b rtl:rounded-r-lg", {
            "bg-secondary-500/10 dark:bg-primary-500/20 hover:bg-secondary-500/20 dark:hover:bg-primary-500/30": mode === "light",
            "dark:hover:bg-[#ffffff14] hover:bg-[#00000014]": mode !== "light",
          })}
          aria-label="light"
          onClick={() => handleModeChange(`light`)}
        >
          <SunIcon className="h-6 w-6 text-current ltr:mr-2 rtl:ml-2" />
          <span>Light</span>
        </button>
        <button
          className={clsx("h-12 flex flex-1 items-center justify-center px-4 py-2 text-sm uppercase font-medium text-secondary-500 dark:text-primary-500 border-[#0000001f] bg-transparent dark:border-[#ffffff1f] border-t border-b", {
            "bg-secondary-500/10 dark:bg-primary-500/20 hover:bg-secondary-500/20 dark:hover:bg-primary-500/30": mode === "system",
            "dark:hover:bg-[#ffffff14] hover:bg-[#00000014]": mode !== "system",
          })}
          aria-label="system"
          onClick={() => handleModeChange(`system`)}
        >
          <SettingsBrightnessIcon className="h-6 w-6 text-current ltr:mr-2 rtl:ml-2" />
          <span>System</span>
        </button>
        <button
          className={clsx("h-12 flex flex-1 items-center justify-center px-4 py-2 text-sm uppercase font-medium text-secondary-500 dark:text-primary-500 border border-[#0000001f] bg-transparent dark:border-[#ffffff1f] ltr:rounded-r-lg rtl:border-t rtl:border-b rtl:rounded-l-lg", {
            "bg-secondary-500/10 dark:bg-primary-500/20 hover:bg-secondary-500/20 dark:hover:bg-primary-500/30": mode === "dark",
            "dark:hover:bg-[#ffffff14] hover:bg-[#00000014]": mode !== "dark",
          })}
          aria-label="dark"
          onClick={() => handleModeChange("dark")}
        >
          <MoonIcon className="h-6 w-6 text-current ltr:mr-2 rtl:ml-2" />
          <span>Dark</span>
        </button>
      </div>
    </>
  );
};

export default ThemeToggle;