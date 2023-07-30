import AwardList from "./AwardList";
import Recomendations from "./Recomendations";
import Review from "./Review";
import UserInfo from "./UserInfo";
import Helpfull from "./Helpfull";

//import { useEffect, useState } from 'react'
const ReviewCard = ({ review }) => {
  let date;
  let time;

  if (review !== undefined && review !== null) {
    let devView = review["developer_response"];
    if (devView) {
      date = new Date(review["developer_date"]);
      date = date.toDateString();
      date = date.split(" ");
      date = `${date[1]} ${date[2]}`;
      time = review["developer_time"];
      time = time.split(":");
      time = `${time[0]}:${time[1]}`;
    }
    return (
      <>
        <div className='review-card-cont'>
          <div className='userinfo-review-cards-cont'>
            <UserInfo review={review} />
          </div>
        </div>
        <div id='recommendations-container'>
          <Recomendations review={review} />
        </div>

        <Review review={review} />
        <Helpfull review={review} />

        <div id='response-container'>
          <h1 id='response-dev'>
            A developer has responded on {date} @ {time}
          </h1>
          <h1 id='view-response'>(view response)</h1>
        </div>
      </>
    );
  }
};
export default ReviewCard;
