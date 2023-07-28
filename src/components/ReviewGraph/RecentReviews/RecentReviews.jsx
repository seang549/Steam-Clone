import RecentReviewsBarChart from "./RecentReviewsBarChart"

const RecentReviews = ({data}) => {
    const reviewSumm = 'ChangeMe'
    const tooltipText = 'ChangeMe'
    const reviewNumText = 'changeMe'

    return (
        <div className="review_recent_container">
                     <div className='recent_summary_bar'>
                         <div className="summary_section">
                             <div className="title">recent Reviews:</div>
                             <span id="recent_review_summary" className={reviewSumm} data-tooltip-html={tooltipText}>{reviewSumm}</span>
                             <span className='recentReviewNum'>{reviewNumText}</span>
                             <a className='tooltip' data-tooltip-text='This summary uses only reviews writtem by customers that purchase the game directly from Steam.'>
                                 <img src="https:store.akamai.steamstatic.com/public/shared/images/ico/icon_questionmark.png"></img>
                             </a>
                         </div>
                     </div>
                     <div className='recent_review_histogram'>
                <RecentReviewsBarChart data={data} />
                     </div>
        </div>
    )
}

export default RecentReviews