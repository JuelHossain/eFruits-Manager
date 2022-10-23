import React from "react";
import { useFruitContext } from "../../../../context/FruitContext";

export default function SuppliedBy() {
  const { fruit: { supplier } = {}, updateF, initial } = useFruitContext();
  return (
    <div className="flex justify-center items-center h-20 relative w-full border text-xl font-bold gap-2 ">
      Supplied By:
      <input
        required
        placeholder={initial && "Supplier name here"}
        className=" w-40 text-xl focus:outline-none "
        type="text"
        value={supplier}
        name="supplier"
        onChange={updateF}
      />
    </div>
  );
}
