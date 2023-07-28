import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const CustomBarChart = ({ data }) => {


    const CustomYAxisTick = ({ x, y, payload }) => {
        const value = Math.abs(payload.value); // Get the absolute value for the tick
        return <text x={x} y={y} dy={-4} textAnchor="middle" fill="#666">{value}</text>;
    };

    const Graph = () => {
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

        const modifiedData = Object.keys(groupedData).map(date => ({
            date,
            posSum: groupedData[date].posSum,
            negSum: -groupedData[date].negSum,
        }));

        const allNegSum = Math.min(...Object.values(groupedData).map(item => item.negSum));
        const minVal = allNegSum < 0 ? allNegSum - 1 : allNegSum;
        const maxVal = Math.max(...Object.values(groupedData).map(item => item.posSum));

        return (
            <BarChart width={800} height={400} data={modifiedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis
                    tickCount={1}
                    domain={[Math.floor(minVal), Math.ceil(maxVal)]}
                    tick={<CustomYAxisTick />}
                />
                <Tooltip />
                <Legend />
                <Bar dataKey="posSum" fill="#8884d8" stackId="stack" />
                <Bar dataKey="negSum" fill="#82ca9d" stackId="stack" />
            </BarChart>
        );
    };

    return (
        <BarChart width={585} height={250} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis tickCount={1} />
            <Tooltip />
            <Legend />
            <Bar dataKey="goodCount" stackId="a" fill="#82ca9d" />
            <Bar dataKey="badCount" stackId="a" fill="#8884d8" />
        </BarChart>
    );
};

export default CustomBarChart;