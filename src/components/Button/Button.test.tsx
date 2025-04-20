import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";

import { vi, expect } from "vitest";
import Button from "./Button";

describe("Button component", () => {
  test("chama onClick ao ser clicado", async () => {
    const onClick = vi.fn();

    render(<Button onClick={onClick} label="Novo" />);

    const button = screen.getByRole("button");

    expect(button).toBeVisible();
    expect(button).toHaveTextContent("Novo");

    await userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
