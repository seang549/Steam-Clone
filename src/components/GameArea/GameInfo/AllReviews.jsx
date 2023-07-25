

const AllReviews = ({reviews}) => {
    if (!reviews || reviews.length === 0) {
        return <div>Loading...</div>;
    } else if (reviews.length === 1) {
        return <p>1 user review</p>
    }
    return <p>{reviews.length} user reviews</p>
    }


export default AllReviews