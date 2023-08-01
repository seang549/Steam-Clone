const ColumnTwo = () => {
  return (
    <div className='flexGap' style={{ flexDirection: "column", gap: "8px" }}>
      <div>
        <div className='relevent_line'>
          <p>Is this game relevant to you?</p>
        </div>
        <div className='sign_in_btn_ctn'>
          <div>
            <p style={{ lineHeight: "20px" }}>
              Sign in to see reasons why you may or may not like this based on
              your games, friends, and curators you follow.
            </p>
          </div>
          <div>
            <button className='communityHub sign_in' style={{ height: "30px" }}>
              Sign In
            </button>{" "}
            or{" "}
            <button
              className='communityHub open_in_steam'
              style={{ height: "30px" }}
            >
              Open in Steam
            </button>
          </div>
        </div>
      </div>

      <div className='cat_ctn clm_two_gradient'>
        <div className='meta_ctn'>
          <div className='cat_icon_ctn'>
            <img
              className='cat_icon'
              src='https://store.akamai.steamstatic.com/public/images/v6/ico/ico_singlePlayer.png'
            />
          </div>
          <div className='meta_txt'>Single-player</div>
        </div>
        <div className='meta_ctn'>
          <div className='cat_icon_ctn'>
            <img
              className='cat_icon'
              src='https://store.akamai.steamstatic.com/public/images/v6/ico/ico_learning_about_game.png'
            />
          </div>
          <div className='learning' style={{ display: "flex", gap: ".5rem" }}>
            Steam is learning about this game{" "}
            <div className='question_mark'>
              <span className='qm_txt'>
                This game is not currently eligible to appear in certain
                showcases on your Steam Profile, and does not contribute to
                global Achievement or game collector counts.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='lang_ctn clm_two_gradient'>
        {" "}
        Languages
        <table className='lang_table'>
          <tr className='lang_titles lang_row'>
            <th></th>
            <th>Interface</th>
            <th>Full Audio</th>
            <th>Subtitles</th>
          </tr>
          <tr className='lang_row'>
            <td className='langs'>English</td>
            <td style={{ color: "#67c1f5" }}>✔</td>
            <td></td>
            <td></td>
          </tr>
          <tr className='lang_row'>
            <td className='langs'>Simplified Chinese</td>
            <td style={{ color: "#67c1f5" }}>✔</td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>

      <div
        className='extra_info_ctn clm_two_gradient'
        style={{ display: "flex", flexDirection: "column", gap: "2px" }}
      >
        <div className='game_info_ctn'>
          <b>TITLE:</b> Spider
          <br />
          <b>GENRE:</b>{" "}
          <span>
            <a className='game_bod_link' href=''>
              Casual
            </a>
            ,{" "}
            <a className='game_bod_link' href=''>
              Indie
            </a>
            ,{" "}
            <a className='game_bod_link' href=''>
              Strategy
            </a>
          </span>
          <br />
          <b>DEVELOPER:</b>{" "}
          <a className='game_bod_link' href=''>
            undownsidable
          </a>
          <br />
          <b>PUBLISHER:</b>{" "}
          <a className='game_bod_link' href=''>
            undownsidable
          </a>
          <br />
          <b>RELEASE DATE:</b> Jun 13, 2023
        </div>
        <a href=''>
          <div className='meta_txt' style={{ height: "25px" }}>
            View Update History
          </div>
        </a>
        <a href=''>
          <div className='meta_txt' style={{ height: "25px" }}>
            Read Related News
          </div>
        </a>
        <a href=''>
          <div className='meta_txt' style={{ height: "25px" }}>
            View Discussions
          </div>
        </a>
        <a href=''>
          <div className='meta_txt' style={{ height: "25px" }}>
            Find Community Groups
          </div>
        </a>
      </div>

      <div
        className='flex clm_two_gradient share_flag_ctn'
        style={{ gap: ".5rem" }}
      >
        <div className='communityHub share' style={{ height: "30px" }}>
          Share
        </div>
        <div className='communityHub embed' style={{ height: "30px" }}>
          Embed
        </div>
        <div className='communityHub flag_ctn' style={{ height: "30px" }}>
          <a href='' className='communityHub'>
            <span>
              <i className='flag'></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ColumnTwo;
