import React from "react";
import ThemeToggle from "../../ThemeToggle";
import { Container } from "@wassdahl/ui";
import NavigationMenu from "../NavigationMenu";
import { useWindowScrollPosition } from "rooks";
import clsx from "clsx";

type AppBarProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

const AppBar: React.FC<AppBarProps> = (props) => {
  const { className, ...rest } = props;
  const { scrollY } = useWindowScrollPosition();

  const isScrollPositionAtTop = scrollY === 0;

  return (
    <header className={clsx("h-16 w-full flex-shrink-0", className)} {...rest}>
      <div
        className={clsx(
          "fixed top-0 left-0 z-20 w-full border-b border-transparent transition-all",
          {
            "border-b border-violet-500/50 bg-violet-200 dark:border-violet-900/50 dark:bg-[#0C0417]":
              !isScrollPositionAtTop,
          },
        )}
      >
        <Container className="relative flex justify-between p-3">
          <ThemeToggle />
          <NavigationMenu />
        </Container>
      </div>
    </header>
  );
};

export default AppBar;
