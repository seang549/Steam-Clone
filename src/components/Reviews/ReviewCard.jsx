import AwardList from "./AwardList";
import Recomendations from "./Recomendations";
import Review from "./Review";
import UserInfo from "./UserInfo";
import Helpfull from "./Helpfull";

//import { useEffect, useState } from 'react'
const ReviewCard = ({review}) => {
if(review !== undefined)
{
    let devView = review["developer_response"]
    console.log(devView)

    return (
      <>
        <div className='TopDown'>
          <div className='SideBySide'>
            <div id='user-info-cont'>
              <UserInfo review={review} />
            </div>

        </div>
        </div>
        {devView &&
        <div>
            <h1>A developer has responded on {review["developer_date"]} @ {review["developer_time"]}</h1>

            <h1>VIEW RESPONSE</h1>
          </div>
        </div>
        }
        </div>

        </>

    );
  }
};
export default ReviewCard;
