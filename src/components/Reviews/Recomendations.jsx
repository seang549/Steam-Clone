//import { useEffect, useState } from 'react'
const Recomendations = ({ review }) => {
  if (review["recommendation"]) {
    return (
      <>
        <div className='SideBySide'>
          <div>
            <img
              id='thumb-pic'
              src='https://store.cloudflare.steamstatic.com/public/shared/images/userreviews/icon_thumbsUp_v6.png'
            ></img>
          </div>

          <div className='TopDown'>
            <div>
              <h2>Recommended</h2>
            </div>
            <div>
              <h3>{review["total_time"]} hrs on record</h3>
              <h3>{` (${review["at_review_time"]} at review time)`}</h3>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    <>
      <div className='SideBySide'>
        <div>
          <h1>
            https://store.cloudflare.steamstatic.com/public/shared/images/userreviews/icon_thumbsDown_v6.png
          </h1>
        </div>
        <div className='TopDown'>
          <div>
            <h2>Not Recommended</h2>
          </div>
          <div>
            <h3>{review["total_time"]}</h3>
            <h3>{review["at_review_time"]}</h3>
          </div>
        </div>
      </div>
    </>;
  }
};

export default Recomendations;
