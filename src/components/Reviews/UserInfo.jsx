//import { useEffect, useState } from 'react'
const UserInfo = ({ review }) => {
  let productsView = true;
  let reviewsView = true;
  if (review["user_product"] == 0) {
    productsView = false;
  }
  if (review["times_reviewed"] == 0) {
    reviewsView = false;
  }

  return (
    <>
      <div className='Icon'>
        <img className='Icon' src={review["user_icon"]}></img>
      </div>
      {/* <div className='user-info-cont'> */}
      <div className='user-product-username'>
        <h1 id='user-info-username'>{review["user_name"]}</h1>
        {productsView && (
          <h1 id='user-info-product'>
            {review["user_product"]} products in account
          </h1>
        )}
      </div>
      {reviewsView && (
        <h1 id='user-info-viewReviews'>{review["times_reviewed"]} reviews</h1>
      )}
      {/* </div> */}
    </>
  );
};

export default UserInfo;
