import React from "react";
import { useFruitContext } from "../../../../context/fruit-context/FruitContext";
import useFruitActions from "../../../../context/fruit-context/useFruitActions";

export default function Name() {
  const { updateF } = useFruitActions();
  const [{ fruit }] = useFruitContext();

  return (
    <div className="w-full">
      <input
        placeholder="Name"
        type="text"
        name="name"
        onChange={updateF}
        value={fruit.name}
        className="focus:outline-none text-4xl overflow-hidden font-bold text-center border h-20 w-full"
      />
    </div>
  );
}
