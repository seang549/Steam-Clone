import TitlePic from './TitlePic.jsx'
import Summary from './Summary.jsx'
import GameData from './GameData.jsx'
import GameTags from './GameTags.jsx'
const GameInfo = () => {

    return (
        <div id='gameInfo'>
            <h1>GameInfo</h1>
            <TitlePic />
            <Summary />
            <GameData />
            <GameTags />
        </div>
    )
}

export default GameInfo