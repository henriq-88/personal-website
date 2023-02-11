import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { themeModeState } from "../../state/states";
import { useAtom } from "jotai";

type ThemeToggleProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const ThemeToggle: React.FC<ThemeToggleProps> = (props) => {
  const [themeMode, setThemeMode] = useAtom(themeModeState);

  const themes = {
    dark: {
      label: `dark mode enabled - enable light mode`,
      Icon: <SunIcon className="h-6 w-6 text-current" />,
      onClick: () => setThemeMode(`light`),
    },
    light: {
      label: `light mode enabled - enable dark mode`,
      Icon: <MoonIcon className="h-6 w-6 text-current" />,
      onClick: () => setThemeMode(`dark`),
    },
  } as const;

  return (
    <div className={"inline-flex rounded-md shadow-sm"} role="group" {...props}>
      <button
        className="rounded-full border border-transparent p-2 text-violet-900 transition-colors hover:bg-violet-900/10 dark:text-violet-500 hover:dark:bg-violet-500/10"
        aria-label={themes[themeMode].label}
        onClick={() => themes[themeMode].onClick()}
      >
        {themes[themeMode].Icon}
      </button>
    </div>
  );
};

export default ThemeToggle;
