import { settingsDrawerOpenState } from "../../../state/states";
import clsx from "clsx";
import { useAtom } from "jotai";
import { Overlay } from "@wassdahl/ui";
import NavigationMenuList from "../NavigationMenuList";
import NavigationMenuOpenCloseSvg from "../NavigationMenuOpenCloseSvg/NavigationMenuOpenCloseSvg";
import { useWindowSize } from "../../../utils/screen";
import { useMemo } from "react";

interface NavigationMenuProps {}

const NavigationMenu: React.FC<NavigationMenuProps> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useAtom(settingsDrawerOpenState);
  const { width } = useWindowSize();

  const isMobileView = useMemo(() => {
    if (!width) {
      return;
    }
    return width < 640;
  }, [width]);

  if (isMobileView === undefined) {
    return <></>;
  }

  if (isMobileView === false) {
    return <NavigationMenuList orientation="horizontal" />;
  }

  return (
    <>
      <div
        className={clsx(
          "absolute z-20 flex flex-col items-end rounded-xl border border-solid border-violet-500 text-violet-900 backdrop-blur-md transition-all duration-300 ltr:right-3 rtl:left-3 dark:border-violet-900 dark:text-violet-500",
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
            "p-2 transition-all ease-in-out hover:scale-110 hover:bg-violet-900/10 hover:dark:bg-violet-500/10",
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
          <NavigationMenuList
            className="w-full"
            onLinkClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
      <Overlay isVisible={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
    </>
  );
};

export default NavigationMenu;
