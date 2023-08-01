import Dropdown from "./Dropdown";
import { useState } from "react";
const StoreTabs = ({ items, index }) => {


  return (
    <div className={`menu-items menu${index}`}>
      {items.submenu ? (
        <>
          <a href={items.url}>{items.title} </a>
          <Dropdown submenus={items.submenu} i={index} />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </div>
  );
};

export default StoreTabs;
