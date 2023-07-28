import React from 'react';
import {useEffect, useRef} from 'react'
// import AllReviewsBarChart from './AllReviewsBarChart';
import { Chart } from 'chart.js/auto'
import 'moment'
import 'chartjs-adapter-moment'



const AllReviewsChart = ({ data }) => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        if (chartRef && chartRef.current) {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }

            const ctx = chartRef.current.getContext('2d');

            const groupedData = data.reduce((acc, item) => {
                if (!acc[item.date_posted]) {
                    acc[item.date_posted] = { posSum: 0, negSum: 0 };
                }
                if (item.recommendation) {
                    acc[item.date_posted].posSum += 1;
                } else {
                    acc[item.date_posted].negSum += 1;
                }
                return acc;
            }, {});

            const modifiedData = Object.keys(groupedData).map((date_posted) => ({
                date_posted,
                posSum: groupedData[date_posted].posSum,
                negSum: -groupedData[date_posted].negSum,
            }));

            // Create the chart
            chartInstanceRef.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: modifiedData.map((entry) => entry.date_posted),
                    datasets: [
                        {
                            label: 'Positive Entries',
                            data: modifiedData.map((entry) => entry.posSum),
                            backgroundColor: 'rgba(75, 192, 192, 0.8)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                        },
                        {
                            label: 'Negative Entries',
                            data: modifiedData.map((entry) => entry.negSum),
                            backgroundColor: 'rgba(255, 99, 132, 0.8)',
                            borderColor: 'rgba(255, 99, 132, 1)',
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    scales: {
                        x: {
                            stacked: true,
                            type: 'time', // Use the "time" scale for the x-axis
                            time: {
                                unit: 'day', // Set the unit for the time scale (could be 'day', 'week', 'month', etc.)
                            },
                        },
                        y: {
                            stacked: true,
                            ticks: {
                                callback: (value) => Math.abs(value), // Display absolute values on the y-axis
                            },
                        },
                    },
                },
            });
        }

        return () => {
            // Clean up: Ensure the chart instance is destroyed when the component is unmounted
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, [data]);

    return <canvas ref={chartRef} />;
};

export default AllReviewsChart;