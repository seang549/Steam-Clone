import Language from "./Language";
import { Link } from "react-router-dom";

const GlobalActionMenu = () => {
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
};

export default GlobalActionMenu;
