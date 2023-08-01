import React, { useState, useEffect } from 'react';

const ReviewDisplayAs = ({ filters, setFilters }) => {
    const [selectedDisplayAs, setSelectedDisplayAs] = useState('summary');

    const handleDisplayAsChange = (event) => {
        const selectedDisplayAs = event.target.value;
        setSelectedDisplayAs(selectedDisplayAs);
        setFilters((prevFilters) => ({
            ...prevFilters,
            displayAs: selectedDisplayAs,
        }));
    };

    useEffect(() => {
        // Update the selected display mode whenever filters.displayAs changes
        setSelectedDisplayAs(filters.displayAs);
    }, [filters.displayAs]);

    return (
        <div className="reviewDisplayAs">
            <span className="title">Display As: </span>
            <select id="review_context" value={selectedDisplayAs} onChange={handleDisplayAsChange}>
                <option value="summary">Summary</option>
                <option value="all">Most Helpful</option>
                <option value="recent">Recent</option>
                <option value="funny">Funny</option>
            </select>
        </div>
    );
};

export default ReviewDisplayAs;
