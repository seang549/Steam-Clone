
import AllReviewsChart from "./AllReviewsChart.jsx";

const AllReviews = ({
  setMinDate,
  setMaxDate,
  permData,
  setPermData,
  expanded,
  data,
}) => {
  const reviewSumm = "ChangeMe";
  const tooltipText = "ChangeMe";
  const reviewNumText = "changeMe";

  let expandingClass;

  expanded
    ? (expandingClass = "review_histogram_rollup")
    : (expandingClass = "");

  return (
    <>
      <div className="user_reviews_summary_bar" style={{ width: "605px" }}>
        <div className="summary_section">
          <div className="title">Overall Reviews:</div>
          <span
            id="game_review_summary"
            className={reviewSumm}
            data-tooltip-html={tooltipText}
          >
            {reviewSumm}
          </span>
          <span className="reviewNum">{reviewNumText}</span>
          <a
            className="tooltip"
            data-tooltip-text="This summary uses only reviews writtem by customers that purchase the game directly from Steam."
          >
            <img src="https://store.akamai.steamstatic.com/public/shared/images/ico/icon_questionmark.png"></img>
          </a>
        </div>
        <div
          id="review_histogram_rollup_container"
          className="review_histogram"
        >
          <div className={expandingClass}>
            <AllReviewsChart
              setMinDate={setMinDate}
              setMaxDate={setMaxDate}
              permData={permData}
              setPermData={setPermData}
              data={data}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllReviews;
