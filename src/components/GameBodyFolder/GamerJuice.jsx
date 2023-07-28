import axios from "axios";
import { useEffect, useState } from "react";
import BuyGame from "./BuyGame";
import MoreLikeThis from "./MoreLikeThis";
import ColumnTwo from "./ColumnTwo";

const GameBody = () => {
  const [gameList, setGameList] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://steam-clone-zf6a.onrender.com/game_info"
    );
    const data = await response.data;
    setGameList(data);
  };

  useEffect(() => {
    try {
      getData();
    } catch (err) {
      console.error(err);
    }
  }, []);

  let paraOne;
  let features;
  let paraTwo;
  let abilities;

  let mins;
  let os;
  let store;
  let rec;

  if (gameList[0]) {
    const gameInfo = gameList[0].about_this_game.split("\\");
    const sysReqs = gameList[0].systems_requirements.split("\\");
    paraOne = gameInfo[0];
    features = gameInfo[1];
    paraTwo = gameInfo[2];
    abilities = gameInfo[3];

    mins = sysReqs[0];
    os = sysReqs[1];
    store = sysReqs[2];

    rec = sysReqs[3];
  }

  // console.log(gameList[0].systems_requirements.indexOf("},"));

  return (
    <div className="game_body" style={{ display: "flex" }}>
      {gameList.length > 0 ? (
        <>
          <div>
            <div>
              <BuyGame />
            </div>
            <div>ABOUT THIS GAME</div>
            {paraOne}
            <br />
            {features} <br />
            {paraTwo} <br />
            {abilities}
            <div>SYSTEM REQUIREMENTS</div>
            <div style={{ display: "flex" }}>
              <div>
                {mins} <br />
                {os} <br />
                {store} <br />
              </div>
              <div>
                {rec} <br />
                {store}
              </div>
            </div>
            <MoreLikeThis />
          </div>
          <ColumnTwo />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default GameBody;
