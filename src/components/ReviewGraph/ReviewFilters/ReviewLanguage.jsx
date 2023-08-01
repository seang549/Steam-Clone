import React from "react";

const ReviewLanguage = ({
  filters,
  setFilters,
  englishReviews,
  yourLanguageReviewCount,
}) => {
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      reviewLanguage: selectedLanguage,
    }));
  };

  return (
    <div className="reviewsFilterMenu filter_dropdown">
      <div className="title">Language</div>
      <div className="reviewMenuFlyoutContent filter_dropdown_content">
        <input
          type="radio"
          name="review_language"
          id="review_language_all"
          value="all"
          checked={filters.reviewLanguage === "all"}
          onChange={handleLanguageChange}
        />
        <label for="review_language_all">
          All Languages&nbsp;
          <span className="user_reviews_count">{englishReviews}</span>
        </label>
        <br />

        <input
          type="radio"
          name="review_language"
          id="review_language_mine"
          value="english"
          checked={filters.reviewLanguage === "english"}
          onChange={handleLanguageChange}
        />
        <label for="review_language_mine">
          Your Languages&nbsp;
          <span className="user_reviews_count">{yourLanguageReviewCount}</span>
          <a className="tooltip" data-tooltip-html="languageTooltipText">
            <img src="https://store.akamai.steamstatic.com/public/shared/images/ico/icon_questionmark_dark.png" />
          </a>
        </label>
        <br />
        <div className="user_reviews_customize_language">
          <a href="#">Customize</a>
        </div>
      </div>
    </div>
  );
};

export default ReviewLanguage;
