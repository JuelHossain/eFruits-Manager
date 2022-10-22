import React from "react";
import { useFruitContext } from "../../../context/fruit-context/FruitContext";
import useFruitActions from "../../../context/fruit-context/useFruitActions";

import DeliveredButton from "./DeliveredButton";
import RestockButton from "./RestockButton";

const Quantity = () => {
  const [{ fruit }] = useFruitContext();
  const { updateF } = useFruitActions();

  const { qty, weight } = fruit;
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
          <span className="absolute right-4 md:right-8 text-xs sm:text-xl  font-bold">
            {per}
          </span>
        </div>

        <RestockButton />
      </div>
    </>
  );
};

export default Quantity;
