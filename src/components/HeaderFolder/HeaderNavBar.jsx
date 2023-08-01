import { menuItems } from "./menuItems";
import HeaderMenuItems from "./HeaderMenuItems";
const HeaderNavBar = () => {
  return (
    <nav>
      <ul style={{ listStyleType: "none" }} className='menus'>
        {menuItems.map((menu, index) => {
          return (
            <HeaderMenuItems
              items={menu}
              key={index}
              index={index}
              isFirstLink={index === 0}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderNavBar;
