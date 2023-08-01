import { useState, useEffect } from "react";

import Carousel from "./Carousel/Carousel.jsx";
import GameInfo from "./GameInfo/GameInfo.jsx";
import WishList from "./WishList.jsx";

const GameArea = () => {
  const [infoData, setInfoData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://steam-clone-zf6a.onrender.com/game_info",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setInfoData(data);
    };
    getData();
  }, []);

  useEffect(() => {}, [infoData]);

  return (
    <div id="GameArea">
      <div id="gameAreaHeader">
        <div id="gameAreaBreadcrumbs">
          <a href="#" className="title-stuff">
            {" "}
            All games
          </a>{" "}
          &gt;
          <a href="#" className="title-stuff">
            {" "}
            Indie Games
          </a>{" "}
          &gt;
          <a href="#" className="title-stuff">
            {" "}
            Spider
          </a>
        </div>
        <div id="lowerGameHeader">
          <div id="gameAreaTitle">Spider</div>
          <div id="communityHubDiv">
            <button className="communityHub community_Hub">
              Community Hub
            </button>
          </div>
        </div>
      </div>

      <div id="container-carousel">
        <div id="carousel-holder-div">
          <Carousel infoData={infoData} />
          <GameInfo infoData={infoData} />
        </div>
      </div>
      <div>
        <WishList />
      </div>
    </div>
  );
};

export default GameArea;
