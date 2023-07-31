import ReviewCard from "./ReviewCard.jsx";
import { useReviewData } from "../ReviewContext.jsx";
const ReviewCards = () => {

  const reviewData = useReviewData()

 
  
    return reviewData.map((review) => {

      return (
        <>
          <div className='reviews-area'>
            <div className='jumpToReviews'>
              <ReviewCard review={review} />
            </div>
          </div>
          <div id='response-container'>
            <div id='left-col'></div>
            <div id='right-col'>
              <h1 id='response-dev'>
                A developer has responded on {date} @ {time}
              </h1>
              <h1 id='view-response'>(view response)</h1>
            </div>
          </div>
          <div className='hr'></div>
        </>
      );
    });
  }
// };
export default ReviewCards;
