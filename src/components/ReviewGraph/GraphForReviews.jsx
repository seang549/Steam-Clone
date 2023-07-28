import {useState, useEffect} from 'react'
// import AllReviewsChart from './AllReviewsChart.jsx'
import AllReviews from './AllReviews/AllReviews.jsx'
// import RecentReviews from './RecentReviews/RecentReviews.jsx'
import ReviewFilters from './ReviewFilters/ReviewFilters.jsx'


const GraphForReviews = () => {

    const [reviewData, setReviewData] = useState([])
    useEffect(() => {
        const getReviews = async () => {
            const result = await fetch('https://steam-clone-zf6a.onrender.com/reviews')
            const data = await result.json()
            setReviewData(data)
        }
        getReviews()
        
    }, [])
    console.log(reviewData)
    
//testData
    // const data = [
    //     { date: '2023-07-20', good: true },
    //     { date: '2023-07-21', good: true },
    //     { date: '2023-07-21', good: false },
    //     // Add more data entries here
    // ];



  
    
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