import { useState, useEffect } from "react";
import AllReviews from "./AllReviews/AllReviews.jsx";
import RecentReviews from "./RecentReviews/RecentReviews.jsx";
import ReviewFilters from "./ReviewFilters/ReviewFilters.jsx";
import { useReviewData, useReviewDataUpdate } from "../ReviewContext";

const GraphForReviews = () => {
  const reviewData = useReviewData();
  const setReviewData = useReviewDataUpdate();
  const [expanded, setExpanded] = useState(false);
  const [filters, setFilters] = useState({
    reviewType: "all",
    purchaseType: "all",
    reviewLanguage: "all",
    reviewDateRange: "all",
    playTime: "noMin",
    displayAs: "summary",
  });

  const toggleExpanded = () => {
    setExpanded(!expanded);
    console.log(expanded);
  };

  useEffect(() => {
    const getReviews = async () => {
      const result = await fetch(
        "https://steam-clone-zf6a.onrender.com/reviews"
      );
      const data = await result.json();
      setReviewData(data);
    };
    getReviews();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      console.log(filters);
    };
    applyFilters();
  }, [filters]);

  if (expanded) {
    return (
      <>
        <div id="graphForReviews">
          <h2 className="user_reviews_header no_bottom_margin">
            Customer reviews
          </h2>
          <div className="flex" style={{ width: "940px" }}>
            <AllReviews expanded={expanded} data={reviewData} />
            <RecentReviews expanded={expanded} data={reviewData} />
          </div>
        </div>

        <div className="flex">
          <ReviewFilters
            filters={filters}
            setFilters={setFilters}
            expanded={expanded}
            toggleExpanded={toggleExpanded}
          />
        </div>
      </>
    );
  } else {
    return (
      <div id="graphForReviews">
        <h2 className="user_reviews_header no_bottom_margin">
          Customer reviews
        </h2>
        <ReviewFilters
          filters="filters"
          setFilters={setFilters}
          expanded={expanded}
          toggleExpanded={toggleExpanded}
        />
      </div>
    );
  }
};

export default GraphForReviews;
//
