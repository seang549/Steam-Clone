import GlobalActionMenu from "./GlobalActionMenu.jsx";
import HeaderNavBar from "./HeaderNavBar.jsx";
const Header = () => {
  return (
    <header className='header' >
      <div className='nav-area' style={{display: 'flex'}}>
        <a href='https://store.steampowered.com/?snr=1_5_9__global-header'>
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
