import Award from "./Award";

//import { useEffect, useState } from 'react'
const AwardList = ({awardsList}) => {

    //get award_reviews = awardsList
    //const [review, setReview] = useState([{"review_id":1,"user_name":"Tigerclone","user_product":48,"times_reviewed":10,"date_posted":"2023-06-26T00:00:00.000Z","review_body":"WHY DOESNT THE JUMP BUTTON WORK SOMETIMES!!!!!!! I HAVE SPEND SEVERAL HOURS ON JUST THE FIRST LEVEL!!!!! (i like this game) ","game_id":1},{"review_id":2,"user_name":"gaming4","user_product":599,"times_reviewed":7,"date_posted":"2023-07-03T00:00:00.000Z","review_body":"this game is pain ","game_id":1},{"review_id":3,"user_name":"Chonny Jash","user_product":0,"times_reviewed":2,"date_posted":"2023-07-19T00:00:00.000Z","review_body":"ive been speedrunning this in my freetime and its actually grown on me quite a bit. after playing for 17 hours and beating the game in under 10 minutes i give it a full thumbs up ","game_id":1},{"review_id":4,"user_name":"heyhater","user_product":0,"times_reviewed":2,"date_posted":"2023-06-22T00:00:00.000Z","review_body":"this is the best game I have ever played in my entire life  ","game_id":1},{"review_id":5,"user_name":"MaSH","user_product":251,"times_reviewed":23,"date_posted":"2023-06-13T00:00:00.000Z","review_body":"this is the worst game i have ever played in my entire life  ","game_id":1}])
   
       return (
         <div className='SideBySide'>
           <Award id={award_reviews["award_ids"]}/> {/** sorted by total Points awarded(quantity *value) */}
         </div> 
       );
     };
     
     export default AwardList;
     