import Dropdown from "./Dropdown";
import { useState } from "react";
const StoreTabs = ({ items }) => {
  return (
    <div className='menu-items'>
      {items.submenu ? (
        <>
          <a href={items.url}>{items.title} </a>
          <Dropdown submenus={items.submenu}  />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </div>
  );
};

export default StoreTabs;
