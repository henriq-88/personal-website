import { settingsDrawerOpenState } from "apps/web/src/state/states";
import clsx from "clsx";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useAtom } from "jotai";
import { Overlay } from "packages/ui";
import NavigationMenuList from "../NavigationMenuList";

interface NavigationMenuProps {}

const NavigationMenu: React.FC<NavigationMenuProps> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useAtom(settingsDrawerOpenState);
  return (
    <>
      <div
        className={clsx(
          "pointer-events-auto absolute right-3 z-20 flex flex-col items-end overflow-hidden rounded-xl border border-solid border-violet-500/50 bg-violet-200/70 text-violet-900 backdrop-blur-md transition-all duration-300 dark:border-violet-900/50 dark:bg-[#0C0417]/50 dark:text-violet-500",
          {
            "w-[calc(100%-1.5rem)]": isMenuOpen,
          },
        )}
        style={{
          width: !isMenuOpen ? 42 : undefined,
          height: !isMenuOpen ? 42 : 221,
        }}
      >
        <button
          className={clsx(
            "bg-transparent p-2 transition-all hover:bg-violet-900/10 hover:dark:bg-violet-500/10",
            {
              "rounded-xl": !isMenuOpen,
              "rounded-full": isMenuOpen,
            },
          )}
          aria-label="menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6 text-current" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-current" />
          )}
        </button>
        {isMenuOpen && (
          <NavigationMenuList onLinkClick={() => setIsMenuOpen(false)} />
        )}
      </div>
      <Overlay isVisible={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
    </>
  );
};

export default NavigationMenu;
