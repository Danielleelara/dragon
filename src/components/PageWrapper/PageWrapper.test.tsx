import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { expect } from "vitest";
import PageWrapper from "./PageWrapper";
import { BrowserRouter } from "react-router";

describe("PageWrapper component", () => {
  test("renderiza os textos do header, rodapé e dos componentes filhos!", async () => {
    render(
      <BrowserRouter>
        <PageWrapper>
          <h1>Título</h1>
        </PageWrapper>
      </BrowserRouter>
    );

    const header = screen.getByText("Home");
    const footer = screen.getByText("Github - Danielle de Souza");
    const text = screen.getByText("Título");

    expect(header).toBeVisible();
    expect(footer).toBeVisible();
    expect(text).toBeVisible();
  });
});
