import { describe, test, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Dropdown from "../src/components/Navbar/Dropdown.jsx";

describe("dropdown test", () => {
  beforeEach(() => {
    render(
      <Dropdown title='activeSubmenu'>
        <h4>Content</h4>
      </Dropdown>
    );
  });

  test("should show the content at the start", () => {
    expect(screen.getByText(/activeSubmenu/i)).toBeDefined();
  });

  test("should not show the content at the start", () => {
    expect(screen.getByText(/Content/i)).toBeUndefined();
  });
});
