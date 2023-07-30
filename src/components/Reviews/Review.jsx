//import { useEffect, useState } from 'react'
const Review = ({ review }) => {
  let date;
  date = new Date(review["date_posted"]);
  date = date.toDateString();
  date = date.split(" ");
  date = `${date[1]} ${date[2]}`;
  return (
    <>
      <div className='review-container-comp'>
        <h1 id='review-date-posted'>POSTED: {date}</h1>
        <p id='review-body'>{review["review_body"]}</p>
      </div>
      <div className='hr'></div>
    </>
  );
};

export default Review;
