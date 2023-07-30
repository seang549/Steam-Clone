//import { useEffect, useState } from 'react'
const Review = ({ review }) => {
  let date;
  date = new Date(review["date_posted"]);
  date = date.toDateString();
  date = date.split(" ");
  date = `${date[1]} ${date[2]}`;
  return (
    <>
      <div>
        <h1>{date}</h1>
      </div>
      <div>
        <p>{review["review_body"]}</p>
      </div>
    </>
  );
};

export default Review;
