import GlobalActionMenu from './GlobalActionMenu.jsx'
import HeaderNavBar from './HeaderNavBar.jsx'
const Header = () => {
    return(
        <header className="header">
            <div className ="nav-area">
                <a href="/" className="logo">
                    Logo
                </a>
                <HeaderNavBar />
                <GlobalActionMenu />
            </div>
        </header>
    )
}

export default Header