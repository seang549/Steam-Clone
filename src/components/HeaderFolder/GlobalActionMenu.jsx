import Language from './Language'
import {Link} from 'react-router-dom'
import { useAuthData } from '../../AuthContext'
const GlobalActionMenu = () => {
    return (
    <div className="global-action">
        
        <a href="https://store.steampowered.com/about/" className="install-button">
            <div className="install-steam">
                Install Steam
            </div>        
        </a>
        <Link to='login'>
            <a className="login">login</a>
        </Link>
        &nbsp;|&nbsp;&nbsp;
        <Language />
        

    </div> 
    )
}

export default GlobalActionMenu