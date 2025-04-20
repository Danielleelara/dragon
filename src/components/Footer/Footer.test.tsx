import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { expect } from "vitest";
import Footer from "./Footer";

describe("Footer component", () => {
  test("renderiza o texto do rodapé", async () => {
    render(<Footer />);

    const footer = screen.getByRole("contentinfo");

    expect(footer).toBeVisible();
    expect(footer).toHaveTextContent("Github - Danielle de Souza");
  });
});
