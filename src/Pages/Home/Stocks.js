import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import useFruits from "../../Hooks/useFruits";

function Stocks() {
  const [fruits] = useFruits();
  const navigate = useNavigate();
  return (
    <div className="container shadow-xl rounded-xl mx-auto m-20 hidden md:block">
      <h1 className="text-4xl text-center mb-10">Quantity In Stocks Chart</h1>
      <div className="p-10 flex justify-center items-center">
        <ResponsiveContainer width="95%" height={400}>
          <BarChart data={fruits}>
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              onClick={(e) => {
                navigate(`/update/${e._id}`);
              }}
              dataKey="qty"
              fill="#ff931e"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Stocks;
