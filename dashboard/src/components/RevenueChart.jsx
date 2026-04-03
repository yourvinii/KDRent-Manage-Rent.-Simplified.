import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "Jan", revenue: 4000, expense: 2400 },
  { name: "Feb", revenue: 3000, expense: 1398 },
  { name: "Mar", revenue: 5000, expense: 2000 },
  { name: "Apr", revenue: 4000, expense: 3780 },
];

export default function RevenueChart() {
  return (
    <div className="card">
      <h3>Revenue</h3>
      <LineChart width={400} height={200} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="revenue" stroke="#4CAF50" />
        <Line type="monotone" dataKey="expense" stroke="#FF5722" />
      </LineChart>
    </div>
  );
}
