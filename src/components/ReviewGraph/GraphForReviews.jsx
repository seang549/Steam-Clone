import {useState, useEffect} from 'react'
import AllReviews from './AllReviews/AllReviews.jsx'
import RecentReviews from './RecentReviews/RecentReviews.jsx'
import ReviewFilters from './ReviewFilters/ReviewFilters.jsx'
import { useReviewData, useReviewDataUpdate } from '../ReviewContext';


const GraphForReviews = () => {
    const reviewData = useReviewData();
    const setReviewData = useReviewDataUpdate()
    useEffect(() => {
        const getReviews = async () => {
            const result = await fetch('https://steam-clone-zf6a.onrender.com/reviews')
            const data = await result.json()
            setReviewData(data)
        }
        getReviews()
        
    }, [])
    console.log(reviewData)
    




  
    
    return (
        <>
            <div id='graphForReviews'>
            <h2 className="user_reviews_header no_bottom_margin">Customer reviews</h2>
                <AllReviews data={reviewData} />
                {/* <RecentReviews data={data} /> */}
                <ReviewFilters />
            </div>
        </>
    )
}



export default GraphForReviews