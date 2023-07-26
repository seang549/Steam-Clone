import AwardList from "./AwardList";
import Recomendations from "./Recomendations";
import Review from "./Review";
import UserInfo from "./UserInfo";

//import { useEffect, useState } from 'react'
const ReviewCard = () => {

    return (
        <>
        <div className="TopDown">
        <div className="SideBySide">
        <div>
        <UserInfo/>
        </div>
        <div>
            <div className="TopDown">
        <Recomendations/>
        <Review/>
        <AwardList/>
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
  