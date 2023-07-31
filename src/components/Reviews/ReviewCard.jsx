import AwardList from "./AwardList";
import Recomendations from "./Recomendations";
import Review from "./Review";
import UserInfo from "./UserInfo";
import Helpfull from "./Helpfull";

//import { useEffect, useState } from 'react'
const ReviewCard = ({ review }) => {
  return (
    <>
      <div className='review-card-cont'>
        <div className='userinfo-review-cards-cont'>
          <UserInfo review={review} />
        </div>
      </div>

      <div className='right-column'>
        <div className='recommendations-container'>
          <Recomendations review={review} />
        </div>

        <Review review={review} />
        <Helpfull review={review} />
      </div>
    </>
  );
};

export default ReviewCard;
