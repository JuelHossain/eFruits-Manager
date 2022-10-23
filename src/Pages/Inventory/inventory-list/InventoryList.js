import React from "react";
import { FruitProvider } from "../../../context/FruitContext";
import useFruit from "../../../Hooks/useFruit";
import Actions from "./Actions";
import Photo from "./Photo";
import Price from "./Price";
import Quantity from "./Quantity";

function InventoryList({ id, refetch }) {
  const [values, loading] = useFruit(id);
  const newValues = { ...values, refetch };
  return (
    loading || (
      <FruitProvider value={newValues}>
        <tr className=" h-16 p-2 rounded border  shadow-md items-center gap-3 inline-flex justify-between overflow-y-auto">
          <Photo />
          <Price />
          <Quantity />
          <Actions />
        </tr>
      </FruitProvider>
    )
  );
}

export default InventoryList;
