const ReviewType = ({
  setFilters,
  totalReviewCount,
  posReviewCount,
  negReviewCount,
}) => {
  const handleReviewTypeChange = (event) => {
    const selectedReviewType = event.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      reviewType: selectedReviewType,
    }));
  };

  return (
    <div id="reviewType" className="reviewsFilterMenu filter_dropdown">
      <div className="title">Review type</div>
      <div className="reviewMenuFlyout filter_dropdown_content">
        <div className="reviewMenuFlyoutContent">
          <input
            type="radio"
            name="review_type"
            value="all"
            id="review_type_all"
            checked={setFilters.reviewType === "all"}
            onChange={handleReviewTypeChange}
          />
          <label for="review_type_all">
            "All&nbsp;"
            <span className="userReviewCount">{totalReviewCount}</span>
          </label>
          <br />

          <input
            type="radio"
            name="review_type"
            value="positive"
            id="review_type_positive"
            checked={setFilters.reviewType === "positive"}
            onChange={handleReviewTypeChange}
          />
          <label for="review_type_positive">
            "Positive&nbsp;"
            <span className="userReviewCount">{posReviewCount}</span>
          </label>
          <br />

          <input
            type="radio"
            name="review_type"
            value="negative"
            id="review_type_negative"
            checked={setFilters.reviewType === "negative"}
            onChange={handleReviewTypeChange}
          />
          <label for="review_type_negative">
            "Negative&nbsp;"
            <span className="userReviewCount">{negReviewCount}</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ReviewType;
