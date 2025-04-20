import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom/vitest";
import { expect } from "vitest";
import Header from "./Header";

describe("Header component", () => {
  test("renderiza o texto do header", async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const header = screen.getByRole('banner');

    expect(header).toBeVisible();
    expect(header).toHaveTextContent("Home");
  });
});
