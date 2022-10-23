/* eslint-disable no-underscore-dangle */
import React from "react";
import { useFruitContext } from "../../../../context/FruitContext";

function UpdateButton() {
  const { initial } = useFruitContext();
  return (
    <button
      type="submit"
      className="flex justify-center items-center h-20 relative w-full border text-xl font-bold gap-2 hover:bg-pink-600 hover:text-white">
      {initial ? "Add A Fruit" : "Update"}
    </button>
  );
}

export default UpdateButton;
