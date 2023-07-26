import Language from './Language'
const GlobalActionMenu = () => {
    return (
    <div className="global-action">
        
        <a href="https://store.steampowered.com/about/" className="install-button">
            <div className="install-steam">Install Steam</div>        
        </a>

        <a href="https://store.steampowered.com/login/?redir=app%2F2433830%2FSpider%2F&redir_ssl=1&snr=1_5_9__global-header" className="login">login</a>
        <p className="divider">| </p>
        <Language />

    </div> 
    )
}

export default GlobalActionMenu