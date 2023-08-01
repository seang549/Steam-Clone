import React from "react";
import HeaderDropdown from "./HeaderDropdown";

const HeaderMenuItems = ({ items, isFirstLink, index }) => {
  return (
    <li className='menu-items-header'>
      {items.submenu ? (
        <>
          <a
            href={items.url}
            aria-haspopup='menu'
            className={`individual-title ${
              isFirstLink ? "first-link" : "normal-link"
            }`}
          >
            {items.title}
          </a>
          &nbsp;&nbsp;&nbsp;
          <HeaderDropdown submenus={items.submenu} i={index} />
        </>
      ) : (
        <>
          <a
            href={items.url}
            className={`individual-title ${
              isFirstLink ? "first-link" : "normal-link"
            }`}
          >
            {items.title}
          </a>
          &nbsp;&nbsp;&nbsp;
        </>
      )}
    </li>
  );
};

export default HeaderMenuItems;
