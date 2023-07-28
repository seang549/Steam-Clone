//import { useEffect, useState } from 'react'
const UserInfo = ({review}) => {
    let productsView = true
    let reviewsView = true
if(review["user_product"] == 0)
{
    productsView = false
}
if(review["times_reviewed"] == 0)
{
    reviewsView = false
}

    return (
        <>
        <div className="Icon">
        <img src={review["user_icon"]}></img>
        </div>
        <div className="TopDown">
        <h1>{review["user_name"]}</h1>
        {productsView && <h1>{review["user_product"]} products in account</h1>}
        {reviewsView && <h1>{review["times_reviewed"]} reviews</h1>}
        </div>
        </>
    );
  };
  
  export default UserInfo;
  