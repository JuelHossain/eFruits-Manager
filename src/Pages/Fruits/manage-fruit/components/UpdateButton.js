/* eslint-disable no-underscore-dangle */
import React from "react";
import { useFruitContext } from "../../../../context/FruitContext";

function UpdateButton() {
  const { updateFruit } = useFruitContext();
  return (
    <button
      type="button"
      className="flex justify-center items-center h-20 relative w-full border text-xl font-bold gap-2 hover:bg-pink-600 hover:text-white"
      onClick={updateFruit}>
      Update
    </button>
  );
}

export default UpdateButton;
