import { useState } from "react";
const Dropdown = ({ submenus }) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveSubmenu(index);
  };

  const handleMouseLeave = () => {
    setActiveSubmenu(null);
  };

  return (
    <ul className='dropdown'>
      {submenus.map((submenu, index) => (
        <li
          key={index}
          className='dropdown-item'
          style={{ listStyleType: "none" }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <a href={submenu.url}>{submenu.title}</a>
          {activeSubmenu === index &&
            submenu.dropdownItems &&
            submenu.dropdownItems.length >
              0(
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

//   <ul className='storeTabs' style={{ listStyleType: "none" }}>
//   <h1>{item.subTitle}</h1>
//   {item.submenu ? (
//     <li
//       onMouseEnter={() => handleMouseEnter(sub)}
//       onMouseLeave={() => handleMouseLeave}
//     ></li>
//   ) : (
//     <a href={item.url}>{item.submenu.title}</a>
//   )}
// </ul>
