

const AllReviews = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <div>Loading...</div>;
  } else if (reviews.length === 1) {
    return <p>1 user review</p>;
  }
  return (
    <div href='#jumpToReviews' className='header-review-gameInfo'>
      <p className='first-p'>ALL REVIEWS:</p>
      <p className='second-p'>{reviews.length} user reviews</p>
    </div>
  );
};

export default AllReviews;
