import ReviewReactions from "./ReviewReactions";

import { useEffect, useState } from 'react'
const Helpfull = ({review}) => {

  let help = review["helpfull_table_id"]
  
  //get help

    return (

    
        <>
        <div className="TopDown">
      <p>Was this review helpful?</p>
      <ReviewReactions/>
      <h1>{help["positive"]} people found this review helpful</h1>
      <h1>{help["funny"]} people found this review funny</h1>
      <div className="Conversations"> BOTTOM LEFT ICON</div>
      <AwardList awardsList={help["award_reviews_table"]}/>
     </div>
     </>
    );
  };
  
  export default Helpfull;
  