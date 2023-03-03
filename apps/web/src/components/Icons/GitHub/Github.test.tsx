import { render, screen } from "@testing-library/react";
import GitHubIcon from "./GitHub";

describe(``, () => {
  test("loads and displays greeting", () => {
    render(<GitHubIcon />);
    expect(screen.getByTestId("custom-element")).toBeInTheDocument();
  });
});
