import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useAtom } from "jotai";
import { settingsDrawerOpenState } from "../../../state/states";
import clsx from "clsx";
import { useRouter } from "next/router";
import ThemeToggle from "../../ThemeToggle";
import Link from "next/link";
import { Overlay } from "@wassdahl/ui";

interface AppBarProps {}

interface Link {
  href: string;
  label: string;
}

const AppBar: React.FC<AppBarProps> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useAtom(settingsDrawerOpenState);

  const currentPage = useRouter().pathname;

  const links: Link[] = [
    {
      href: `/`,
      label: `Home`,
    },
    {
      href: `/about`,
      label: `About`,
    },
    {
      href: `/projects`,
      label: `Projects`,
    },
    {
      href: `/contact`,
      label: `Contact`,
    },
  ];

  return (
    <header>
      {/* dark:from-[#0C0417] dark:to-[#250E48] */}
      <ThemeToggle className="fixed top-0 left-0 z-10 p-3" />
      <div className="pointer-events-none fixed top-0 right-0 z-10 flex w-full justify-end p-3">
        <div
          className={clsx(
            "pointer-events-auto flex flex-col items-end overflow-hidden rounded-xl border border-solid border-violet-500/50 bg-violet-200/70 text-violet-900 backdrop-blur-md transition-all duration-300 dark:border-violet-900/50 dark:bg-[#0C0417]/90 dark:text-violet-500",
            {
              "w-full": isMenuOpen,
            },
          )}
          style={{
            width: !isMenuOpen ? 42 : undefined,
            height: !isMenuOpen ? 42 : 221,
          }}
        >
          <button
            className={clsx(
              "bg-transparent p-2 transition-all hover:bg-violet-900/10",
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
            <div className="flex w-full flex-col items-center gap-1 p-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-full rounded-md px-2 py-1 text-center text-lg font-semibold text-violet-500 transition-colors hover:text-violet-900 aria-[current]:bg-violet-900/20 aria-[current]:text-violet-900 dark:text-violet-900 hover:dark:text-violet-500 aria-[current]:dark:text-violet-500"
                  aria-current={currentPage === link.href ? true : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* {isMenuOpen && <Overlay onClick={() => setIsMenuOpen(false)} />} */}
    </header>
  );
};

export default AppBar;
