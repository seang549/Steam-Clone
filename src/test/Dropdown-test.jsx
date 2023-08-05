import {
  render,
  screen,
  fireEvent,
  waitFor,
  getByTestId,
} from "@testing-library/react";
import Dropdown from "../components/Navbar/Dropdown.jsx";
import StoreTabs from "../components/Navbar/StoreTabs.jsx";
import "@testing-library/jest-dom";

describe("dropdown test", () => {
  beforeEach(() => {
    render(
      <Dropdown
        submenus={[
          { title: "test1", url: "#" },
          { title: "test2", url: "#" },
          { title: "test3", url: "#" },
        ]}
        title='dropdown-item'
      >
        <h4>Content</h4>
      </Dropdown>
    );
  });

  test("should show the content at the start", () => {
    expect(screen.getByTestId("Tab")).toBeVisible();
  });

  // test("should not show the content at the start", () => {
  //   let items = screen.queryAllByTestId("item");
  //   expect(items).not.toBeVisible();
  // });
});

describe("store tabs testing", () => {
  beforeEach(() => {
    render(
      <StoreTabs
        items={{
          title: "Test Store",
          url: "#",
          submenu: [
            { title: "test1", url: "#" },
            { title: "test2", url: "#" },
            { title: "test3", url: "#" },
          ],
        }}
        index={0}
      />
    );
  });

  test("should show the activeSubmenu on accordion hover", async () => {
    const menuItemsElem = screen.getByTestId("menuItems");
    const submenuElem = screen.queryAllByTestId("item");

    for (let i = 0; i < submenuElem.length; i++) {
      fireEvent.mouseOver(submenuElem[i]);

      await waitFor(() => {
        expect(menuItemsElem).toBeVisible();
      });
    }
  });
});
