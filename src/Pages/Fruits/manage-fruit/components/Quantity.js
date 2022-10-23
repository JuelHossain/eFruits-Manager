import React from "react";
import { useFruitContext } from "../../../../context/FruitContext";

import DeliveredButton from "./DeliveredButton";
import RestockButton from "./RestockButton";

function Quantity() {
  const { fruit: { qty, weight } = {}, updateF } = useFruitContext();

  const per = weight?.toLowerCase().includes("p") ? "Pcs" : "Kg";
  return (
    <>
      <div className="flex justify-center items-center h-20 relative w-full border text-3xl font-bold ">
        <p>Quantity</p>
      </div>
      <div className="flex w-full h-20 justify-center items-center">
        <DeliveredButton />

        <div className="w-1/3 h-full flex justify-center items-center border relative">
          <input
            className="w-full h-full sm:text-xl font-bold text-center appearance-none outline-none "
            min={0}
            type="number"
            value={qty}
            name="qty"
            onChange={updateF}
          />
          <span className="absolute right-4 md:right-8 text-xs sm:text-xl  font-bold">{per}</span>
        </div>

        <RestockButton />
      </div>
    </>
  );
}

export default Quantity;
