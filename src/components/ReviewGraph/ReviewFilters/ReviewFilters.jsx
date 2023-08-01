import ReviewType from "./ReviewType.jsx";
import PurchaseType from "./PurchaseType.jsx";
import ReviewLanguage from "./ReviewLanguage.jsx";
import ReviewDateRange from "./ReviewDateRange.jsx";
import PlayTime from "./PlayTime.jsx";
import ReviewDisplayAs from "./ReviewDisplayAs.jsx";
import ExpandBtns from "./ExpandBtns.jsx";

const ReviewFilters = ({
  fullData,
  filters,
  setFilters,
  expanded,
  toggleExpanded,
}) => {
  const totalReviewCount = "";
  const posReviewCount = "";
  const negReviewCount = "";
  const steamPurchaseCount = "";
  const otherPurchaseCount = "";
  const englishReviews = "";
  const yourLanguageReviewCount = "";

  return (
    <>
      <div id="reviewFilterOptions">
        <ReviewType
          filters={filters}
          setFilters={setFilters}
          totalReviewCount={totalReviewCount}
          posReviewCount={posReviewCount}
          negReviewCount={negReviewCount}
        />

        <PurchaseType
          filters={filters}
          setFilters={setFilters}
          totalReviewCount={totalReviewCount}
          steamPurchaseCount={steamPurchaseCount}
          otherPurchaseCount={otherPurchaseCount}
        />

        <ReviewLanguage
          filters={filters}
          setFilters={setFilters}
          englishReviews={englishReviews}
          yourLanguageReviewCount={yourLanguageReviewCount}
        />

        <ReviewDateRange
          filters={filters}
          expanded={expanded}
          toggleExpanded={toggleExpanded}
          fullData={fullData}
          setFilters={setFilters}
        />

        <PlayTime filters={filters} setFilters={setFilters} />

        <ReviewDisplayAs filters={filters} setFilters={setFilters} />
        <ExpandBtns expanded={expanded} toggleExpanded={toggleExpanded} />
      </div>
    </>
  );
};

export default ReviewFilters;
