import TitlePic from './TitlePic.jsx'
import Summary from './Summary.jsx'
import GameData from './GameData.jsx'
import GameTags from './GameTags.jsx'


const GameInfo = ({ infoData }) => {

    if (!infoData || infoData.length === 0) {
        return <div>Loading...</div>;
    }
    return (
        <div id='gameInfo'>
            <h1>GameInfo</h1>
            <TitlePic infoData={infoData} />
            <Summary infoData={infoData} />
            <GameData infoData={infoData} />
            <GameTags />
        </div>
    )
}

export default GameInfo