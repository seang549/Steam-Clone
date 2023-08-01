import { useState } from "react";

const Dropdown = ({ submenus, i }) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveSubmenu(index);
  };

  const handleMouseLeave = () => {
    setActiveSubmenu(null);
  };

console.log(submenus)

if(i === 2) {
  return (
    <ul className='categories' style={{display: "flex", flex: "column" }} >
      {submenus.map((submenu, index) => (
        <li
          key={index}
          className='dropdown-item'
          style={{ listStyleType: "none"}}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`subtitle-div subtitle${index}`}>
            <a href={submenu.url}>{submenu.subTitle}</a>
          </div>
          <div className={`categories-hr${index}`}></div>
          <div className ={`categories-vr${index}`}></div>
          <div className={`title-div title${index}`}>
            <a href={submenu.url}>{submenu.title}</a>
          </div>
          {activeSubmenu === index && submenu.dropdownItems && submenu.dropdownItems.length > 0 && (
            <ul className='submenu'>
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

}

  return (
    <ul className='dropdown' style={{display: "flex", flex: "column" }} >
      {submenus.map((submenu, index) => (
        <li
          key={index}
          className='dropdown-item-store-and-new'
          style={{ listStyleType: "none"}}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <a href={submenu.url}>{submenu.title}</a>
          {activeSubmenu === index && submenu.dropdownItems && submenu.dropdownItems.length > 0 && (
            <ul className='submenu'>
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

export default Dropdown;