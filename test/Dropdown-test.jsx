import { describe, test, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "../src/components/Navbar/Dropdown.jsx";

describe("dropdown test", () => {
  beforeEach(() => {
    render(
      <Dropdown title='dropdown-item'>
        <h4>Content</h4>
      </Dropdown>
    );
  });

  test("should show the content at the start", () => {
    expect(screen.getByText(/dropdown-item/i)).toBeInTheDocument();
  });

  test("should not show the content at the start", () => {
    expect(screen.getByText(/Content/i)).not.toBeInTheDocument();
  });

  test("should show the activeSubmenu on accordion hover", async () => {
    const title = screen.getByText(/Content/i);
    fireEvent.click(title);

    expect(await screen.findByText(/Content/i)).toBeInTheDocument();
  });
});
