
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'




const MoreLikeThis = ({gameList}) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}

  return (
    <>
      <div>MORE LIKE THIS</div>
      <div className="carousel-games">
        <div className="bread-and-fred">
          <img src = {gameList[1].game_img[0]}></img>
          {gameList[1].game_title}
          {gameList[1].price}
          <div className={"tooltip tooltip-right"}>
            <div className="game-title">
              {gameList[1].game_title}
            </div>
            <div className="release-date">
              Released: {gameList[1].game_release_date}
            </div>
            <div className="other-games-images">
              *Carousel of images here*
              <Slider {...settings}>
              <div className='carousel-images'>
                <img src={gameList[1].game_img[1]}></img>
                <img src={gameList[1].game_img[2]}></img>
                <img src={gameList[1].game_img[3]}></img>
                <img src={gameList[1].game_img[4]}></img>
                <img src={gameList[1].game_img[5]}></img>
                <img src={gameList[1].game_img[6]}></img>
                <img src={gameList[1].game_img[7]}></img>
                <img src={gameList[1].game_img[8]}></img>
                <img src={gameList[1].game_img[9]}></img>
              </div>
              </Slider>
            </div>
            <div className="other-games-reviews">
              <div className="overall-reviews">
                Overall user reviews:
              </div>
              <div className="specific-to-game">
                <div className="rating">
                  Very Positive
                </div>
                <div className="review-number">
                  &nbsp;(789 reviews)
                </div>
              </div>
                <div className="user-tags">
                  User tags:
                </div>
                <div className="tags">
                  <div className="tag-one">
                    Co-op
                  </div>
                  <div className="tag-two">
                    Local Co-Op
                  </div>
                  <div className="tag-three">
                    Cute
                  </div>
                  <div className="tag-four">
                    Pixel Graphics
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="stardew-valley">
          <img src = {gameList[2].game_img[0]}></img>
          {gameList[2].game_title}
          {gameList[2].price}
          <div className={"tooltip tooltip-right"}>
            <div className="game-title">
              {gameList[2].game_title}
            </div>
            <div className="release-date">
              Released: {gameList[2].game_release_date}
            </div>
            <div className="other-games-images">
              *Carousel of images here*
              <Slider {...settings}>
              <div className='carousel-images'>
                <img src={gameList[2].game_img[1]}></img>
                <img src={gameList[2].game_img[2]}></img>
                <img src={gameList[2].game_img[3]}></img>
                <img src={gameList[2].game_img[4]}></img>
                <img src={gameList[2].game_img[5]}></img>
                <img src={gameList[2].game_img[6]}></img>
                <img src={gameList[2].game_img[7]}></img>
                <img src={gameList[2].game_img[8]}></img>
                <img src={gameList[2].game_img[9]}></img>
                <img src={gameList[2].game_img[10]}></img>
                <img src={gameList[2].game_img[11]}></img>
                <img src={gameList[2].game_img[12]}></img>
                <img src={gameList[2].game_img[13]}></img>
                <img src={gameList[2].game_img[14]}></img>
                <img src={gameList[2].game_img[15]}></img>
                <img src={gameList[2].game_img[16]}></img>
              </div>
              </Slider>
            </div>
            <div className="other-games-reviews">
              <div className="overall-reviews">
                Overall user reviews:
              </div>
              <div className="specific-to-game">
                <div className="rating">
                  Overwhelmingly Positive
                </div>
                <div className="review-number">
                  &nbsp;(495,486 reviews)
                </div>
              </div>
                <div className="user-tags">
                  User tags:
                </div>
                <div className="tags">
                  <div className="tag-one">
                    Farming Sim
                  </div>
                  <div className="tag-two">
                    Life Sim
                  </div>
                  <div className="tag-three">
                    Pixel Graphics
                  </div>
                  <div className="tag-four">
                    Multiplayer
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="terraria">
          <img src = {gameList[3].game_img[0]}></img>
          {gameList[3].game_title}
          {gameList[3].price}
          <div className={"tooltip tooltip-right"}>
            <div className="game-title">
              {gameList[3].game_title}
            </div>
            <div className="release-date">
              Released: {gameList[3].game_release_date}
            </div>
            <div className="other-games-images">
              *Carousel of images here*
              <Slider {...settings}>
              <div className='carousel-images'>
                <img src={gameList[3].game_img[1]}></img>
                <img src={gameList[3].game_img[2]}></img>
                <img src={gameList[3].game_img[3]}></img>
                <img src={gameList[3].game_img[4]}></img>
                <img src={gameList[3].game_img[5]}></img>
                <img src={gameList[3].game_img[6]}></img>
                <img src={gameList[3].game_img[7]}></img>
                <img src={gameList[3].game_img[8]}></img>
                <img src={gameList[3].game_img[9]}></img>
                <img src={gameList[3].game_img[10]}></img>
                <img src={gameList[3].game_img[11]}></img>
                <img src={gameList[3].game_img[12]}></img>
                <img src={gameList[3].game_img[13]}></img>
                <img src={gameList[3].game_img[14]}></img>
                <img src={gameList[3].game_img[15]}></img>
                <img src={gameList[3].game_img[16]}></img>
                <img src={gameList[3].game_img[17]}></img>
                <img src={gameList[3].game_img[18]}></img>
                <img src={gameList[3].game_img[19]}></img>
              </div>
              </Slider>
            </div>
            <div className="other-games-reviews">
              <div className="overall-reviews">
                Overall user reviews:
              </div>
              <div className="specific-to-game">
                <div className="rating">
                Overwhelmingly Positive
                </div>
                <div className="review-number">
                  &nbsp;(927,900 reviews)
                </div>
              </div>
                <div className="user-tags">
                  User tags:
                </div>
                <div className="tags">
                  <div className="tag-one">
                    Open World Survival Craft
                  </div>
                  <div className="tag-two">
                    Sandbox
                  </div>
                  <div className="tag-three">
                    Survival
                  </div>
                  <div className="tag-four">
                    2D
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="mapleStory">
          <img src = {gameList[4].game_img[0]}></img>
          {gameList[4].game_title}
          {gameList[4].price}
          <div className={"tooltip tooltip-right"}>
            <div className="game-title">
              {gameList[4].game_title}
            </div>
            <div className="release-date">
              Released: {gameList[4].game_release_date}
            </div>
            <div className="other-games-images">
              *Carousel of images here*
              <Slider {...settings}>
              <div className='carousel-images'>
                <img src={gameList[4].game_img[1]}></img>
                <img src={gameList[4].game_img[2]}></img>
                <img src={gameList[4].game_img[3]}></img>
                <img src={gameList[4].game_img[4]}></img>
                <img src={gameList[4].game_img[5]}></img>
                <img src={gameList[4].game_img[6]}></img>
                <img src={gameList[4].game_img[7]}></img>
                <img src={gameList[4].game_img[8]}></img>
                <img src={gameList[4].game_img[9]}></img>
                <img src={gameList[4].game_img[10]}></img>
                <img src={gameList[4].game_img[11]}></img>
                <img src={gameList[4].game_img[12]}></img>
                <img src={gameList[4].game_img[13]}></img>
                <img src={gameList[4].game_img[14]}></img>
              </div>
              </Slider>
            </div>
            <div className="other-games-reviews">
              <div className="overall-reviews">
                Overall user reviews:
              </div>
              <div className="specific-to-game">
                <div className="rating">
                  Mixed
                </div>
                <div className="review-number">
                  &nbsp;(10,780 reviews)
                </div>
              </div>
                <div className="user-tags">
                  User tags:
                </div>
                <div className="tags">
                  <div className="tag-one">
                    MMORPG
                  </div>
                  <div className="tag-two">
                    Loot
                  </div>
                  <div className="tag-three">
                    Character Customization
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
)};

export default MoreLikeThis;
