import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useAtom } from "jotai";
import { settingsDrawerOpenState } from "../../../state/states";
import clsx from "clsx";
import { useRouter } from "next/router";
import ThemeToggle from "../../ThemeToggle";
import Link from "next/link";
import { Container, Overlay } from "packages/ui";

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
    <header className="fixed top-0 left-0 z-20 w-full">
      <Container className="relative flex justify-between">
        <ThemeToggle />
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
            <div className="flex w-full flex-col items-center gap-1 p-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-full px-2 py-1 text-center"
                  aria-current={currentPage === link.href ? true : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span
                    className="rounded-md px-2 py-1 text-lg font-semibold text-violet-500 transition-colors hover:text-violet-900 aria-[current]:bg-violet-900/20 aria-[current]:text-violet-900 dark:text-violet-900 hover:dark:text-violet-500 aria-[current]:dark:bg-violet-900/25 aria-[current]:dark:text-violet-500"
                    aria-current={currentPage === link.href ? true : undefined}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
        <Overlay isVisible={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
      </Container>
    </header>
  );
};

export default AppBar;
