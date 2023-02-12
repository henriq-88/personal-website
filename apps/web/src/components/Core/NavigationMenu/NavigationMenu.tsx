import { settingsDrawerOpenState } from "apps/web/src/state/states";
import clsx from "clsx";
import { useAtom } from "jotai";
import { Overlay } from "packages/ui";
import NavigationMenuList from "../NavigationMenuList";
import NavigationMenuOpenCloseSvg from "../NavigationMenuButton/NavigationMenuOpenCloseSvg";

interface NavigationMenuProps {}

const NavigationMenu: React.FC<NavigationMenuProps> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useAtom(settingsDrawerOpenState);
  return (
    <>
      <NavigationMenuList orientation="horizontal" className="hidden md:flex" />
      <div className="hidden border border-transparent md:block">
        <div className="h-10 w-10" />
      </div>
      <div
        className={clsx(
          "absolute z-20 flex flex-col items-end overflow-hidden rounded-xl border border-solid border-violet-500/50 text-violet-900 backdrop-blur-md transition-all duration-300 ltr:right-3 rtl:left-3 dark:border-violet-900/50 dark:text-violet-500 md:hidden",
          {
            "w-[calc(100%-1.5rem)] bg-violet-200/70 dark:bg-[#0C0417]/70":
              isMenuOpen,
          },
        )}
        style={{
          width: !isMenuOpen ? 42 : undefined,
          height: !isMenuOpen ? 42 : 221,
        }}
      >
        <button
          className={clsx(
            "p-2 transition-all hover:scale-110 hover:bg-violet-900/10 hover:dark:bg-violet-500/10",
            {
              "rounded-xl": !isMenuOpen,
              "rounded-full": isMenuOpen,
            },
          )}
          aria-label="menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <NavigationMenuOpenCloseSvg isOpen={isMenuOpen} />
        </button>
        {isMenuOpen && (
          <NavigationMenuList onLinkClick={() => setIsMenuOpen(false)} />
        )}
      </div>
      <Overlay
        className="md:hidden"
        isVisible={isMenuOpen}
        onClick={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default NavigationMenu;
