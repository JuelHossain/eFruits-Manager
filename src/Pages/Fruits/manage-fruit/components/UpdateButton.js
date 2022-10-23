/* eslint-disable no-underscore-dangle */
import React from "react";
import { useFruitContext } from "../../../../context/fruit-context/FruitContext";

function UpdateButton() {
  const [{ handleUpdate }] = useFruitContext();
  return (
    <button
      type="button"
      className="flex justify-center items-center h-20 relative w-full border text-xl font-bold gap-2 hover:bg-pink-600 hover:text-white"
      onClick={handleUpdate}>
      Update
    </button>
  );
}

export default UpdateButton;
