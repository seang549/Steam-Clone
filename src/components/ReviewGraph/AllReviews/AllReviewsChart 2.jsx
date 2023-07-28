import React from 'react';
import {useEffect, useRef} from 'react'
// import AllReviewsBarChart from './AllReviewsBarChart';
import { Chart, TimeScale } from 'chart.js/auto'
import 'moment'
import moment from 'moment'
import 'chartjs-adapter-moment'



const AllReviewsChart = ({ data }) => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        console.log(Chart.defaults);
        if (chartRef && chartRef.current) {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }

            const ctx = chartRef.current.getContext('2d');

            const groupedData = data.reduce((acc, item) => {
                if (!acc[item.date]) {
                    acc[item.date] = { posSum: 0, negSum: 0 };
                }
                if (item.pos) {
                    acc[item.date].posSum += 1;
                } else {
                    acc[item.date].negSum += 1;
                }
                return acc;
            }, {});

            const modifiedData = Object.keys(groupedData).map((date) => ({
                date,
                posSum: groupedData[date].posSum,
                negSum: -groupedData[date].negSum,
            }));

            // Create the chart
            chartInstanceRef.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: modifiedData.map((entry) => entry.date),
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