
import React, { useState } from 'react';

const HeaderDropdown = ({ submenus }) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveSubmenu(index);
  };

  const handleMouseLeave = () => {
    setActiveSubmenu(null);
  };

  return (
    <ul style={{listStyleType: "none"}} className='dropdown-header'>
      {submenus.map((submenu, index) => (
        <li
          key={index}
          className="dropdown-item-header"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <a href={submenu.url}>{submenu.title}</a>
          {activeSubmenu === index && submenu.dropdownItems && submenu.dropdownItems.length > 0 (
            <ul className="submenu">
              {submenu.dropdownItems.map((item, i) => (
                <li key={i}>
                  <a href={item.url}>{item.title}</a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default HeaderDropdown;