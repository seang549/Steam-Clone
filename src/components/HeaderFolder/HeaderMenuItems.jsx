import HeaderDropdown from './HeaderDropdown'

const HeaderMenuItems = ({items}) => {
    // console.log(items)


    return (
        <li className="menu-items">
            {
                items.submenu ? (
                    <>
                        <a href={items.url} aria-haspopup="menu">
                            {items.title}{" "}
                        </a>
                        <HeaderDropdown submenus={items.submenu}/>
                    </>
                ) : (
                    <a href={items.url}>{items.title}</a>
                )
            }
        </li>
    )
}

export default HeaderMenuItems