import TitlePic from "./TitlePic.jsx";
import Summary from "./Summary.jsx";
import GameData from "./GameData.jsx";
import GameTags from "./GameTags.jsx";

const GameInfo = ({ infoData }) => {
  if (!infoData || infoData.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div id='gameInfo'>
      <TitlePic infoData={infoData} />
      <Summary infoData={infoData} />
      <GameData infoData={infoData} />
      <div id='gameTags'>
        <GameTags />
      </div>
    </div>
  );
};

export default GameInfo;
