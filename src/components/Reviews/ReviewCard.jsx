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
        <div className='TopDown'>
          <div className='SideBySide'>
            <div>
              <UserInfo review={review} />
            </div>
            <div>
              <div className='TopDown'>
                <Recomendations review={review} />
                <Review review={review} />
                <Helpfull review={review} />
              </div>
            </div>
          </div>
          <div>
            <h1>
              A developer has responded on {date} @ {time}
            </h1>
            <h1>VIEW RESPONSE</h1>
          </div>
        </div>
      </>
    );
  }
};
export default ReviewCard;
