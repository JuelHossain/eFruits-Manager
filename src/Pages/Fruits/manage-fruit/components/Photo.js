import React, { useReducer } from "react";
import { useFruitContext } from "../../../../context/FruitContext";

export default function Photo() {
  const { fruit: { photo } = {}, updateF, initial } = useFruitContext();
  const [show, toggle] = useReducer((state) => initial || !state, false);

  const placeholderImage =
    "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg";

  return (
    <div
      className="relative w-full h-full flex items-center overflow-hidden"
      onMouseOut={toggle}
      onMouseOver={toggle}
      onBlur={toggle}
      onFocus={toggle}>
      <img className="w-full object-cover" src={photo || placeholderImage} alt="" />
      {show && (
        <input
          required
          placeholder="Photo link here"
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
