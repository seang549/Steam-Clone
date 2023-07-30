import React from 'react'
import { useContext, useState } from 'react'

const ReviewContext = React.createContext();
const ReviewUpdateContext = React.createContext()



export function useReviewData() {
    return useContext(ReviewContext)
}

export function useReviewDataUpdate() {
    return useContext(ReviewUpdateContext)
}

export function DataProvider({ children }) {
    const [reviewData, setReviewData] = useState([])
  

    function updateReviewData(arr) {
        setReviewData(arr)
    }


    return (
        <ReviewContext.Provider value={reviewData}>
            <ReviewUpdateContext.Provider value={updateReviewData}>
                {children}
            </ReviewUpdateContext.Provider>
        </ReviewContext.Provider>
    )
}