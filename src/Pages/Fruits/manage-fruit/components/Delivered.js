import React from "react";
import { useFruitContext } from "../../../../context/fruit-context/FruitContext";

export default function Delivered() {
  const [{ fruit }] = useFruitContext();
  const { delivered } = fruit;
  return (
    <div className="flex justify-center items-center h-20 relative w-full border text-xl font-bold ">
      <p className="text-xl font-bold ">
        Total Delivered:
        <input
          className="w-20 text-xl focus:outline-none"
          type="number"
          value={delivered}
          readOnly
        />
      </p>
    </div>
  );
}
