const ColumnTwo = () => {
  return (
    <div className="flexGap" style={{ flexDirection: "column", gap: "1rem" }}>
      <div>
        <div style={{ minWidth: "308px" }}>Is this game relevant to you?</div>
        <div>
          Sign in to see reasons why you may or may not like this based on your
          games, friends, and curators you follow.
        </div>
        <button className="communityHub" style={{ height: "30px" }}>
          Sign In
        </button>{" "}
        or{" "}
        <button className="communityHub" style={{ height: "30px" }}>
          Open in Steam
        </button>
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

      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        <div className="flexGap">
          TITLE: <div>Spider</div>
        </div>
        <div className="flexGap">
          GENRE: <div>Casual, Indie, Strategy</div>
        </div>
        <div className="flexGap">
          DEVELOPER: <div>undownsidable</div>
        </div>
        <div className="flexGap">
          PUBLISHER: <div>undownsidable</div>
        </div>
        <div className="flexGap">
          RELEASE DATE: <div>Jun 13, 2023</div>
        </div>
        <div>View update history</div>
        <div>Read related news</div>
        <div>View discussions</div>
        <div>Find Community Groups</div>
      </div>

      <div className="flex" style={{ gap: ".5rem" }}>
        <div>Share</div>
        <div>Embed</div>
        <div>
          <img className="flag" />
        </div>
      </div>
    </div>
  );
};

export default ColumnTwo;
