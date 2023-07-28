import AwardList from "./AwardList";
import Recomendations from "./Recomendations";
import Review from "./Review";
import UserInfo from "./UserInfo";
import Helpfull from "./Helpfull";

//import { useEffect, useState } from 'react'
const ReviewCard = ({ review }) => {
  if (review !== undefined) {
    return (
      <>
        <div className='TopDown'>
          <div className='SideBySide'>
            <div id='user-info-cont'>
              <UserInfo review={review} />
            </div>
            <div>
              <div className='right-column'>
                <Recomendations review={review} />
                <Review review={review} />
                <Helpfull review={review} />
              </div>
            </div>
          </div>
          <div>
            <h1 id='response-dev'>
              A developer has responded on {review["developer_date"]} @{" "}
              {review["developer_time"]}
            </h1>
            <h1>VIEW RESPONSE</h1>
          </div>
        </div>
      </>
    );
  }
};
export default ReviewCard;
