import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
const data = [
  { name: "Store A", GM: 5000 },
  { name: "Store B", GM: 3000 },
];
const Chart: React.FC = () => {
  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="GM" fill="#82ca9d" />
    </BarChart>
  );
};
export default Chart;
