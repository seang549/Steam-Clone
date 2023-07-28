//import { useEffect, useState } from 'react'
const Review = ({ review }) => {
  return (
    <>
      {/* <div>
        <h1>{review["date_posted"]}</h1>
      </div> */}
      <div>
        <p>{review["review_body"]}</p>
      </div>
    </>
  );
};

export default Review;
