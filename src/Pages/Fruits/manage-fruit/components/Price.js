import React from "react";

import { CurrencyBangladeshiIcon } from "@heroicons/react/solid";
import { useFruitContext } from "../../../../context/fruit-context/FruitContext";
import useFruitActions from "../../../../context/fruit-context/useFruitActions";

const Price = () => {
  const [{ fruit }] = useFruitContext();
  const { price, weight } = fruit;
  const { updateF } = useFruitActions();
  return (
    <div className="flex gap-2 justify-between items-center w-full  border h-20">
      {/* price title  */}
      <p className="flex-1 text-2xl h-full flex justify-center items-center border-r">
        Price
      </p>

      {/* price editing input field  */}
      <div className="w-1/3 text-2xl h-full flex justify-center items-center relative">
        <input
          className="w-full text-2xl appearance-none outline-none  h-full cursor-auto text-center"
          min={0}
          type="number"
          value={price}
          name="price"
          onChange={updateF}
        />
        <CurrencyBangladeshiIcon className="text-xl absolute bottom-6 right-2 md:right-6 lg:right-8 xl:right-12 w-6 " />
      </div>

      {/* currency per  */}
      <input
        className="w-1/3 text-2xl appearance-none outline-none  h-full cursor-auto text-center border-l"
        type="text"
        value={weight}
        name="weight"
        onChange={updateF}
      />
    </div>
  );
};

export default Price;
