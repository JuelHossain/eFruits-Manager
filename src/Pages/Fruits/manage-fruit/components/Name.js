import React from "react";
import { useFruitContext } from "../../../../context/FruitContext";

export default function Name() {
  const { fruit, updateF } = useFruitContext();

  return (
    <div className="w-full">
      <input
        required
        placeholder="Name Here"
        type="text"
        name="name"
        onChange={updateF}
        value={fruit.name}
        className="focus:outline-none text-4xl overflow-hidden font-bold text-center border h-20 w-full"
      />
    </div>
  );
}
