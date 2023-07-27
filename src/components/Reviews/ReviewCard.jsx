import AwardList from "./AwardList";
import Recomendations from "./Recomendations";
import Review from "./Review";
import UserInfo from "./UserInfo";

//import { useEffect, useState } from 'react'
const ReviewCard = ({review}) => {

    return (
        <>
        <div className="TopDown">
        <div className="SideBySide">
        <div>
        <UserInfo review={review}/>
        </div>
        <div>
            <div className="TopDown">
        <Recomendations review={review}/>
        <Review review={review}/>
        <AwardList review={review}/>
            </div>
        </div>
        </div>
        <div>
            <h1>DEV RESPONSE</h1>
            <h1>VIEW RESPONSE</h1>
        </div>
        </div>

        </>
    );
  };
  
  export default ReviewCard;
  