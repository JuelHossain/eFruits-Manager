import React, { useReducer } from "react";
import { useFruitContext } from "../../../../context/FruitContext";

export default function Photo() {
  const [show, toggle] = useReducer((state) => !state, false);
  const { fruit: { photo } = {}, updateF } = useFruitContext();

  return (
    <div
      className="relative w-full h-full flex items-center overflow-hidden"
      onMouseOut={toggle}
      onMouseOver={toggle}
      onBlur={toggle}
      onFocus={toggle}>
      <img className="w-full object-cover" src={photo} alt="" />
      {show && (
        <input
          className=" focus:outline-pink-500 absolute h-36 w-full border p-4 text-xl bottom-0 left-0"
          value={photo}
          name="photo"
          type="text"
          onChange={updateF}
        />
      )}
    </div>
  );
}
