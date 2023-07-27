import GlobalActionMenu from "./GlobalActionMenu.jsx";
import HeaderNavBar from "./HeaderNavBar.jsx";

const Header = () => {
  return (
    <header className='header-content'>
      <div className='nav-area' style={{ display: "flex" }}>
        <a
          className='float-a-tag'
          href='https://store.steampowered.com/?snr=1_5_9__global-header'
        >
          <img
            className='logo'
            src='https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016'
          ></img>
        </a>
        <HeaderNavBar />
        <GlobalActionMenu />
      </div>
    </header>
  );
};

export default Header;
