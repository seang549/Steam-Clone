import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const RecentReviewsBarChart = ({ data }) => {
    return (
        <BarChart width={585} height={250} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="goodCount" stackId="a" fill="#8ffa9d" />
            <Bar dataKey="badCount" stackId="a" fill="#8ff4d8" />
        </BarChart>
    );
};

export default RecentReviewsBarChart;