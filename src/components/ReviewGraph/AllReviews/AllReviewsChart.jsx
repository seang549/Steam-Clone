import React from 'react';
import {useState, useEffect, useRef} from 'react'
import { Chart } from 'chart.js/auto'
import moment from 'moment'
import 'chartjs-adapter-moment'
import zoomPlugin from 'chartjs-plugin-zoom';
import { useReviewData, useReviewDataUpdate } from '../../ReviewContext';
let newMin
let newMax
Chart.register(zoomPlugin);



const AllReviewsChart = ({data}) => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);
    const [dateRange, setDateRange] = useState("");
    let modifiedData;
    const setReviewData = useReviewDataUpdate(); // Call the hook inside the component directly
    const permData = data;
    let timer;

    const timeFilter = (min, max) => {
        console.log(min)
        if (timer) {
            const filteredData = permData.filter((entry) => {
                entry.date_posted > min || entry.date_posted < max;
            });
            console.log(filteredData)
            setReviewData(filteredData)
            clearTimeout(timer)
        }
    };


    function startFetch({ chart }) {
        if (timer) {
            clearTimeout(timer)
        }
        const { min, max } = chart.scales.x;
        timer = setTimeout(() => {
            console.log('Fetched data between ' + min + ' and ' + max);
            const startDate = moment(min).format('YYYY-MM-DD'); 
            const endDate = moment(max).format('YYYY-MM-DD'); 
            console.log(startDate)
            chart.data.datasets[0].data = modifiedData.map((entry) => entry.posSum);
            chart.data.datasets[1].data = modifiedData.map((entry) => entry.negSum);
            chart.stop(); // make sure animations are not running
            chart.update('none');
            setDateRange([startDate, endDate]);
            chart.resetZoom()
            timeFilter()
        }, 1500);
        
    }

    


    useEffect(() => {
        if (chartRef && chartRef.current) {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }

            const ctx = chartRef.current.getContext('2d');

            const groupedData = permData.reduce((acc, item) => {
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

            modifiedData = Object.keys(groupedData).map((date_posted) => ({
                date_posted,
                posSum: groupedData[date_posted].posSum,
                negSum: -groupedData[date_posted].negSum,
            }));


            chartInstanceRef.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: modifiedData.map((entry) => entry.date_posted),
                    datasets: [
                        {
                            label: `Entries`,
                            data: modifiedData.map((entry) => entry.posSum),
                            backgroundColor: 'rgba(75, 192, 192, 0.8)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                           
                        },
                        {
                            label: 'Entries',
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
                            type: 'time', 
                            time: {
                                parser: 'YYYY-MM-DD',
                                unit: 'day', 
                            },
                        },
                        y: {
                            stacked: true,
                            ticks: {
                                callback: (value) => Math.abs(value),
                                stepSize: 1,
                            },
                        },
                    },
                    plugins: {
                        zoom: {
                            limits: {
                                x: { min: 'original', max: 'original', minRange: 100 },
                                y: { min: 'original', max: 'original', minRange: 100 },
                                
                            },
                            pan: {
                                enabled: false,
                            },
                            zoom: {
                                wheel: {
                                    enabled: false,
                                },
                                drag: {
                                    enabled: true,
                                },
                                pinch: {
                                    enabled: false
                                },
                                mode: 'x',
                                onZoomComplete: startFetch,
                            }
                        }
                    }
                    }
            });
        }

        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, [data]);

    return <canvas ref={chartRef} />;
};

export default AllReviewsChart;