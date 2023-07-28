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
    <div className="game_body">
      {gameList.length > 0 ? (
        <>
          <div id="buy-game-container">
            <div className="buy-section">
              <BuyGame />
            </div>

            <div style={{ color: "#fff" }}>ABOUT THIS GAME</div>
            <div className="hr"></div>
            <div style={{ marginBottom: "3rem" }}>
              {paraOne}
              <br />
              {features} <br />
              {paraTwo} <br />
              {abilities}
            </div>

            <div style={{ color: "#fff" }}>SYSTEM REQUIREMENTS</div>
            <div className="hr"></div>
            <div
              style={{
                display: "flex",
                fontFamily: "Arial, Helvetica, sans-serif",
                marginBottom: "3rem",
              }}
            >
              <div className="sysReq">
                <div>{mins}</div>
                <div style={{ fontSize: "12px" }} data-highlightword="OS:">
                  {os}
                </div>
                <div
                  style={{ fontSize: "12px" }}
                  data-highlightword="Storage: "
                >
                  {store}
                </div>
              </div>
              <div className="sysReq">
                <div>{rec}</div>
                <div
                  style={{ fontSize: "12px" }}
                  data-highlightword="Storage: "
                >
                  {store}
                </div>
              </div>
            </div>
            <MoreLikeThis gameList={gameList}/>
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
