import Dropdown from "./Dropdown";

const StoreTabs = ({ item }) => {
  return (
    <li className='menuItems' style={{ listStyleType: "none" }}>
      {item.submenu ? (
        <>
          <button type='button' aria-haspopup='menu'>
            {item.title}{" "}
          </button>
          <Dropdown submenus={item.submenu} />
        </>
      ) : (
        <a href={item.url}>{item.title}</a>
      )}
    </li>
  );
};

export default StoreTabs;
