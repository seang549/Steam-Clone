import React from 'react';
import CustomBarChart from './CustomBarChart';


const processData = (data) => {
    const dateMap = {};

    data.forEach((item) => {
        const { date, good } = item;
        if (!dateMap[date]) {
            dateMap[date] = { date, goodCount: 0, badCount: 0 };
        }

        if (good) {
            dateMap[date].goodCount++;
        } else {
            dateMap[date].badCount++;
        }
    });

    return Object.values(dateMap);
};

const AllReviewsChart = ({ data }) => {
    const processedData = processData(data);
    return (
        <CustomBarChart data={processedData} />
    );
};

export default AllReviewsChart;