//this is for the drops downs
const Dropdown = ({ submenus }) => {
  return (
    <ul>
      {submenus.map((submenu, index) => (
        <li
          key={index}
          className='menu-items'
          style={{ listStyleType: "none" }}
        >
          <a href={submenu.url}>{submenu.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
