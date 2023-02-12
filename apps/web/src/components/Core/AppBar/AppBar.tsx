import React from "react";
import ThemeToggle from "../../ThemeToggle";
import { Container } from "packages/ui";
import NavigationMenu from "../NavigationMenu";

interface AppBarProps {}

const AppBar: React.FC<AppBarProps> = (props) => {
  return (
    <header className="h-16 w-full flex-shrink-0">
      <div className="fixed top-0 left-0 z-20 w-full">
        <Container className="relative flex justify-between">
          <ThemeToggle />
          <NavigationMenu />
        </Container>
      </div>
    </header>
  );
};

export default AppBar;
