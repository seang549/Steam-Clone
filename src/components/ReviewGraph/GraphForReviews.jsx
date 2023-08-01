import {useState, useEffect} from 'react'
import AllReviews from './AllReviews/AllReviews.jsx'
import RecentReviews from './RecentReviews/RecentReviews.jsx'
import ReviewFilters from './ReviewFilters/ReviewFilters.jsx'
import { useReviewData, useReviewDataUpdate } from '../ReviewContext';


const GraphForReviews = () => {
  const reviewData = useReviewData();
  const setReviewData = useReviewDataUpdate();
  const [permData, setPermData] = useState([]);
  const [recentPermData, setRecentPermData] = useState([]);
  const [fullData, setFullData] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");
  const [filters, setFilters] = useState({
    reviewType: "all",
    purchaseType: "all",
    reviewLanguage: "all",
    reviewDateRange: "all",
    playTime: "noMin",
    displayAs: "summary",
  });

  useEffect(() => {
    const toggleFullData = () => {
      console.log(minDate);
      console.log(maxDate);


      if (reviewData.length === permData.length) {
        setFullData(false);
      } else {
        setFullData(true);
      }
    };
    toggleFullData();
  }, [minDate, maxDate]);

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
      setPermData(data);
      setReviewData(data);
    };
    getReviews();
  }, []);
  useEffect(() => {
    const getReviews = async () => {
      const result = await fetch(
        "https://steam-clone-zf6a.onrender.com/reviews"
      );
      const data = await result.json();
      const currentDate = new Date();
      const oneMonthAgo = new Date();
      oneMonthAgo.setDate(currentDate.getDate() - 30);
      const recentData = data.filter((entry) => {
        const datePosted = new Date(entry.date_posted);
        return datePosted >= oneMonthAgo;
      });
      setRecentPermData(recentData);
    };
    getReviews();
  }, []);

  const exclude = (smallArr) => {
    let minArr = minDate.split("-").map(Number);
    let maxArr = maxDate.split("-").map(Number);

    if (
      parseInt(smallArr[0]) < minArr[0] ||
      (parseInt(smallArr[0]) === minArr[0] &&
        parseInt(smallArr[1]) < minArr[1]) ||
      parseInt(smallArr[0]) > maxArr[0] ||
      (parseInt(smallArr[0]) === maxArr[0] &&
        parseInt(smallArr[1]) > maxArr[1]) ||
      (parseInt(smallArr[0]) === maxArr[0] &&
        parseInt(smallArr[1]) === maxArr[1] &&
        parseInt(smallArr[2]) > maxArr[2])
    ) {
      return true;
    }
    return false;
  };
  useEffect(() => {
    const applyFilters = async () => {
      const newData = [];
      permData.map((review) => {
        let reviewPass = true;
        if (filters.reviewType === "positive") {
          if (review.recommendation === false) {
            reviewPass = false;
          }
        } else if (filters.reviewType === "negative") {
          if (review.recommendation === true) {
            reviewPass = false;
          }
        }

        if (filters.purchaseType === "steam") {
          if (review.owned === "product Key") {
            reviewPass = false;
          }
        } else if (filters.purchaseType === "other") {
          if (review.owned === "Steam") {
            reviewPass = false;
          }
        }

        let smallArr = review["date_posted"].split("T")[0].split("-");
        if (filters.reviewDateRange === "include") {
          if (exclude(smallArr)) {
            reviewPass = false;
          }
        } else if (filters.reviewDateRange === "exclude") {
          if (!exclude(smallArr)) {
            reviewPass = false;
          }
        }
        let pTime = Math.floor(parseInt(review.total_time));
        if (filters.playTime === 1) {
          if (pTime < 1) {
            reviewPass = false;
          }
        } else if (filters.playTime === 10) {
          if (pTime < 10) {
            reviewPass = false;
          }
        } else if (filters.playTime === 100) {
          if (pTime < 100) {
            reviewPass = false;
          }
        }
        if (reviewPass === true) {
          newData.push(review);
        }
      });
      console.log(newData);
      setReviewData(newData);

      if (filters.displayAs === "helpful") {
        // console.log('Display as: Most Helpful')
      } else if (filters.displayAs === "funny") {
        // console.log('Display as: Most funny')
      } else if (filters.displayAs === "recent") {
        // console.log('Display as: Most recent')
      }
    };
    applyFilters();
  }, [filters]);


  if (expanded) {
    return (
      <>
        <div id='graphForReviews'>
          <h2 className='user_reviews_header no_bottom_margin'>
            Customer reviews
          </h2>
          <AllReviews
            setMinDate={setMinDate}
            setMaxDate={setMaxDate}
            permData={permData}
            setPermData={setPermData}
            expanded={expanded}
            data={reviewData}
          />
          <RecentReviews
            setMinDate={setMinDate}
            setMaxDate={setMaxDate}
            recentPermData={recentPermData}
            setRecentPermData={setRecentPermData}
            expanded={expanded}
            data={reviewData}
          />
          <ReviewFilters
            fullData={fullData}
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
      <div id='graphForReviews'>
        <h2 className='user_reviews_header no_bottom_margin'>
          Customer reviews
        </h2>
        <ReviewFilters
          fullData={fullData}
          filters='filters'
          setFilters={setFilters}
          expanded={expanded}
          toggleExpanded={toggleExpanded}
        />
      </div>
    );
  }
};


export default GraphForReviews