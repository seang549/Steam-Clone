const ColumnTwo = () => {
  return (
    <div>
      <div>
        <div style={{ minWidth: "308px" }}>Is this game relevant to you?</div>
        <div>
          Sign in to see reasons why you may or may not like this based on your
          games, friends, and curators you follow.
        </div>
        <button>Sign In</button> or <button>Open in Steam</button>
      </div>

      <div>
        <div style={{ display: "flex" }}>
          <div>
            <img src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_singlePlayer.png" />
          </div>
          Single-player
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <img src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_learning_about_game.png" />
          </div>
          Steam is learning about this game (?)
        </div>
      </div>
      <div>
        <div>Languages:</div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          Interface Full Audio Subtitles
        </div>
        <div>English</div>
        <div>Simplified Chinese</div>
      </div>
    </div>
  );
};

export default ColumnTwo;
