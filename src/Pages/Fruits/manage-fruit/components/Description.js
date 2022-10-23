import React from "react";
import { useFruitContext } from "../../../../context/FruitContext";

export default function Description() {
  const { fruit: { description } = {}, updateF } = useFruitContext();

  return (
    <textarea
      required
      placeholder="description here"
      value={description}
      onChange={updateF}
      name="description"
      className=" resize-none h-[11.6rem] w-full p-2 text-lg focus:outline-none border"
    />
  );
}
