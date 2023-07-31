import ReviewCard from "./ReviewCard.jsx";
import { useReviewData } from "../ReviewContext.jsx";
const ReviewCards = () => {


  if (reviews !== undefined) {
    return reviews.map((review) => {
      let date;
      let time;
      let devView = review["developer_response"];
      if (review !== undefined && review !== null) {
        
        if (devView) {
          date = new Date(review["developer_date"]);
          date = date.toDateString();
          date = date.split(" ");
          date = `${date[1]} ${date[2]}`;
          time = review["developer_time"];
          time = time.split(":");
          time = `${time[0]}:${time[1]}`;
        }
      }


      return (
        <>
          <div className='reviews-area'>
            <div className='jumpToReviews'>
              <ReviewCard review={review} />
            </div>
          </div>
          {devView && <div id='response-container'>
            <div id='left-col'></div>
            <div id='right-col'>
              <h1 id='response-dev'>
                A developer has responded on {date} @ {time}
              </h1>
              <h1 id='view-response'>(view response)</h1>
            </div>
          </div>}
          <div className='hr'></div>
        </>
      );
    });
  }
// };
export default ReviewCards;
