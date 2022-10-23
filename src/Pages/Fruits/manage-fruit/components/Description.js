import React from "react";
import { useFruitContext } from "../../../../context/FruitContext";

export default function Description() {
  const { fruit: { description } = {}, updateF } = useFruitContext();

  return (
    <textarea
      value={description}
      onChange={updateF}
      className=" resize-none h-[11.6rem] w-full p-2 text-lg focus:outline-none border"
    />
  );
}
