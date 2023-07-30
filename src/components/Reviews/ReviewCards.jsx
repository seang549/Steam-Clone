import ReviewCard from "./ReviewCard.jsx";
import { useReviewData } from "../ReviewContext.jsx";
const ReviewCards = () => {
  const reviewData = useReviewData()

 
  
    return reviewData.map((review) => {
      return (
        <div className='reviews-area'>
          <div id='jumpToReviews'>
            <ReviewCard review={review} />
          </div>
        </div>
      );
    });
  }
// };
export default ReviewCards;
