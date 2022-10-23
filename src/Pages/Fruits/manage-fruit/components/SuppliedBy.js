import React from "react";
import { useFruitContext } from "../../../../context/fruit-context/FruitContext";
import useFruitActions from "../../../../context/fruit-context/useFruitActions";

export default function SuppliedBy() {
  const [{ fruit }] = useFruitContext();
  const { updateF } = useFruitActions();
  const { supplier } = fruit;
  return (
    <div className="flex justify-center items-center h-20 relative w-full border text-xl font-bold gap-2 ">
      Supplied By:
      <input
        className=" w-40 text-xl focus:outline-none "
        type="text"
        value={supplier}
        name="supplier"
        onChange={updateF}
      />
    </div>
  );
}
