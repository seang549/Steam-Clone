import Dropdown from "./Dropdown";
import { useState } from "react";
const StoreTabs = ({ items }) => {
  return (
    <li className='menu-items' style={{ listStyleType: "none" }}>
      {items.submenu ? (
        <>
          <a href={items.url}>{items.title} </a>
          <Dropdown submenus={items.submenu} />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default StoreTabs;
