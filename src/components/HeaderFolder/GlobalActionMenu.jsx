import Language from "./Language";
import { Link } from "react-router-dom";
import { useAuthData, useAuthDataUpdate } from '../../AuthContext';

const GlobalActionMenu = () => {
  let authenticated = useAuthData()
  console.log(authenticated)
  const setAuthData = useAuthDataUpdate();

  const handleClick = (e) => {
    setAuthData(false)
  }

  if(!authenticated){
    return (
      <div className="global-action">
        <a
          href="https://store.steampowered.com/about/"
          className="install-button"
        >
          <div className="install-steam" style={{ marginRight: ".7rem" }}>
            Install Steam
          </div>
        </a>
        <Link to="login">
          <a className="login">login</a>
        </Link>
        &nbsp;|&nbsp;&nbsp;
        <Language />
      </div>
    );
  }
  else {
    return (
      <div className="global-action">
        <a
          href="https://store.steampowered.com/about/"
          className="install-button"
        >
          <div className="install-steam" style={{ marginRight: ".7rem" }}>
            Install Steam
          </div>
        </a>
          <a onClick={handleClick} className="login">logout</a>
        &nbsp;|&nbsp;&nbsp;
        <Language />
      </div>
    );
  }
};

export default GlobalActionMenu;
