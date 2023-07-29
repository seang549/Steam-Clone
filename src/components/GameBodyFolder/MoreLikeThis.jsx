import axios from "axios";
import React, {useState, useEffect} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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

  const [gameTagsThree, setGameTagsThree] = useState([]);

  const getTagsThree = async () => {
    const response = await axios.get(
      "https://steam-clone-zf6a.onrender.com/tags"
    );
    const data = await response.data;
    setGameTagsThree(data);
  };

  useEffect(() => {
    try {
      getTagsThree();
    } catch (err) {
      console.error(err);
    }
  }, []);

  const [gameTagsFour, setGameTagsFour] = useState([]);

  const getTagsFour = async () => {
    const response = await axios.get(
      "https://steam-clone-zf6a.onrender.com/tags"
    );
    const data = await response.data;
    setGameTagsFour(data);
  };

  useEffect(() => {
    try {
      getTagsFour();
    } catch (err) {
      console.error(err);
    }
  }, []);

  const [gameTagsFive, setGameTagsFive] = useState([]);

  const getTagsFive = async () => {
    const response = await axios.get(
      "https://steam-clone-zf6a.onrender.com/tags"
    );
    const data = await response.data;
    setGameTagsFive(data);
  };

  useEffect(() => {
    try {
      getTagsFive();
    } catch (err) {
      console.error(err);
    }
  }, []);


  const gameTwo = gameTagsTwo.filter((tag) => tag.game_id === 2);
  const gameThree = gameTagsThree.filter((tag) => tag.game_id === 3);
  const gameFour = gameTagsFour.filter((tag) => tag.game_id === 4)
  const gameFive = gameTagsFive.filter((tag) => tag.game_id === 5)

  const renderContent = (game) => {
    if (game.game_title === "Bread & Fred") {
      return (
        gameTwo.map((tag) => (
          <button className='tags-btn' key={tag.tag_id}>
            {tag.tag_title}
          </button>
        ))
        )
    } else if (game.game_title === "Stardew Valley") {
      return (
        gameThree.map((tag) => (
          <button className='tags-btn' key={tag.tag_id}>
            {tag.tag_title}
          </button>
        ))
        )
    } else if (game.game_title === "Terraria") {
      return (
        gameFour.map((tag) => (
          <button className='tags-btn' key={tag.tag_id}>
            {tag.tag_title}
          </button>
        ))
        )
    }else if (game.game_title === "MapleStory") {
      return (
        gameFive.map((tag) => (
          <button className='tags-btn' key={tag.tag_id}>
            {tag.tag_title}
          </button>
        ))
        )
    } else {
      return null; 
    }
  };

  return (
    <>
      <div>MORE LIKE THIS</div>
      <div className="carousel-games">
        {gameList.slice(1).map((game, index) => (
          <div key={index} className="other-game">
            <img src={game.game_img[0]} alt="Game Cover" />
            {game.game_title}
            {game.price}
            <div className="tooltip tooltip-right">
              <div className="game-title">{game.game_title}</div>
              <div className="release-date">Released: {game.game_release_date}</div>
              <div className="other-games-images">
                <Carousel
                  showThumbs={false}
                  showArrows={false}
                  infiniteLoop={true}
                  autoPlay={true}
                  interval={3000}
                  showStatus={false}
                  renderIndicator={()=> null}
                >
                  {game.game_img.slice(1).map((imgSrc, imgIndex) => (
                    <div key={imgIndex}>
                      <img src={imgSrc} alt={`Game Image ${imgIndex}`} />
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className="other-games-reviews">
                  <div className="overall-reviews">Overall user reviews:</div>
                  <div className="specific-to-game">
                    <div className="rating">Overwhelmingly Positive</div>
                    <div className="review-number">&nbsp;{game.total_reviews}</div>
                  </div>
                  <div className="user-tags">User tags:</div>
                  <div className="tags">
                    {renderContent(game)}
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MoreLikeThis;
