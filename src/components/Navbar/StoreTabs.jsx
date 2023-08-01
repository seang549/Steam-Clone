import Dropdown from "./Dropdown";

const StoreTabs = ({ items, index }) => {
  return (
    <div className='menu-items'>
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
