import axios from "axios";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MoreLikeThis = ({ gameList }) => {
  const [gameTagsTwo, setGameTagsTwo] = useState([]);

  const getTagsTwo = async () => {
    const response = await axios.get(
      "https://steam-clone-zf6a.onrender.com/tags"
    );
    const data = await response.data;
    setGameTagsTwo(data);
  };

  useEffect(() => {
    try {
      getTagsTwo();
    } catch (err) {
      console.error(err);
    }
  }, []);

  const gameTwo = gameTagsTwo.filter((tag) => tag.game_id === 2);
  const gameThree = gameTagsTwo.filter((tag) => tag.game_id === 3);
  const gameFour = gameTagsTwo.filter((tag) => tag.game_id === 4);
  const gameFive = gameTagsTwo.filter((tag) => tag.game_id === 5);

  const renderContent = (game) => {
    if (game.game_title === "Bread & Fred") {
      return gameTwo.map((tag) => (
        <button className='tags-btn' key={tag.tag_id}>
          {tag.tag_title}
        </button>
      ));
    } else if (game.game_title === "Stardew Valley") {
      return gameThree.map((tag) => (
        <button className='tags-btn' key={tag.tag_id}>
          {tag.tag_title}
        </button>
      ));
    } else if (game.game_title === "Terraria") {
      return gameFour.map((tag) => (
        <button className='tags-btn' key={tag.tag_id}>
          {tag.tag_title}
        </button>
      ));
    } else if (game.game_title === "MapleStory") {
      return gameFive.map((tag) => (
        <button className='tags-btn' key={tag.tag_id}>
          {tag.tag_title}
        </button>
      ));
    } else {
      return null;
    }
  };

  return (
    <>
      <div
        className='flex'
        style={{
          width: "616px",
          justifyContent: "space-between",
          marginBottom: "4px",
          color: "#FFF",
        }}
      >
        MORE LIKE THIS <button className='communityHub see_all'>See all</button>
      </div>
      <div className='hr'></div>
      <div className='carousel-games'>
        {gameList.slice(1).map((game, index) => (
          <div
            key={index}
            className='other-game has_tooltip'
            style={{ display: "flex" }}
          >
            <div className='display_game'>
              <img
                src={game.game_img[0]}
                alt='Game Cover'
                style={{ width: "171px" }}
              />
              <p className='display_title'>{game.game_title}</p>
              <p className='display_price'>{game.price}</p>
            </div>
            <span className='tooltip_wrapper tooltip_right'>
              <span className='tooltip '>
                <div className='game-title'>{game.game_title}</div>
                <b className='release-date' style={{ marginBottom: "5px" }}>
                  Released: {game.game_release_date}
                </b>
                <div className='other-games-images'>
                  <Carousel
                    showThumbs={false}
                    showArrows={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000}
                    showStatus={false}
                    renderIndicator={() => null}
                  >
                    {game.game_img.slice(1).map((imgSrc, imgIndex) => (
                      <div key={imgIndex}>
                        <img src={imgSrc} alt={`Game Image ${imgIndex}`} />
                      </div>
                    ))}
                  </Carousel>
                </div>
                <div className='other-games-reviews'>
                  <div className='overall-reviews'>Overall user reviews:</div>
                  <div className='specific-to-game'>
                    <div className='rating'>Overwhelmingly Positive</div>
                    <div className='review-number'>
                      &nbsp;{game.total_reviews}
                    </div>
                  </div>
                  <div className='user-tags'>User tags:</div>
                  <div className='tags'>{renderContent(game)}</div>
                </div>
              </span>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default MoreLikeThis;
