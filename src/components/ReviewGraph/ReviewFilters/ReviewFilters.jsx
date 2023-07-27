

const ReviewFilters = () => {



    const totalReviewCount = ''
    const posReviewCount= ''
    const negReviewCount = ''
    const steamPurchaseCount = ''
    const OtherPurchaseCount = ''
    const englishReviews = ''
    const yourLanguageReviewCount = ''
    
   
          return (
        <>
    
    
    
                <div id='reviewFilterOptions'>
                    <div className='reviewsFilterMenu'>

                        <div className='title'>Review type</div>
                        <div className='reviewMenuFlyout'>
                            <div className='reviewMenuFlyoutContent'>
                                <input type="radio" name="review_type" value="all" id="review_type_all" checked="checked" />
                                <label for='review_type_all'>"All&nbsp;"
                                    <span className="userReviewCount">{totalReviewCount}</span>
                                </label>

                                <input type="radio" name="review_type" value="positive" id="review_type_positive" checked="checked" />
                                <label for='review_type_positive'>"Positive&nbsp;"
                                    <span className="userReviewCount">{posReviewCount}</span>
                                </label>
                                <input type="radio" name="review_type" value="negative" id="review_type_negative" checked="checked" />
                                <label for='review_type_negative'>"Negative&nbsp;"
                                    <span className="userReviewCount">{negReviewCount}</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className='reviewsFilterMenu'>
                        <div className='title'>Purchase type</div>
                        <div className='reviewMenuFlyout'>
                            <div className='reviewMenuFlyoutContent'>
                                <input type="radio" name="purchase_type" value="all" id="purchase_type_all" checked="checked" />
                                <label for='purchase_type_all'>"All&nbsp;"
                                    <span className="userReviewCount">{totalReviewCount}</span>
                                </label>

                                <input type="radio" name="purchase_type" value="steam" id="purchase_type_steam" checked="checked" />
                                <label for='purchase_type_steam'>"Steam&nbsp;"
                                    <span className="userReviewCount">{steamPurchaseCount}</span>
                                </label>
                                <input type="radio" name="purchase_type" value="other" id="purchase_type_other" checked="checked" />
                                <label for='purchase_type_other'>"Other&nbsp;"
                                    <span className="userReviewCount">{OtherPurchaseCount}</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='reviewsFilterMenu'>
                        <div className="title">Language</div>
                        <div className="reviewMenuFlyoutContent">

                            <input type="radio" name="review_language" id="review_language_all" value="all" checked="checked" />
                            <label for="review_language_all">All Languages&nbsp;<span className="user_reviews_count">{englishReviews}</span>
                            </label>
                            <br />
                            <input type="radio" name="review_language" id="review_language_mine" value="english" checked="" />
                            <label for="review_language_mine">Your Languages&nbsp;
                                <span className="user_reviews_count">{yourLanguageReviewCount}</span>
                                <a className="tooltip" data-tooltip-html="languageTooltipText">
                                    <img src="https://store.akamai.steamstatic.com/public/shared/images/ico/icon_questionmark_dark.png" />
                                </a>
                            </label>
                            <br />
                            <div className="user_reviews_customize_language">
                                <a href="#">Customize</a>
                            </div>
                        </div>
                    </div>
                    <div className='reviewsFilterMenu'>
                        <div className="title">Date Range</div>
                        <div className='reviewMenuFlyoutContent'>
                            <div className="user_reviews_date_range_explanation">
                                To view reviews within a date range, please click and drag a selection on a graph above or click on a specific bar.							<br /><br />
                                <span className="reviewFilterBtn" >
                                    <span>Show graph</span>
                                </span>
                            </div>
                            <input type="radio" name="review_date_range" id="review_date_range_all" value="all" checked="checked" />
                            <label for="review_date_range_all">Lifetime</label><br />
                            <input type="radio" name="review_date_range" id="review_date_range_histogram" value="include" checked="checked" disabled="disabled" />
                            <label for="review_date_range_histogram">Only Specific Range (Select on graph above)&nbsp;</label><br />
                            <input type="radio" name="review_date_range" id="review_date_range_exclude_histogram" value="exclude" disabled="disabled" />
                            <label for="review_date_range_exclude_histogram">Exclude Specific Range (Select on graph above)&nbsp;</label><br />

                        </div>

                    </div>
                    <div className='reviewsFilterMenu'>
                        <div className="title">Playtime</div>
                        <div className="reviewMenuFlyoutContent">

                            <div className="user_reviews_steam_labs_desc">
                                <a href="#">
                                    <img src="https://cdn.akamai.steamstatic.com/store/labs/main/images/steam_labs_logo.svg" />
                                    <span>Brought to you by Steam Labs</span>
                                </a>
                            </div>

                            <div className="user_reviews_playtime_filter_explanation">
                                Filter reviews by the user's playtime when the review was written:						</div>

                            <input type="radio" name="review_playtime_preset" id="review_playtime_preset_0" value="0" checked="" />
                            <label for="review_playtime_preset_0">No Minimum</label>
                            <br />
                            <input type="radio" name="review_playtime_preset" id="review_playtime_preset_1" value="1" />
                            <label for="review_playtime_preset_1">Over 1 hour</label>
                            <br />
                            <input type="radio" name="review_playtime_preset" id="review_playtime_preset_10" value="10" />
                            <label for="review_playtime_preset_10">Over 10 hours</label>
                            <br />
                            <input type="radio" name="review_playtime_preset" id="review_playtime_preset_100" value="100" />
                            <label for="review_playtime_preset_100">Over 100 hours</label>
                            <br />

                            <div id="app_reviews_playtime_range_text">
                                <span id="app_reviews_playtime_range_text_min">No minimum</span>
                                to
                                <span id="app_reviews_playtime_range_text_max">No maximum</span>
                            </div>
                            <input type="hidden" id="app_reviews_playtime_range_min" value="0" />
                            <input type="hidden" id="app_reviews_playtime_range_max" value="0" />

                        </div>
                    </div>
                    <div className="reviewDisplayAs">
                        <span className="title">Display As: </span>
                        <select id="review_context" >
                            <option value="summary">Summary</option>
                            <option value="all">Most Helpful</option>
                            <option value="recent">Recent</option>
                            <option value="funny">Funny</option>
                        </select>
                    </div>
                    <div>
                        <span id="review_show_graph_button">
                            <span>Show graph</span>
                            <div className="graph_toggle_icon down">&nbsp;</div>
                        </span>
                        <span id="review_hide_graph_button">
                            <span>Hide graph</span>
                            <div className="graph_toggle_icon up">&nbsp;</div>
                        </span>
                    </div>
                </div>
            

        </>
    )
}

export default ReviewFilters