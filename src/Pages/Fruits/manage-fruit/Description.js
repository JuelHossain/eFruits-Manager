import React from "react";
import { useFruitContext } from "../../../context/fruit-context/FruitContext";
import useFruitActions from "../../../context/fruit-context/useFruitActions";

const Description = () => {
  const [{ fruit }] = useFruitContext();
  const { updateF } = useFruitActions();
  const { description } = fruit;
  return (
    <textarea
      value={description}
      onChange={updateF}
      className=" resize-none h-[11.6rem] w-full p-2 text-lg focus:outline-none border"
    />
  );
};

export default Description;
