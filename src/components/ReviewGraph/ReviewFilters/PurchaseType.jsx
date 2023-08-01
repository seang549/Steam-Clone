import React from "react";

const PurchaseType = ({
  filters,
  setFilters,
  totalReviewCount,
  steamPurchaseCount,
  otherPurchaseCount,
}) => {
  const handlePurchaseTypeChange = (event) => {
    const selectedPurchaseType = event.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      purchaseType: selectedPurchaseType,
    }));
  };

  return (
    <div className="reviewsFilterMenu filter_dropdown">
      <div className="title">Purchase type</div>
      <div className="reviewMenuFlyout filter_dropdown_content">
        <div className="reviewMenuFlyoutContent">
          <input
            type="radio"
            name="purchase_type"
            value="all"
            id="purchase_type_all"
            checked={filters.purchaseType === "all"}
            onChange={handlePurchaseTypeChange}
          />
          <label for="purchase_type_all">
            "All&nbsp;"
            <span className="userReviewCount">{totalReviewCount}</span>
          </label>
          <br />

          <input
            type="radio"
            name="purchase_type"
            value="steam"
            id="purchase_type_steam"
            checked={filters.purchaseType === "steam"}
            onChange={handlePurchaseTypeChange}
          />
          <label for="purchase_type_steam">
            "Steam&nbsp;"
            <span className="userReviewCount">{steamPurchaseCount}</span>
          </label>
          <br />

          <input
            type="radio"
            name="purchase_type"
            value="other"
            id="purchase_type_other"
            checked={filters.purchaseType === "other"}
            onChange={handlePurchaseTypeChange}
          />
          <label for="purchase_type_other">
            "Other&nbsp;"
            <span className="userReviewCount">{otherPurchaseCount}</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PurchaseType;
