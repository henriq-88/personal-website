import React from "react";
import ThemeToggle from "../../ThemeToggle";
import { Container } from "packages/ui";
import NavigationMenu from "../NavigationMenu";
import { useWindowScrollPosition } from "rooks";
import clsx from "clsx";

interface AppBarProps {}

const AppBar: React.FC<AppBarProps> = (props) => {
  const { scrollY } = useWindowScrollPosition();

  const isScrollPositionAtTop = scrollY === 0;

  return (
    <header className="h-16 w-full flex-shrink-0">
      <div
        className={clsx("fixed top-0 left-0 z-20 w-full transition-all", {
          "bg-violet-200/90 backdrop-blur-md dark:bg-[#0C0417]/90":
            !isScrollPositionAtTop,
        })}
      >
        <Container className="relative flex justify-between">
          <ThemeToggle />
          <NavigationMenu />
        </Container>
      </div>
    </header>
  );
};

export default AppBar;
