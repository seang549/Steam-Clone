import RecentReviewsChart from './RecentReviewsChart.jsx'

const AllReviews = ({ setMinDate, setMaxDate, recentPermData, setRecentPermData, data }) => {
    const reviewSumm = 'ChangeMe'
    const tooltipText = 'ChangeMe'
    const reviewNumText = 'changeMe'


    return (
        <>
            <div className="user_reviews_summary_bar">
                <div className="summary_section">
                    <div className="title">Overall Reviews:</div>
                    <span id="recent_game_review_summary" className={reviewSumm} data-tooltip-html={tooltipText}>{reviewSumm}</span>
                    <span className='reviewNum'>{reviewNumText}</span>
                    <a className='tooltip' data-tooltip-text='This summary uses only reviews writtem by customers that purchase the game directly from Steam.'>
                        <img src="https://store.akamai.steamstatic.com/public/shared/images/ico/icon_questionmark.png"></img>
                    </a>
                </div>
                <div id='recent_review_histogram_rollup_container' className="review_histogram">
                    <div className="review_histogram_rollup">
                        <RecentReviewsChart setMinDate={setMinDate} setMaxDate={setMaxDate} recentPermData={recentPermData} setRecentPermData={setRecentPermData} data={data} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllReviews