import React, { useState, useEffect } from "react";

const PlayTime = ({ filters, setFilters }) => {
  const [selectedPlayTime, setSelectedPlayTime] = useState(0);

  const handlePlayTimeChange = (event) => {
    const selectedPlayTime = parseInt(event.target.value);
    setSelectedPlayTime(selectedPlayTime);
    setFilters((prevFilters) => ({
      ...prevFilters,
      playTime: selectedPlayTime,
    }));
  };

  useEffect(() => {
    // Update the selected playtime range whenever filters.playTime changes
    setSelectedPlayTime(filters.playTime);
  }, [filters.playTime]);

  return (
    <div className="reviewsFilterMenu filter_dropdown">
      <div className="title">Playtime</div>
      <div className="reviewMenuFlyout filter_dropdown_content">
        <div className="reviewMenuFlyoutContent ">
          <div className="user_reviews_steam_labs_desc">
            <a href="#">
              <img
                src="https://cdn.akamai.steamstatic.com/store/labs/main/images/steam_labs_logo.svg"
                alt="Steam Labs"
              />
              <span>Brought to you by Steam Labs</span>
            </a>
          </div>

          <div className="user_reviews_playtime_filter_explanation">
            Filter reviews by the user's playtime when the review was written:
          </div>

          <input
            type="radio"
            name="review_playtime_preset"
            id="review_playtime_preset_0"
            value="0"
            checked={selectedPlayTime === 0}
            onChange={handlePlayTimeChange}
          />
          <label htmlFor="review_playtime_preset_0"> No Minimum</label>
          <br />

          <input
            type="radio"
            name="review_playtime_preset"
            id="review_playtime_preset_1"
            value="1"
            checked={selectedPlayTime === 1}
            onChange={handlePlayTimeChange}
          />
          <label htmlFor="review_playtime_preset_1"> Over 1 hour</label>
          <br />

          <input
            type="radio"
            name="review_playtime_preset"
            id="review_playtime_preset_10"
            value="10"
            checked={selectedPlayTime === 10}
            onChange={handlePlayTimeChange}
          />
          <label htmlFor="review_playtime_preset_10"> Over 10 hours</label>
          <br />

          <input
            type="radio"
            name="review_playtime_preset"
            id="review_playtime_preset_100"
            value="100"
            checked={selectedPlayTime === 100}
            onChange={handlePlayTimeChange}
          />
          <label htmlFor="review_playtime_preset_100"> Over 100 hours</label>
          <br />

          <div id="app_reviews_playtime_range_text">
            <span id="app_reviews_playtime_range_text_min">No minimum</span>
            to
            <span id="app_reviews_playtime_range_text_max">No maximum</span>
          </div>
          <input type="hidden" id="app_reviews_playtime_range_min" value="0" />
          <input type="hidden" id="app_reviews_playtime_range_max" value="0" />
        </div>
      </div>
    </div>
  );
};

export default PlayTime;
