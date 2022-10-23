import React, { useReducer, useRef } from "react";
import { useFruitContext } from "../../../../context/fruit-context/FruitContext";
import useFruitActions from "../../../../context/fruit-context/useFruitActions";

export default function Photo() {
  const [show, toggle] = useReducer((state) => !state, false);
  const [
    {
      fruit: { photo }
    }
  ] = useFruitContext();
  const { updateF } = useFruitActions();
  const photoUrlRef = useRef(null);

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
          ref={photoUrlRef}
          type="text"
          onChange={updateF}
        />
      )}
    </div>
  );
}
