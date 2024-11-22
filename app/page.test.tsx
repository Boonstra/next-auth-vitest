import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("some scope", () => {
  it("should do something", () => {
    render(Home());

    expect(true).toBe(true);

    screen.debug(undefined, Infinity);
  });
});
