import React from "react";
import { useFruitContext } from "../../../context/fruit-context/FruitContext";
import Actions from "./Actions";
import Photo from "./Photo";
import Price from "./Price";
import Quantity from "./Quantity";

function InventoryList({ id }) {
  const [{ loading }] = useFruitContext(id);

  return (
    loading || (
      <tr className=" h-16 p-2 rounded border  shadow-md items-center gap-3 inline-flex justify-between overflow-y-auto">
        <Photo />
        <Price />
        <Quantity />
        <Actions />
      </tr>
    )
  );
}

export default InventoryList;
