import { render, screen } from "@testing-library/react";
import About from "./About";

describe(`About`, () => {
  it(`should render`, () => {
    render(<About />);
    expect(screen.getByAltText(`picture of me`)).toBeInTheDocument();
  });
});
