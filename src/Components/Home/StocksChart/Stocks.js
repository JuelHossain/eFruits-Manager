import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useFruits from "../../../Hooks/useFruits";

const Stocks = () => {
  const [fruits] = useFruits();
  return (
    <div className="container shadow-xl rounded-xl mx-auto m-20">
      <h1 className="text-xl font-bold text-center">
        Quantity In Stocks Chart
      </h1>
      <div className="p-10 flex justify-center items-center">
        <BarChart width={1000} height={400} data={fruits}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="qty" fill="#ff931e" />
        </BarChart>
      </div>
    </div>
  );
};

export default Stocks;
