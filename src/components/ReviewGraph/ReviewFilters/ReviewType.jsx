
const ReviewType = ({
    setFilters,
    totalReviewCount,
    posReviewCount,
    negReviewCount,
    filters,
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
        <div className="title">
          Review type <span className="arrow">&#9660;</span>
        </div>
        <div className="reviewMenuFlyout filter_dropdown_content">
          <div className="reviewMenuFlyoutContent">
            <input
              type="radio"
              name="review_type"
              value="all"
              id="review_type_all"
              checked={filters.reviewType === "all"}
              onChange={handleReviewTypeChange}
            />
            <label for="review_type_all">
              {" "}
              All
              <span className="userReviewCount">{totalReviewCount}</span>
            </label>
            <br />
  
            <input
              type="radio"
              name="review_type"
              value="positive"
              id="review_type_positive"
              checked={filters.reviewType === "positive"}
              onChange={handleReviewTypeChange}
            />
            <label for="review_type_positive">
              {" "}
              Positive
              <span className="userReviewCount">{posReviewCount}</span>
            </label>
            <br />
  
            <input
              type="radio"
              name="review_type"
              value="negative"
              id="review_type_negative"
              checked={filters.reviewType === "negative"}
              onChange={handleReviewTypeChange}
            />
            <label for="review_type_negative">
              {" "}
              Negative
              <span className="userReviewCount">{negReviewCount}</span>
            </label>
          </div>
        </div>
      </div>
    );
  };
  
  
  export default ReviewType
  